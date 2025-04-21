ReactとViteの組み合わせでVercelへデプロイするた
めの包括的な説明書
最新のReactアプリケーションをViteでビルドし、Vercelにデプロイするための完全ガイド
⽬次
1. はじめに
2. 環境構築とプロジェクト作成
3. プロジェクト構造と主要ファイル
4. Vercelへのデプロイ⽅法
5. 環境変数の設定と管理
6. よくあるトラブルシューティング
7. 実践的なデプロイ⼿順
8. 発展的なトピック
9. 参考資料
1. はじめに
ReactとViteとは
ReactはFacebookが開発したユーザーインターフェイスを構築するためのJavaScriptライブラリです。コンポーネントベ
ースのアプローチにより、再利⽤可能なUI要素を作成できます。
Viteはモダンなフロントエンド開発ツールで、従来のwebpackベースのビルドツール（Create React Appなど）と⽐較し
て以下の利点があります：
Viteの主な特徴
超⾼速な開発サーバー起動時間
ESモジュールを活⽤した効率的なHMR（Hot
Module Replacement）
最⼩限の設定でプロジェクト開始が可能
本番向けに最適化されたビルド出⼒
TypeScriptなどの様々な⾔語とフレームワークの
サポート
React + Viteの利点
Create React Appより⾼速な開発体験
モダンなJavaScript機能のすぐれたサポート
柔軟な設定オプション
最適化されたビルドパフォーマンス
プラグインによる拡張性の⾼さ
Vercelとは
Vercelはモダンなウェブアプリケーションをデプロイするためのクラウドプラットフォームです。特にReactなどのフロ
ントエンドフレームワークと相性が良く、以下の特徴があります：
GitHubやGitLabなどのGitプロバイダとのシームレスな統合
プレビューデプロイメント機能（PRごとに⾃動的にプレビュー環境を⽣成）
グローバルCDNによる⾼速な配信
サーバーレス関数のサポート
環境変数の簡単な管理
カスタムドメインの簡単な設定
2. 環境構築とプロジェクト作成
必要な環境
Reactプロジェクトを始める前に、以下のツールがインストールされていることを確認してください：
Node.js (14.18+, 16+)
npm または Yarn
Git
Viteを使ったReactプロジェクトの作成
1 新しいプロジェクトの作成
以下のコマンドを実⾏して、新しいVite + Reactプロジェクトを作成します：
npm create vite@latest my-react-app --template react
TypeScriptを使⽤する場合は、以下のコマンドを使⽤します：
npm create vite@latest my-react-app --template react-ts
2 プロジェクトディレクトリに移動
cd my-react-app
3 依存関係のインストール
npm install
または、yarnを使⽤している場合：
yarn
4 開発サーバーの起動
npm run dev
または、yarnを使⽤している場合：
yarn dev
開発サーバーが起動し、通常は http://localhost:5173 でアプリケーションにアクセスできます。
注意: プロジェクトテンプレート
Viteには様々なテンプレートが⽤意されています：
react - React（JavaScript）
react-ts - React + TypeScript
react-swc - React + SWC（より⾼速なトランスパイル）
react-swc-ts - React + SWC + TypeScript
3. プロジェクト構造と主要ファイル
基本的なプロジェクト構造
ViteによるReactプロジェクトの基本的な構造は以下のようになっています：
my-react-app/
├── node_modules/
├── public/ # 静的アセット（画像、フォントなど）
├── src/ # ソースコード
│ ├── assets/ # コンポーネントで使⽤される画像など
│ ├── components/ # Reactコンポーネント
│ ├── App.jsx # アプリケーションのメインコンポーネント
│ ├── App.css # Appコンポーネントのスタイル
│ ├── index.css # グローバルスタイル
│ └── main.jsx # アプリケーションのエントリーポイント
├── .gitignore # Gitの除外ファイル設定
├── index.html # メインHTMLファイル
├── package.json # プロジェクト設定と依存関係
├── vite.config.js # Viteの設定ファイル
└── README.md # プロジェクトドキュメント
主要ファイルの説明
index.html
HTMLエントリーポイントです。ViteはこのファイルをHTMLテンプレートとして使⽤し、ビルド時に変更を加えます。
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<link rel="icon" type="image/svg+xml" href="/vite.svg" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Vite + React</title>
</head>
<body>
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
</body>
</html>
main.jsx
アプリケーションのエントリーポイントです。Reactアプリをレンダリングする場所です。
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App />
</React.StrictMode>
)
App.jsx
メインのアプリケーションコンポーネントです。アプリケーションのトップレベルの構造がここに定義されます。
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
const [count, setCount] = useState(0)
return (
<>
<div>
<a href="https://vitejs.dev" target="_blank">
<img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
<img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button>
<p>
Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p>
</>
)
}
export default App
vite.config.js
Viteの設定ファイルです。プラグインの追加や、ビルドオプションのカスタマイズができます。
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
})
package.json
プロジェクトの依存関係と実⾏スクリプトが定義されています。
{
"name": "my-react-app",
"private": true,
"version": "0.0.0",
"type": "module",
"scripts": {
"dev": "vite", // 開発サーバーを起動
"build": "vite build", // 本番⽤ビルドを作成
"lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview" // ビルド後のプレビュー
},
"dependencies": {
"react": "^18.2.0",
"react-dom": "^18.2.0"
},
"devDependencies": {
"@types/react": "^18.2.15",
"@types/react-dom": "^18.2.7",
"@vitejs/plugin-react": "^4.0.3",
"eslint": "^8.45.0",
"eslint-plugin-react": "^7.32.2",
"eslint-plugin-react-hooks": "^4.6.0",
"eslint-plugin-react-refresh": "^0.4.3",
"vite": "^4.4.5"
}
}
4. Vercelへのデプロイ⽅法
Vercelへのデプロイには主に2つの⽅法があります：
1. GitHubなどのGitプロバイダとの連携 - 最も簡単で推奨される⽅法
2. VercelのCLIを使⽤したデプロイ - ローカル環境からの直接デプロイ
GitHubリポジトリからのデプロイ
1 Vercelアカウントの作成
Vercel公式サイトでアカウントを作成します。GitHubアカウントでのサインアップが最も簡単です。
2 GitHubリポジトリの作成
ローカルのReact+Viteプロジェクトを新しいGitHubリポジトリにプッシュします：
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
3 Vercelでプロジェクトのインポート
1. Vercelダッシュボードにアクセスし、「New Project」をクリック
2. 「Import Git Repository」セクションでリポジトリを選択
3. リポジトリの検索欄に作成したリポジトリ名を⼊⼒して選択
4. 「Import」ボタンをクリック
4 プロジェクト設定
プロジェクト設定画⾯では、以下の設定を確認または変更します：
Project Name: プロジェクト名（URLの⼀部になります）
Framework Preset: Viteが⾃動検出されるはずです
Root Directory: プロジェクトのルートディレクトリ
Build Command: npm run build（デフォルトで設定されるはず）
Output Directory: dist（デフォルトで設定されるはず）
Environment Variables: 必要に応じて環境変数を設定
5 デプロイ
設定を確認し、「Deploy」ボタンをクリックしてデプロイを開始します。デプロイが完了すると、プロジェクトの
URLが表⽰されます。
⾃動デプロイ
Vercelはデフォルトで以下の⾃動デプロイ機能が有効になっています：
メインブランチ（通常は main）へのプッシュは、本番環境に⾃動デプロイされます
プルリクエストごとに、プレビュー環境が⾃動的に作成されます
これらの設定はVercelのプロジェクト設定で変更できます
VercelのCLIを使⽤したデプロイ
1 Vercel CLIのインストール
npm install -g vercel
2 ログインと初期設定
vercel login
メールアドレスを⼊⼒し、送信されたリンクをクリックしてログインします。
3 プロジェクトのデプロイ
プロジェクトのルートディレクトリで以下のコマンドを実⾏します：
vercel
対話的な設定が始まります。各質問に適切に回答してください。デフォルト値が適切な場合は、そのままEnterキーを
押します。
4 本番環境へのデプロイ
プレビューではなく本番環境に直接デプロイする場合は、以下のコマンドを使⽤します：
vercel --prod
5. 環境変数の設定と管理
環境変数は、API キーやその他の機密情報をコードから分離するために使⽤されます。ViteとVercelでは、環境変数を簡
単に管理できます。
Viteでの環境変数の使⽤
Viteでは、import.meta.env オブジェクトを通じて環境変数にアクセスできます。
重要な注意点
セキュリティ上の理由から、Viteの環境変数は VITE_ プレフィックスで始まる必要があります。例：VITE_API_KEY
ローカル開発での環境変数の設定
プロジェクトのルートに .env ファイルを作成します：
# .env
VITE_API_URL=https://api.example.com
VITE_API_KEY=your_api_key
異なる環境ごとに別のファイルを作成することもできます：
.env.development - 開発環境⽤
.env.production - 本番環境⽤
.env.local - ローカル環境のみの上書き設定（gitignoreに追加すべき）
環境変数へのアクセス
Reactコンポーネント内で環境変数にアクセスする例：
function App() {
// 環境変数へのアクセス
const apiUrl = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY
return (
<div>
<p>API URL: {apiUrl}</p>
{/* apiKeyのような機密情報を表⽰するのは実際のアプリではお勧めしません */}
</div>
)
}
TypeScriptでの環境変数の型定義
TypeScriptを使⽤している場合、環境変数の型を適切に定義するには：
// src/vite-env.d.ts
/// <reference types="vite/client" />
interface ImportMetaEnv {
readonly VITE_API_URL: string
readonly VITE_API_KEY: string
// その他の環境変数...
}
interface ImportMeta {
readonly env: ImportMetaEnv
}
Vercelでの環境変数の設定
1 Vercelダッシュボードでの設定
1. Vercelダッシュボードにログイン
2. 対象のプロジェクトを選択
3. 「Settings」タブをクリック
4. 左側のメニューから「Environment Variables」を選択
5. 「Add New」ボタンをクリック
6. 環境変数の名前（VITE_プレフィックス付き）と値を⼊⼒
7. 適⽤する環境を選択（Production、Preview、Development）
8. 「Save」ボタンをクリック
2 Vercel CLIでの環境変数の設定
Vercel CLIを使⽤して環境変数を設定することもできます：
vercel env add VITE_API_KEY
このコマンドを実⾏すると、値の⼊⼒と環境の選択を求められます。
重要な注意点
Vercelでの環境変数使⽤時の注意事項：
Viteでは環境変数名に VITE_ プレフィックスが必要
環境変数が正しく設定された後は、新しいデプロイが必要
システム環境変数（VERCEL_で始まるもの）にアクセスするには、VITE_VERCEL_ENV のようにViteプレフィック
スを追加
vite.config.jsでの環境変数の設定
Vercelのシステム環境変数などを利⽤する場合、vite.config.jsでグローバル定数として設定できます：
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig(() => {
return {
plugins: [react()],
define: {
'__APP_ENV__': JSON.stringify(process.env.VITE_VERCEL_ENV),
},
}
})
複数の環境変数のサポート
複数の環境変数を使⽤する場合の設定例：
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
plugins: [react()],
define: {
'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY),
'process.env.VITE_APP_MODE': JSON.stringify(process.env.VITE_APP_MODE),
}
})
6. よくあるトラブルシューティング
SPAルーティングの問題（404エラー）
React Routerなどのクライアントサイドルーティングを使⽤している場合、直接URLにアクセスすると404エラー
が発⽣することがあります。
解決策
プロジェクトのルートに vercel.json ファイルを作成し、以下の内容を追加します：
{
"rewrites": [
{
"source": "/(.*)",
"destination": "/index.html"
}
]
}
この設定により、すべてのリクエストが index.html にリダイレクトされ、クライアントサイドルーティングが正
しく機能するようになります。
環境変数が正しく読み込まれない
環境変数が undefined になる場合の主な原因と解決策：
原因1: プレフィックスが間違っている
Viteでは環境変数に VITE_ プレフィックスが必要です。
解決策
環境変数の名前を VITE_ プレフィックスを付けて変更します：
誤: API_KEY
正: VITE_API_KEY
原因2: vite.config.jsでの設定が必要
Vercelでデプロイする場合、特に環境変数がビルド時に正しく注⼊されないことがあります。
解決策
vite.config.js ファイルに環境変数の設定を追加します：
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
plugins: [react()],
define: {
'process.env.VITE_API_KEY': JSON.stringify(process.env.VITE_API_KEY)
}
})
ビルドエラー
Vercelでのビルドが失敗する⼀般的な原因と解決策：
原因1: Node.jsバージョンの不⼀致
ローカルと異なるNode.jsバージョンで動作していることが原因のエラー。
解決策
Vercelプロジェクト設定で使⽤するNode.jsバージョンを指定します：
1. Vercelダッシュボードでプロジェクトを選択
2. 「Settings」→「General」→「Node.js Version」
3. 必要なバージョンを選択して保存
または、プロジェクトルートに .nvmrc ファイルを作成して指定することもできます：
16.14.0
原因2: 依存関係の問題
不⾜している依存関係やバージョンの不⼀致によるエラー。
解決策
以下を確認してください：
すべての依存関係が package.json に含まれているか
devDependenciesに必要なパッケージが含まれていないか（Vercelではデフォルトでdevに含まれるものはビ
ルド時のみ使⽤されます）
ロックファイル（package-lock.json または yarn.lock）が最新か
プロジェクトを再構築してみるのも有効です：
rm -rf node_modules package-lock.json
npm install
CSSスタイルが適⽤されない
デプロイ後にCSSスタイルが正しく適⽤されない場合：
原因
ビルドプロセスでCSSの処理が正しく⾏われていない、またはキャッシュの問題。
解決策
1. Viteの設定でCSSの処理が正しく⾏われているか確認
2. PostCSSやSassなどのプリプロセッサを使⽤している場合、必要な依存関係が正しくインストールされてい
るか確認
3. キャッシュをクリアするためにVercelの再デプロイを試す
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
plugins: [react()],
css: {
// CSS関連の設定
devSourcemap: true, // ソースマップを有効化
}
})
7. 実践的なデプロイ⼿順
ここでは、最初のプロジェクト作成からVercelへのデプロイまでの⼀連の流れを順を追って説明します。
ステップバイステップガイド
1 プロジェクトの作成
npm create vite@latest my-react-app --template react
cd my-react-app
npm install
2 Gitリポジトリの初期化
git init
プロジェクトルートに .gitignore ファイルを作成または確認します：
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*
node_modules
dist
dist-ssr
*.local
# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
3 環境変数の設定（必要な場合）
プロジェクトルートに .env ファイルを作成します：
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My React App
環境変数を使⽤するコンポーネントの例：
// src/App.jsx
function App() {
const apiUrl = import.meta.env.VITE_API_URL;
const appTitle = import.meta.env.VITE_APP_TITLE;
return (
<div>
<h1>{appTitle}</h1>
<p>API URL: {apiUrl}</p>
</div>
);
}
4 アプリケーションのローカルテスト
npm run dev
ブラウザで http://localhost:5173 を開き、アプリケーションが正しく動作することを確認します。
5 SPAルーティングの設定（React Routerを使⽤する場合）
プロジェクトルートに vercel.json ファイルを作成します：
{
"rewrites": [
{
"source": "/(.*)",
"destination": "/index.html"
}
]
}
6 GitHubリポジトリへのプッシュ
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/my-react-app.git
git push -u origin main
7 Vercelへのデプロイ
GitHubリポジトリからデプロイする場合：
1. Vercelにログインし、「New Project」をクリック
2. GitHubリポジトリを選択
3. 設定を確認（フレームワークプリセットは⾃動的に「Vite」が選択されるはず）
4. 環境変数を追加（必要な場合）
NAME: VITE_API_URL, VALUE: https://api.example.com
NAME: VITE_APP_TITLE, VALUE: My React App
5. 「Deploy」ボタンをクリック
8 デプロイの確認とテスト
デプロイが完了したら、提供されたURLにアクセスしてアプリケーションが正しく動作することを確認します。
以下の点をチェックしてください：
ページが正しく表⽰されるか
環境変数が正しく読み込まれているか
SPAルーティングが機能しているか（別のルートに移動してページをリロードしてもエラーが発⽣しないか）
CSSや画像などの静的アセットが正しく表⽰されるか
9 カスタムドメインの設定（任意）
Vercelダッシュボードでカスタムドメインを設定する⼿順：
1. プロジェクトダッシュボードで「Settings」タブをクリック
2. 「Domains」セクションをクリック
3. 「Add」ボタンをクリック
4. 使⽤したいドメイン名を⼊⼒
5. 指⽰に従ってDNS設定を⾏う
8. 発展的なトピック
サーバーサイドレンダリング (SSR)
ViteはSSRをサポートしており、サーバーサイドで
Reactコンポーネントをレンダリングできます。SSR
を実装するには、以下のプラグインが役⽴ちます：
vite-plugin-ssr - SSRを簡単に実装できるプラ
グイン
vite-plugin-vercel - VercelでSSRを使⽤する
際に便利なプラグイン
SSRを使⽤すると、初期ロード時のパフォーマンス
やSEO対策が向上します。
サーバーレス関数
VercelではReact+Viteプロジェクトにサーバーレス
関数を追加できます。プロジェクトのルートに api
ディレクトリを作成し、その中にサーバーレス関数
を実装します：
// api/hello.js
export default function handler(request, r
response.status(200).json({
message: 'Hello from API!',
});
}
Vercelにデプロイすると、この関数は /api/hello
エンドポイントとして利⽤可能になります。
エッジ関数
Vercelのエッジ関数を使⽤すると、グローバルに分
散されたエッジネットワークでコードを実⾏できま
す：
// api/edge.js
export const config = {
runtime: 'edge',
};
export default function handler(request) {
return new Response(
JSON.stringify({ message: 'Hello from
{
headers: {
'content-type': 'application/json'
},
}
);
}
静的サイト⽣成 (SSG)
ViteとReactで静的サイト⽣成を実装するには：
1. ビルド前に必要なデータをフェッチする仕組みを
作成
2. そのデータに基づいて静的なHTMLファイルを⽣
成
3. ビルド時にデータをプリレンダリング
SSGを使⽤すると、CDNでキャッシュ可能な完全に
静的なHTMLが⽣成されるため、パフォーマンスが
向上します。
継続的インテグレーション/継続的デプロイ (CI/CD)
Vercelは⾃動的にGitリポジトリと連携してCI/CDパイプラインを構築します。以下のような機能があります：
プレビューデプロイメント - プルリクエストごとに⾃動的にプレビュー環境が作成されます
本番デプロイメント - メインブランチへのマージ時に⾃動的に本番環境にデプロイされます
デプロイフック - デプロイのライフサイクルに応じて特定のアクションをトリガーできます
GitHub Actionsとの連携
より⾼度なCI/CDパイプラインを構築するために、GitHub Actionsと連携することができます。以下は基本的な
GitHub Actionsワークフローの例です：
// .github/workflows/main.yml
name: CI/CD
on:
push:
branches: [ main ]
pull_request:
branches: [ main ]
jobs:
build:
runs-on: ubuntu-latest
steps:
- uses: actions/checkout@v3
- name: Setup Node.js
uses: actions/setup-node@v3
with:
node-version: '16'
- name: Install dependencies
run: npm ci
- name: Run tests
run: npm test
- name: Build
run: npm run build
- name: Deploy to Vercel
uses: amondnet/vercel-action@v20
with:
vercel-token: ${{ secrets.VERCEL_TOKEN }}
vercel-org-id: ${{ secrets.ORG_ID }}
vercel-project-id: ${{ secrets.PROJECT_ID }}
vercel-args: '--prod'
9. 参考資料
公式ドキュメント
Vite公式ガイド
Viteの基本的な使い⽅、設定⽅法などが詳しく説明されています。
React公式ドキュメント
Reactの基本から応⽤までを学べる公式リソース。
Vercel公式ドキュメント
Vercelのプラットフォームの使い⽅、デプロイ⽅法などの詳細。
VercelのViteサポートについて
VercelでViteプロジェクトをデプロイする⽅法の詳細。
Viteの環境変数とモード
Viteでの環境変数の使い⽅に関する公式ガイド。
便利なツールとプラグイン
vite-plugin-vercel
VercelのBuild Output APIを実装したViteプラグイン。サーバーレス関数やエッジ関数の使⽤を簡素化します。
vite-plugin-ssr
ViteでSSRを簡単に実装するためのプラグイン。
Vercel CLI
コマンドラインからVercelを操作するためのツール。
チュートリアルとサンプルプロジェクト
Vercelの公式サンプルプロジェクト
Next.jsがメインですが、様々な実装例が参考になります。
Awesome Vite
Vite関連の優れたリソース、プラグイン、ツールのコレクション。
© 2023 React + Vite + Vercel デプロイガイド
このドキュメントは、ReactとViteを使⽤したWebアプリケーションをVercelにデプロイするための包括的な⼿引きとし
て作成されました。
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$
$