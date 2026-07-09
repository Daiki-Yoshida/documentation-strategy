# ファイル役割とディレクトリ構造 - AIエージェント参考資料

```yaml
document_type: "file_and_structure"
target_audience: "ai_agents"
optimization: "structural_consistency"
language: "english"
scope: "ファイル役割、トークン制限、フォーマット標準、ディレクトリ配置、階層ルール"
```

> **注**: このファイルは `artifacts/FILE_AND_STRUCTURE.md` の日本語訳です。AIエージェントが読むべき正式版は `artifacts/FILE_AND_STRUCTURE.md`（英語）です。この翻訳は人間による内容確認用です。

本ドキュメントは**ドキュメント戦略の物理的実現**を所管する:
各ファイルが何をするか、どれくらいのサイズまでか、どこに置かれるか、プロジェクトがどう構造化されるか — 階層的（マルチサービス）プロジェクトを含む。

```yaml
ownership_split:
  this_doc: "HOW + WHERE — ファイル役割、トークン制限、フォーマット、ディレクトリ配置、階層"
  DOCUMENTATION_PHILOSOPHY.md: "WHY — AIエージェント優先、トークン最適化、SSOT、汎用性"
  DOCUMENT_WORKFLOW.md: "FLOW — セットアップ、更新、ブラウンフィールド、再読み込みトリガー"
  INDEX.md: "上記すべてへのルーティング"
rule: "原則やワークフローをここに複製しない; 所有ドキュメントへリンクする。"
```

---

## 1. ファイル役割定義

### エージェントエントリファイル（CLAUDE.md, AGENTS.md, GEMINI.md）

```yaml
purpose: "AIエージェントの入口 — 正しいコンテキストへルーティングする"
token_limit: 200
placement: "プロジェクトルート（エージェントツールごとに1つ）"
one_per_tool:
  CLAUDE_md: "Claude Code入口"
  AGENTS_md: "Devin / Codex入口"
  GEMINI_md: "Gemini入口"
```

**ファイル内の優先度構造:**

```yaml
high_priority:
  - "役割と責務スコープ"
  - "即時アクションガイドライン"
  - "重要な制約と禁止事項"
  - "PROJECT.mdへのルーティング"
  - "タスク固有ドキュメントのガイダンス"
medium_priority:
  - "頻繁に使用される情報（検索を省くための直接記載）"
  - "コスト最適化処理ガイドライン"
  - "不要な処理の回避基準"
```

**重要な設計考慮事項:**
- トークン制限内で情報密度を最大化する必要がある。
- ファイルは緊急アクション（他のドキュメントが利用不可の場合の対応）を定義する必要がある。
- ファイルはルーティングする; 説明しない。詳細はPROJECT.md以下に存在する。
- フォールバック戦略が必須: 初回アクセス時の最小限の必須情報。

**エージェントファイルを作成するかスキップするか:**
- プロジェクトが実際に使用する各AIツールについて1つ作成する。
- プロジェクトが使用しないツールのエージェントファイルは作成しない（YAGNI）。
- 1つのツールのみ使用する場合、そのファイルのみ作成する。構造はスケールする。

### PROJECT.md

```yaml
purpose: "プロジェクト記述とルーティング — エージェントの第2停止点"
token_limit: 800
placement: "documents/（共有ルート）または documents/agents/（ディレクトリ構造を参照）"
routing_responsibility: true
content:
  - "プロジェクト概要と目的"
  - "技術スタックとアーキテクチャ"
  - "制約とビジネスルール"
  - "現在のステータスと進捗"
  - "タスク固有ドキュメントへのルーティング"
```

**800トークンの理由:** エージェントにプロジェクトレベルのコンテキストを与える1回のAI処理パスに十分な量。800を超える → タスク固有ファイルに分割してルーティングする。

### README.md

```yaml
purpose: "人間専用インターフェース — 唯一の人間向け例外"
token_limit: なし
placement: "プロジェクトルート"
content:
  - "基本的なプロジェクト情報"
  - "セットアップと使用方法"
  - "コントリビューションガイドライン"
  - "プロジェクト背景"
audience: "人間の開発者、AIエージェントではない"
```

**ルール:** AIエージェントはプロジェクトコンテキストの取得にREADME.mdに依存すべきではない。READMEは人間向けであり、トークンを無駄にする散文、チュートリアル、背景を含む可能性がある。エージェントエントリファイルとPROJECT.mdがAIのコンテキストパスである。

---

## 2. トークン制限

```yaml
limits:
  agent_entry_files: 200
  PROJECT_md: 800
  task_specific_docs: "厳密な制限なし、ただし800を超える場合は分割を優先"
  README_md: "なし（人間向け例外）"
rationale:
  "200": "エントリファイルはルーティングする、説明しない。200トークンは役割+制約+ルーティングに十分。"
  "800": "プロジェクトレベルコンテキストの1処理パス。これを超えると、タスク固有ファイルへルーティングすべき。"
enforcement: "ソフト — ルーティング明確性を損なうファイル分割を防ぐ場合、小幅の超過は許容される。大幅な違反 → 再構築。"
```

---

## 3. ファイルフォーマット標準

```yaml
format_priority: "AI効率 > 人間の可読性"
base_format: "markdown + 埋め込みYAMLブロック"
processing_efficiency: "最大AIパース速度"
```

### フォーマット選択ガイド

```yaml
structured_data: "YAML（設定、メタデータ、リスト、構成）"
explanations: "markdown（手順、ガイド、根拠）"
api_specs: "JSON（OpenAPI、マシン可読スキーマ）"
mixed: "markdown + YAMLブロック（最も効率的 — 1ファイルで構造+コンテキスト）"
```

