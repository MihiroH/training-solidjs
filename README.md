## セットアップ
```bash
$ npm ci
$ npm run dev
$ open http://localhost:3000/
```

## 開発環境
|ツール名                   |概要      |
|---------------------------|----------|
|[Vite](https://vitejs.dev/)|Build tool|
|[SolidJS](https://www.solidjs.com/)|JavaScript Library|
|[ESLint](https://eslint.org/)|JavaScript Linter|
|[Sass (SCSS)](https://sass-lang.com/)|CSS preprocessor|
|[Stylelint](https://stylelint.io/)|CSS Linter|
|[lint-staged](https://github.com/okonet/lint-staged)|Run linters against staged git files|
|[husky](https://github.com/typicode/husky)|Do something on you commit or push|

## コミットメッセージのルール
コミットメッセージ時の先頭にプレフィックス列のいづれを記述してください。  
コミット時にプレフィックスが付いているかチェックされます。  
付いていない場合は、コミットできないようになっています。  

※例) feat: ヘッダーを追加  
※コロン(:)をつけ忘れないように気をつけてください

|プレフィックス|説明|
|------|----|
|feat:|新機能追加|
|fix:|バグ修正|
|docs:|ドキュメントの追加・変更・削除|
|style:|プログラムの動きに影響を与えない変更（インデントの調整やフォーマッタにかけた場合など）|
|refactor:|リファクタリング|
|perf:|パフォーマンス向上|
|test:|テスト追加・既存テストの修正|
|chore:|ビルドプロセスやドキュメント生成のような補助ツールやライブラリの変更|
|ci:|ciに関すること|
|revert:|コミット取り消し|


## デプロイ
Githubにプッシュした時点で自動的に[Vercel](https://vercel.com/docs)にデプロイされます。  
デプロイ先URLなどの詳細はVercelにログインしてご確認ください。

## コマンド一覧

### ローカル用のビルド
ローカル開発で使用します。

```bash
$ npm run dev # or npm run start
```

### 本番とSTG用のビルド
Vercelにデプロイするので基本的には使用しません。

```bash
$ npm run bulid
```

### サーバーの起動
ビルドは行わず、サーバーの起動のみ実行します。  
ビルド後のファイルをプレビューしたいときに使用します。  
使う機会はあまりないでしょう。

```bash
$ npm run serve
```

### JavaScriptとCSSのLint

```
$ npm run lint
```

### JavaScriptとCSSのLintとFix
対象ファイル: `./src/**/*.{js,jsx,ts,tsx,scss}`

```
$ npm run lint:fix
```

### JavaScriptのLint
対象ファイル: `./src/**/*.{js,jsx,ts,tsx}`

```bash
$ npm run lint:script
```

### JavaScriptのFix
対象ファイル: `./src/**/*.{js,jsx,ts,tsx}`

```bash
$ npm run lint:script:fix
```

### CSSのLint
対象ファイル: `./src/**/*.scss`

```bash
$ npm run lint:style
```

### CSSのFix
対象ファイル: `./src/**/*.scss`

```bash
$ npm run lint:style:fix
```
