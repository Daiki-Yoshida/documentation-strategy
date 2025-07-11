# AI エージェント向けドキュメント戦略

## 概要

このプロジェクトは、AI エージェント（Claude、Gemini など）の効率的な作業を支援するためのドキュメント戦略を定義しています。従来の人間向けドキュメントとは異なり、AI エージェントの特性（トークン制限、認知負荷、処理効率）に最適化されたドキュメント構造を提案します。

## 主要な特徴

### 🎯 AI エージェント最適化
- **トークン効率**: 人間の可読性よりもトークン最適化を優先
- **認知負荷軽減**: AI エージェントが迷わない明確な情報ルーティング
- **処理効率**: AI が最高速度で解析できる構造化フォーマット

### 🏗️ スケールに依存しない設計
- **単一プロジェクト**: シンプルなプロジェクト構造に対応
- **階層プロジェクト**: 複雑なマルチサービス環境に対応
- **OOP 設計**: 親子関係の明確な分離とカプセル化

### 📄 標準化されたファイル構造
- **CLAUDE.md / GEMINI.md**: AI エージェントのエントリーポイント (≤200 トークン)
- **PROJECT.md**: プロジェクト詳細とルーティング (≤800 トークン)
- **documents/**: 詳細な仕様とコンテキスト情報

## ファイル構造

```
project/
├── CLAUDE.md              # Claude エージェント向け指示書
├── GEMINI.md              # Gemini エージェント向け指示書
├── README.md              # 人間向けインターフェース
├── documents/
│   ├── PROJECT.md         # プロジェクト詳細とルーティング
│   ├── context.md         # コンテキスト情報
│   ├── workflows.md       # ワークフロー定義
│   └── specs.md           # 仕様書
└── src/                   # ソースコード
```

## 使用方法

### 1. Git Submodule を使用した戦略参照（推奨）
```bash
# 既存のプロジェクトに戦略を追加
git submodule add https://github.com/Daiki-Yoshida/documentation-strategy.git documentation-strategy

# 初期化
git submodule update --init --recursive

# AI エージェントに以下のように命令して CLAUDE.md を作成
# "documentation-strategy/AI_DOC_STRATEGY.md を元に、このプロジェクト用の CLAUDE.md と PROJECT.md を作成してください"
```

### 2. 基本セットアップ（AI エージェント作成方式）
```bash
# 戦略ファイルをダウンロード
curl -O https://raw.githubusercontent.com/Daiki-Yoshida/documentation-strategy/main/documents/AI_DOC_STRATEGY.md

# AI エージェントに以下のように命令
# "AI_DOC_STRATEGY.md を元に、このプロジェクト用の CLAUDE.md と PROJECT.md を作成してください"
```

### 3. 階層プロジェクトの場合
```bash
# 親プロジェクトで AI エージェントに命令
# "AI_DOC_STRATEGY.md を元に、階層プロジェクト用の CLAUDE.md を作成してください"
# "documents/children.md を作成して、子プロジェクトの管理方法を定義してください"

# 子プロジェクトは独立して管理
cd child-service/
# "AI_DOC_STRATEGY.md を元に、この子プロジェクト用の CLAUDE.md を作成してください"
```

### 4. Submodule の更新
```bash
# 戦略の最新版を取得
git submodule update --remote docs/ai-strategy
git add docs/ai-strategy
git commit -m "Update AI documentation strategy"
```

## 実装例

### TypeScript プロジェクト
`examples/single-project/` には、Express.js と TypeScript を使用した API プロジェクトの実装例があります。

### C# マイクロサービス
`examples/multi-project/` には、.NET Core を使用した階層プロジェクトの実装例があります。

## 戦略の詳細

完全な戦略仕様については、`documents/AI_DOC_STRATEGY.md` を参照してください。

## 利用について

このプロジェクトは個人の研究・実装プロジェクトです。商業利用を含め、自由に改変・利用していただけます。すべて自己責任でお願いします。

もしよろしければ、どこかにクレジットを記載していただけると嬉しいです。

## ライセンス

MIT License - 詳細は `LICENSE` ファイルを参照してください。

## 関連リンク

- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Google Gemini API Documentation](https://developers.google.com/gemini)