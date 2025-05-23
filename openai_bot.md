以下に「OpenAI APIを使ってチャットボットを動かすまでの設定の流れ」を、Vite + Express構成前提で、Notionやドキュメントに貼って使えるマークダウン形式でまとめたで👇

markdown
コピーする
編集する
# OpenAI API連携チャットボット構築手順（Vite + Express構成）

## ✅ 全体の流れ

1. OpenAI APIキーの取得
2. .envファイルの作成
3. Expressサーバー（`server.js` or `server.cjs`）の作成
4. クライアント（React）からAPIへリクエスト
5. Viteでローカルサーバー起動 & 動作確認

---

## 🧱 1. OpenAI APIキーを取得

1. [OpenAI Platform](https://platform.openai.com/account/api-keys) にアクセス  
2. `+ Create new secret key` をクリック  
3. 生成されたキーをコピーしておく（`sk-xxxx...`）

---

## 📝 2. .envファイル作成

プロジェクトルートに `.env` ファイルを作成し、以下のように記述：

OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

php
コピーする
編集する

※ `.gitignore` に `.env` を追加しておくことを推奨

---

## ⚙️ 3. Expressサーバー作成（`server.cjs`）

```js
// server.cjs
const express = require('express')
const fetch = require('node-fetch')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

dotenv.config()
const app = express()
app.use(bodyParser.json())

app.post('/api/openai-chat', async (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY
  const { query } = req.body

  if (!query) return res.status(400).json({ error: 'Query is required' })

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'あなたは整骨院の受付AIです。丁寧に答えてください。' },
          { role: 'user', content: query }
        ]
      })
    })

    const data = await response.json()
    res.status(response.status).json(data)
  } catch (err) {
    console.error('[OpenAIエラー]', err)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.listen(5180, () => {
  console.log('✅ Server running at http://localhost:5180')
})
🌐 4. フロントエンドで送信する（例：Contact.tsx）
ts
コピーする
編集する
const handleChatSubmit = async () => {
  if (!chatInput.trim()) return
  setIsChatLoading(true)

  try {
    const res = await fetch('/api/openai-chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: chatInput })
    })

    const data = await res.json()
    if (res.ok) {
      setChatResponse(data.choices?.[0]?.message?.content || '回答が取得できませんでした')
    } else {
      setChatResponse('エラーが発生しました: ' + (data.error?.message || '不明なエラー'))
    }
  } catch (err) {
    console.error(err)
    setChatResponse('ネットワークエラーが発生しました')
  } finally {
    setIsChatLoading(false)
    setChatInput('')
  }
}
🚀 5. Vite設定確認（vite.config.ts）
ts
コピーする
編集する
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/api': 'http://localhost:5180'
    }
  }
})
✅ 動作確認手順
node server.cjs でAPIサーバー起動

npm run dev（または vite）でフロント起動

http://localhost:5173 でチャットをテスト

コンソールにログが出る／返答が表示されることを確認

📌 注意点
OpenAIのAPI利用はクレカ登録＋残高必須

利用上限は Usage Limits から設定可

.env は絶対に公開リポジトリにアップしない！

🧯 トラブル対処
症状	対処
Incorrect API key provided	.envのキー確認・空白や改行除去
500エラー	query未送信／APIのレスポンス確認
404エラー	proxy設定 or /api/openai-chatのパス漏れ