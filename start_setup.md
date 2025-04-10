# Git プロジェクト管理ガイド

## 新規プロジェクトのセットアップ手順

### 1. GitHub側での準備
1. GitHubにログイン
2. 右上の「+」ボタン → 「New repository」をクリック
3. リポジトリ名を入力（例：`my-project`）
4. 必要に応じて説明を追加
5. 「Public」または「Private」を選択
6. 「Create repository」ボタンをクリック

### 2. ローカル環境での初期設定

#### 新規プロジェクトの場合:
```bash
# 1. プロジェクトのルートディレクトリに移動
cd /path/to/project-folder

# 2. Gitリポジトリを初期化
git init

# 3. リモートリポジトリを追加
git remote add origin https://github.com/username/repository-name.git

# 4. ファイルをステージングに追加
git add .

# 5. 初期コミット
git commit -m "Initial commit"

# 6. リモートリポジトリにプッシュ
git push -u origin main  # または git push -u origin master
```

#### 既存のGitHubリポジトリをクローンする場合:
```bash
# 1. クローンするフォルダの親ディレクトリに移動
cd /path/to/parent-folder

# 2. リポジトリをクローン
git clone https://github.com/username/repository-name.git

# 3. クローンしたプロジェクトディレクトリに移動
cd repository-name
```

## 日常のワークフロー

### 作業開始前の確認

```bash
# 1. 正しいディレクトリにいることを確認
pwd

# 2. リモートリポジトリの設定を確認
git remote -v

# 3. リモートの変更を取得
git fetch

# 4. ローカルとリモートの状態を確認
git status

# 5. リモートの変更を取り込む（必要な場合）
git pull
```

### 変更作業後のコミットとプッシュ

```bash
# 1. 変更したファイルを確認
git status

# 2. 変更をステージングに追加
git add .

# 3. 変更をコミット
git commit -m "変更内容の簡潔な説明"

# 4. リモートにプッシュ
git push

# 5. プッシュが成功したことを確認
# ブラウザでGitHubリポジトリを開いて確認するか、以下のコマンドを実行
git fetch && git status
```

## トラブルシューティング

### リモートリポジトリの変更が原因でプッシュが拒否される場合

```bash
# 1. リモートの変更を取得して統合
git pull

# 2. コンフリクトがあれば解決

# 3. 再度プッシュ
git push
```

### 意図しない変更をリセットしたい場合

```bash
# ステージングされていない変更を破棄
git checkout -- .

# 直前のコミットまで戻す（コミット済みの変更も破棄）
git reset --hard HEAD
```

### リポジトリの状態を確認する便利なコマンド

```bash
# コミット履歴を確認
git log --oneline --graph

# ブランチ一覧を確認
git branch -a

# 特定のファイルの変更履歴を確認
git log --follow -p -- filename
```

## 重要な注意事項

1. **常に現在のディレクトリを確認する**: コマンド実行前に `pwd` を使用して、正しいプロジェクトディレクトリにいることを確認しましょう。

2. **git status で状態確認**: 重要な操作の前後には必ず `git status` を実行して、リポジトリの状態を確認しましょう。

3. **リモートリポジトリを目視確認**: 重要なプッシュ後はブラウザでGitHubを開き、変更が反映されていることを確認しましょう。

4. **複数プロジェクト管理のコツ**: 各プロジェクトは完全に分離された別々のフォルダで管理し、ネストさせないようにしましょう。

5. **強制プッシュに注意**: `git push --force` は履歴を書き換えるため、原則として使用しないでください。

6. **定期的なバックアップ**: 重要な作業セッション後は、`.git` フォルダを除外したプロジェクトのZIPバックアップを作成しておくと安心です。

## このガイドは各プロジェクトのルートディレクトリに置いて、作業開始時に確認しましょう。