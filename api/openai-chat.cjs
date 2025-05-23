const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')

// node-fetch v3以降のCJS対応
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

dotenv.config()
const app = express()
app.use(bodyParser.json())

app.post('/api/openai-chat', async (req, res) => {
  console.log('--- /api/openai-chat 受信 ---');
  const apiKey = process.env.OPENAI_API_KEY
  const { query } = req.body

  console.log('[ENV OPENAI_API_KEY]', process.env.OPENAI_API_KEY);
  console.log('[RECV BODY]', req.body);

  if (!query) return res.status(400).json({ error: 'Query is required' })

  try {
    console.log('[apiKey]', apiKey);
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