### ファイルタイプ別フォーマット使用

```yaml
agent_entry_files: "YAMLブロック付き構造化markdown"
PROJECT_md: "YAMLセクション付きmarkdown"
documents: "markdown / YAML / JSON（柔軟 — 内容で選択）"
README_md: "標準markdown（人間向け例外 — 散文許可）"
```

---

## 4. ディレクトリ構造

### 単一プロジェクト

```yaml
project_structure:
  root_files:
    - "CLAUDE.md      # ≤200トークン（Claude Code入口）"
    - "AGENTS.md      # ≤200トークン（Devin/Codex入口）"
    - "GEMINI.md      # ≤200トークン（Gemini入口、使用時）"
    - "README.md      # 人間専用インターフェース"
  documents:
    root: "documents/ — 共有仕様とスキーマ"
    agents: "documents/agents/ — AI最適化ドキュメント（英語、サフィックスなし）"
    users: "documents/users/ — 人間向けドキュメント（日本語、_JP.mdサフィックス）"
  source_code: true
```

### ディレクトリ責務

```yaml
"documents/":
  content: "共有仕様、スキーマ、API"
  audience: "AIエージェントと人間の両方"
  language: "コンテキスト依存（技術仕様は英語が多い）"
  naming: "descriptive.md または descriptive.json"

"documents/agents/":
  content: "プロジェクト詳細、ワークフロー、AI向け最適化ガイド"
  audience: "AIエージェント専用"
  language: "英語（処理効率）"
  naming: "descriptive.md（言語サフィックスなし）"
  optimization: "トークン効率優先"

"documents/users/":
  content: "セットアップガイド、説明、チュートリアル（人間向け）"
  audience: "人間の開発者"
  language: "日本語（主対象言語）"
  naming: "descriptive_JP.md（言語サフィックス必須）"
  optimization: "理解しやすさ優先"
```

### 参照・ルーティング戦略

```yaml
ai_workflow: "agent.md → documents/agents/project.md → タスク固有ファイル"
human_workflow: "README.md → documents/users/setup_JP.md → 詳細ガイド"
shared_specs: "両者はAPI仕様・スキーマ・標準についてdocuments/を参照"
gradual_disclosure: "agent.md → PROJECT.md → documents/agents/ → documents/（共有仕様）"
lost_prevention: "明確なディレクトリ目的が混乱を防ぐ — 各ディレクトリは1つの役割を持つ"
```

---

## 5. 階層プロジェクト（OOP設計）

マルチサービスまたはマルチパッケージプロジェクトの場合、ドキュメント構造にOOPスタイルのカプセル化を適用する。

### 階層原則

```yaml
child_independence: "完全な独立性 — 子は親が存在することを知らない"
parent_containment: "親は全子プロジェクト情報を管理する"
information_flow: "親 → 子（一方向のみ）"
external_reference: "子は協調が必要な場合、親を外部プロジェクトとして扱う"
encapsulation: "子は親の実装詳細を知らない"
oop_analogy: "オブジェクト指向のクラス包含設計に類似"
```

### 構造

```yaml
parent_project:
  files: ["CLAUDE.md", "AGENTS.md", "GEMINI.md", "README.md"]
  documents:
    shared_root: "documents/（共有仕様）"
    agents: "documents/agents/（親プロジェクトAIドキュメント）"
    users: "documents/users/（親プロジェクト人間ドキュメント）"
    child_management: "documents/agents/children.md（子プロジェクト協調）"

child_projects:
  independence: "親の知識なし完全に独立"
  structure:
    files: ["CLAUDE.md", "AGENTS.md", "GEMINI.md", "README.md"]
    documents:
      shared_root: "documents/（子固有の共有仕様）"
      agents: "documents/agents/（子AIドキュメント、親は認識しない）"
      users: "documents/users/（子人間ドキュメント、親は認識しない）"
  parent_awareness: false
  external_reference: "協調が必要な場合、親を外部プロジェクトとして扱う"
```

### 親のchildren.md

親プロジェクトは `documents/agents/children.md` に協調ファイルを維持する。このファイルは子プロジェクト、その境界、サービス間通信パターンをリストする。このファイルは親専用 — 子は参照しない。

---

## 6. 情報優先順位

### AIエージェント優先順位

```yaml
1: "agent.md（ルートディレクトリ入口 — CLAUDE.md / AGENTS.md / GEMINI.md）"
2: "documents/agents/project.md（AI固有のプロジェクト詳細）"
3: "documents/agents/（詳細なAI最適化情報、タスク固有）"
4: "documents/（共有仕様とスキーマ）"
5: "README.md（人間インターフェース — 最後の手段、AI向けではない）"
```

### 人間優先順位

```yaml
1: "README.md（人間入口）"
2: "documents/users/setup_JP.md（セットアップと開始方法）"
3: "documents/（必要時の共有仕様）"
4: "documents/users/（詳細な人間向けガイド）"
```

---

## これらがどう連携するか

```yaml
entry_file_routes: "agent.mdが役割を定義 + PROJECT.mdへルーティング"
project_file_routes: "PROJECT.mdがコンテキストを提供 + タスク固有ドキュメントへルーティング"
directory_purpose_routes: "documents/agents/ vs documents/users/ vs documents/ — 読者で配置を決定"
hierarchy_encapsulates: "親と子はそれぞれ独立したドキュメントツリーを持つ; 協調はchildren.md（親専用）経由"
one_idea: "エントリファイルをルーターに、PROJECT.mdをコンテキストに、ディレクトリを読者境界にする。階層はこのパターンをレベルごとに繰り返す。"
```
