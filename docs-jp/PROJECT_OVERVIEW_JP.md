# Documentation Strategy - プロジェクト概要

```yaml
document_scope: "repository_policy"
applies_to: "documentation-strategy repository only"
exported_artifact: false
language: "japanese"
```

## 目的

このリポジトリは、AIエージェント向けドキュメント戦略のマスター情報源です。
AIエージェント（Claude、Gemini、Devin、Codex等）が正確な情報を必要な時に取得できるよう、
ドキュメントの構造・ルーティング・版管理のルールを定義・配布します。

重要なのは、このリポジトリには3種類の文書があることです。

```yaml
artifacts:
  path: "artifacts/"
  description: "このリポジトリの成果物として、他プロジェクトへコピーまたは参照される戦略文書"

ai_facing_docs:
  path: "documents/"
  description: "このリポジトリ自身のAI向けドキュメント（INDEX.md + project/ + reference/）"

human_facing_docs:
  path: "docs-jp/"
  description: "人間向けドキュメント（日本語）。プロジェクト背景、セットアップ、設計理由"
```

## 中核原則

本プロジェクトの中心は **情報精度最優先** です。

```yaml
priority:
  1: "情報の精度 — ドキュメントは正確かつ完全でなければならない"
  2: "適切なルーティング — エージェントは必要な時に必要なものだけを読む"
  3: "トークン効率 — 無駄を最小化するが、情報を切り詰めて節約してはならない"
```

情報精度とトークン効率が競合する場合、精度が勝ちます。
トークンコストの解決策は**より良いファイル構造とルーティング**であり、
ドキュメントを薄くすることではありません。

## 成果物（artifacts/）

`artifacts/` は、他プロジェクトでAIエージェントに読ませるための戦略文書群です。

```text
artifacts/
├── INDEX.md
├── DOCUMENTATION_PHILOSOPHY.md
├── FILE_AND_STRUCTURE.md
└── DOCUMENT_WORKFLOW.md
```

- `INDEX.md`: 入口。読む順序、Foundational Lens、Ownership Map、Quick Task Routingを示す索引。
- `DOCUMENTATION_PHILOSOPHY.md`: 情報精度最優先、スコープ境界、git記録ツール、design-principlesとの関係、誤読防止。
- `FILE_AND_STRUCTURE.md`: ファイル役割、ディレクトリ構造、版管理システム、gitコミット規約、ディレクトリ分割ガイド、階層プロジェクト、削除ルール、競合対策。
- `DOCUMENT_WORKFLOW.md`: 新規セットアップ・既存プロジェクト適用・更新運用・古さ検知対応・版バンプ・削除ワークフロー・再読み込みトリガー。

現在の戦略バージョン: **2.1.0**

## このリポジトリ自身の文書（documents/）

`documents/` は、すべてAI向けのドキュメントです。

```text
documents/
├── INDEX.md                    （ルーティングハブ + 版レジストリ）
├── project/
│   └── REPOSITORY_STRUCTURE.md
└── reference/
    ├── AI_DOC_STRATEGY_DESIGN.md
    └── examples/
        ├── single-project/
        └── multi-project/
```

- `INDEX.md`: このリポジトリの全ドキュメントのルーティングと版管理。
- `REPOSITORY_STRUCTURE.md`: リポジトリの構造と分類ルール。
- `AI_DOC_STRATEGY_DESIGN.md`: 戦略改訂のための設計検討資料。
- `examples/`: 単一プロジェクト・階層プロジェクトの実装例。配布対象ではない。

## 人間向けドキュメント（docs-jp/）

`docs-jp/` は、人間向けのドキュメント（日本語）です。

```text
docs-jp/
├── PROJECT_OVERVIEW_JP.md       （このファイル）
└── artifacts_jp/
    ├── INDEX_JP.md
    ├── DOCUMENTATION_PHILOSOPHY_JP.md
    ├── FILE_AND_STRUCTURE_JP.md
    └── DOCUMENT_WORKFLOW_JP.md
```

- `PROJECT_OVERVIEW_JP.md`: プロジェクト概要（人間向け）。
- `artifacts_jp/`: artifacts/の日本語訳。人間が戦略内容を確認するためのもの。

## 使用方法

他プロジェクトへ成果物をコピーする場合は、コピー先ディレクトリを指定して次を実行します。

```bash
./copy-design-docs.sh path/to/target/artifacts
```

スクリプトは `artifacts/` 直下のMarkdownファイルを指定先へコピーします。

Git Submodule による参照も推奨します。

```bash
git submodule add https://github.com/Daiki-Yoshida/documentation-strategy.git documentation-strategy
git submodule update --init --recursive
```

## 保守ルール

新しい文書を追加する前に、必ずスコープを決めます。

- 他プロジェクトで使う戦略成果物なら `artifacts/` に置く。
- AIエージェントが必要な情報なら `documents/` に置く。
- 人間向けの内容なら `docs-jp/` に置く。
- 設計検討や実装例などの参照資料なら `documents/reference/` に置く。
- AI向けと人間向けの内容が混ざるなら文書を分割する。

この分類規則の詳細は `documents/project/REPOSITORY_STRUCTURE.md` を参照してください。
