# DEVELOP-MEMO

ここでは、開発中の学びについてメモ感覚で記述していく。

# 使用技術

## Vite [公式ドキュメント](https://ja.vite.dev/guide/)

従来のビルドツールに比べて高速に動作するビルドツール。

### 特徴

- 開発時、バンドル(必要なモジュールをまとめる)が不要でサーバの起動が早い
- 変更があった際に必要なモジュールのみ変換を行うため、ブラウザへの反映が高速

### 手順

プロジェクトを新規作成する手順は公式ドキュメントに記載。

```
<!-- Viteプロジェクト生成 -->
npm create vite@latest
```

テンプレートから、フレームワークと開発言語を選択。
プロジェクト名を入力。

```
cd プロジェクト名

<!-- パッケージをインストール -->
npm install

<!-- 仮想サーバ起動 -->
npm run dev
```

### プロジェクトの階層構造

```
nodemodules
public
└── vite.svg
src
├── App.css
├── App.tsx
├── assets
│   └── react.svg
├── index.css
├── main.tsx
└── vite-env.d.ts
.gitignore
eslint.config.js
inde.html
package-lock.json
package.json
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

| ファイル or ディレクトリ | 説明                                                                     |
| :----------------------- | :----------------------------------------------------------------------- |
| nodemodules              | プロジェクトで使用する外部ライブラリが置かれるディレクトリ　             |
| public                   | 情的ファイルを置くディレクトリ                                           |
| src                      | ソースを置くディレクトリ                                                 |
| .gitignore               | git のバージョン管理から除外する設定ファイル                             |
| eslint.config.js         | JavaScript や TypeScript のコードを情的に解析するファイル                |
| inde.html                | 侍エンジニア 5                                                           |
| package-lock.json        | プロジェクトで使用するツールやライブラリの詳細な情報が記述されたファイル |
| package.json             | プロジェクトで使用するツールやライブラリが記述されたファイル             |
| tsconfig.app.json        | TypeScript の設定ファイル                                                |
| tsconfig.json            | TypeScript の設定ファイル                                                |
| tsconfig.node.json       | TypeScript の設定ファイル                                                |
| vite.config.ts           | Vite で使用される設定ファイル                                            |
