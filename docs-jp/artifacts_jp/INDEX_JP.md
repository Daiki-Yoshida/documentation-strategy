# AIエージェント ドキュメント戦略 - 索引

```yaml
document_type: "index"
target_audience: "ai_agents"
optimization: "token_efficiency"
language: "english"
role: "エクスポートされたドキュメント戦略セットの入口"
```

> **注**: このファイルは `artifacts/INDEX.md` の日本語訳です。AIエージェントが読むべき正式版は `artifacts/INDEX.md`（英語）です。この翻訳は人間による内容確認用です。

本ファイルはエクスポートされたガイダンスの入口です。最初に読んでください。

## 読む順序

```yaml
1_philosophy: "DOCUMENTATION_PHILOSOPHY.md"   # WHY:  核心価値、AIエージェント優先、トークン最適化、誤読防止
2_structure:  "FILE_AND_STRUCTURE.md"         # HOW+WHERE: ファイル役割、トークン制限、ディレクトリ配置、階層
3_workflow:   "DOCUMENT_WORKFLOW.md"           # FLOW: セットアップ、更新、ブラウンフィールド、再読み込みトリガー
```

初回接触時は 1 → 2 → 3 の順に読む。特定のタスクの場合は、以下のクイックタスクルーティングから該当箇所へジャンプする。

## ドキュメント分割方針

```yaml
split_by: "各ドキュメントが答える質問 — WHY（哲学）/ HOW+WHERE（ファイル役割と構造）/ FLOW（ワークフロー）; INDEXがルーティングする。"
one_owner: "各概念は正確に1つのドキュメントに存在する — Ownership Mapを参照; 複製せずリンクする。"
restatement_cap: "あるドキュメントが所有していない概念が必要な場合、最大1文の再述 + 所有者へのリンクのみ許可される。ドキュメント間に矛盾が生じた場合、所有ドキュメントの記述が権威である。"
not_split_by: ["audience", "language", "feature/domain"]   # 全ドキュメントはAI向け、英語
```

## 基礎レンズ

本アーティファクト群は **AIエージェント優先** パラダイムを前提としている。

```yaml
core_idea: "ドキュメントは、AIエージェントが最小のトークンコストで正しいコンテキストを見つけられるように構造化される。人間向けドキュメントは別の明確にスコープされた関心事であり、デフォルトではない。"
interpret_through: ["トークン効率", "認知負荷削減", "唯一の情報源", "ルーティング明確性"]
do_not_optimize_for: ["人間の可読性（READMEを除く）", "冗長な散文", "重複する説明"]
scale_invariant: "本戦略は単一プロジェクトと階層的（マルチサービス）プロジェクトの双方に適用される。"
```

## Ownership Map（唯一の情報源）

各概念は正確に1つの権威ドキュメントを持つ。複製せずリンクすること。

```yaml
DOCUMENTATION_PHILOSOPHY.md:
  owns:
    - "AIエージェント優先: 定義と根拠"
    - "トークン最適化: 原則（WHY）"
    - "認知負荷削減: 原則（WHY）"
    - "唯一の情報源 / 重複排除: 原則（WHY）"
    - "汎用性: 単一および階層プロジェクト、あらゆる規模"
    - "フォーマット優先順位: AI効率 > 人間の可読性（WHY）"
    - "誤読防止"
    - "design-principlesとの関係: ドメイン境界、共有概念、意図的な相違、同時読みガイダンス"

FILE_AND_STRUCTURE.md:
  owns:
    - "エージェントエントリファイル（CLAUDE.md, AGENTS.md, GEMINI.md）: 役割、トークン制限、優先度構造"
    - "PROJECT.md: 役割、トークン制限、ルーティング責務"
    - "README.md: 人間専用インターフェースとしての役割"
    - "トークン制限: 200 / 800 とその根拠"
    - "ファイルフォーマット標準: markdown + YAMLブロック、フォーマット選択ガイド"
    - "ディレクトリ構造: documents/, documents/agents/, documents/users/"
    - "ディレクトリごとの言語・命名規約"
    - "階層プロジェクト: OOP設計、子の独立性、親の包含"
    - "情報優先順位（AIおよび人間）"
    - "ファイル間の参照・ルーティング戦略"

DOCUMENT_WORKFLOW.md:
  owns:
    - "新規プロジェクトセットアップ: 戦略からプロジェクトファイルまでのステップバイステップ"
    - "既存プロジェクト導入（ブラウンフィールド）: 監査、分類、移行"
    - "継続的ドキュメント更新: いつ更新するか、何を再読み込みするか"
    - "再読み込みトリガー: AIエージェントが本戦略を再読み込みすべきタイミング"
    - "ドキュメント作成デシジョンツリー: 新規ファイル作成 vs 既存拡張の判断"
    - "運用ガイドライン: バージョン管理、更新頻度、保守"
    - "確認ゲート: ドキュメント構造を変更する前にユーザーに確認すべきタイミング"
```

## クイックタスクルーティング

```yaml
"新規プロジェクトのドキュメントをセットアップ":           "DOCUMENT_WORKFLOW.md（新規プロジェクトセットアップ）+ FILE_AND_STRUCTURE.md（ファイル役割）"
"既存プロジェクトに本戦略を導入":                         "DOCUMENT_WORKFLOW.md（ブラウンフィールド導入）"
"既存ドキュメントを更新":                                 "DOCUMENT_WORKFLOW.md（継続的更新）+ FILE_AND_STRUCTURE.md（適切なファイルを見つける）"
"新規ドキュメントを作成すべきか既存を拡張すべきか":       "DOCUMENT_WORKFLOW.md（作成デシジョンツリー）"
"この情報はどのファイルに置くべきか":                     "FILE_AND_STRUCTURE.md（ファイル役割定義）+ DOCUMENTATION_PHILOSOPHY.md（SSOT）"
"マルチサービスプロジェクトの構造化方法":                 "FILE_AND_STRUCTURE.md（階層プロジェクト）"
"特定ファイルのトークン制限":                             "FILE_AND_STRUCTURE.md（トークン制限）"
"どのフォーマットを使うべきか（YAML/JSON/Markdown）":     "FILE_AND_STRUCTURE.md（ファイルフォーマット標準）"
"いつ本戦略を再読み込みすべきか":                         "DOCUMENT_WORKFLOW.md（再読み込みトリガー）"
"なぜREADMEだけが人間向けなのか":                         "DOCUMENTATION_PHILOSOPHY.md（AIエージェント優先 + 誤読防止）"
"design-principlesとの関係":                              "DOCUMENTATION_PHILOSOPHY.md（design-principlesとの関係）"
```
