# Documentation Strategy - プロジェクト概要

```yaml
document_scope: "repository_policy"
applies_to: "documentation-strategy repository only"
exported_artifact: false
language: "japanese"
```

## 目的

このリポジトリは、AIエージェント向けドキュメント戦略のマスター情報源です。
AIエージェント（Claude、Gemini、Devin、Codex等）の効率的な作業を支援するための、
ドキュメント構造・ルーティング・トークン最適化のルールを定義・配布します。

重要なのは、このリポジトリには2種類の文書があることです。

```yaml
artifacts:
  path: "artifacts/"
  description: "このリポジトリの成果物として、他プロジェクトへコピーまたは参照される文書"

repository_docs:
  path: "documents/project/"
  description: "このリポジトリ自身の構造、運用、保守方針を説明する文書"
```

## 成果物

`artifacts/` は、他プロジェクトでAIエージェントに読ませるための文書群です。

```text
artifacts/
├── INDEX.md
├── DOCUMENTATION_PHILOSOPHY.md
├── FILE_AND_STRUCTURE.md
└── DOCUMENT_WORKFLOW.md
```

- `INDEX.md`: 入口。読む順序と単一情報源（Ownership Map）を示す索引。
- `DOCUMENTATION_PHILOSOPHY.md`: AIエージェント最優先、トークン最適化、単一情報源などの核心原則と誤読防止。
- `FILE_AND_STRUCTURE.md`: ファイル役割、トークン制限、フォーマット標準、ディレクトリ構造、階層プロジェクト設計。
- `DOCUMENT_WORKFLOW.md`: 新規セットアップ・既存プロジェクト適用・更新運用・再読み込みトリガーの作業手順。

## このリポジトリ自身の文書

`documents/project/` は、このリポジトリを保守するための文書です。

```text
documents/project/
├── PROJECT_OVERVIEW_JP.md
└── REPOSITORY_STRUCTURE.md
```

この配下の文書は、原則として他プロジェクトへコピーする成果物ではありません。

## 参照資料

`documents/reference/` は、成果物の設計や改訂を検討するための非配布資料です。

```text
documents/reference/
├── AI_DOC_STRATEGY_DESIGN.md
└── examples/
    ├── single-project/
    └── multi-project/
```

- `AI_DOC_STRATEGY_DESIGN.md`: 戦略改訂のための設計検討資料。
- `examples/`: 単一プロジェクト・階層プロジェクトの実装例。
  配布対象ではなく、戦略の検証・説明のためにこのリポジトリ内に保持する。

## 中核思想

本プロジェクトの中心は **AIエージェント最優先** です。

```yaml
priority:
  1: "AIエージェントの処理効率（人間の可読性より優先）"
  2: "トークン最適化"
  3: "認知負荷軽減"
  4: "単一の情報源（重複排除）"
  5: "汎用性（単一・階層プロジェクト、規模不問）"
```

人間の可読性よりもAIの処理効率を重視します。
人間向け文書は独立したスコープとして明確に分離し、デフォルトではありません。

## 使用方法

他プロジェクトへ成果物をコピーする場合は、コピー先ディレクトリを指定して次を実行します。

```bash
./copy-design-docs.sh path/to/target/documents/agents
```

スクリプトは `artifacts/` 直下のMarkdownファイルを指定先へコピーします。

Git Submodule による参照も推奨します。

```bash
git submodule add https://github.com/Daiki-Yoshida/documentation-strategy.git documentation-strategy
git submodule update --init --recursive
```

## 保守ルール

新しい文書を追加する前に、必ずスコープを決めます。

- 他プロジェクトで使う成果物なら `artifacts/` に置く。
- このリポジトリ自身の説明なら `documents/project/` に置く。
- 設計検討や実装例などの参照資料なら `documents/reference/` に置く。
- 両方の内容が混ざるなら文書を分割する。

この分類規則の詳細は `documents/project/REPOSITORY_STRUCTURE.md` を参照してください。
