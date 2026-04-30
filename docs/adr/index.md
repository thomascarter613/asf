---
title: "ADR Title Catalogue — Full system"
document_id: "docs-adr-index"
version: "1.0.0"
status: "accepted"
date_created: "2026-04-30"
date_updated: "2026-04-30"
project: "Agentic Software Foundry"
domain:
  - "architecture"
  - "data"
  - "retrieval"
  - "charon"
  - "foundry-control-plane"
supersedes: []
superseded_by: null
canonical: true
---

# ADR Title Catalogue — Full Anthropic System
### Principal-Level Estimate — Every Meaningful Decision, Every Domain

## 000s — Foundational & Cross-Cutting

```
ADR-0001  Adopt Architecture Decision Records as a First-Class Engineering Artifact
ADR-0002  Repository Topology: Bounded Monorepos Over Monolith or Full Fragmentation
ADR-0003  Access Tier Model: Four-Tier Repository Classification (RESTRICTED / INTERNAL / PUBLIC)
ADR-0004  Polyglot Language Strategy: Python for ML, Rust for Serving, TypeScript for Product
ADR-0005  Primary Package Managers: uv (Python), Cargo (Rust), pnpm (TypeScript)
ADR-0006  Dependency Pinning Policy: Exact Lockfiles Committed for All Ecosystems
ADR-0007  Secrets Management: HashiCorp Vault as Single Source of Truth
ADR-0008  Environment Configuration Hierarchy: .env.example → Local → Vault-Injected
ADR-0009  Internal Service Communication Protocol: gRPC Over REST
ADR-0010  Protobuf as Canonical Inter-Service Schema Language
ADR-0011  OpenTelemetry as Unified Observability Instrumentation Standard
ADR-0012  Structured JSON Logging Across All Services
ADR-0013  CI/CD Gate Model: Lint → Unit → Integration → Eval Gate → Staging → Manual Production
ADR-0014  Docker as Universal Build and Deployment Artifact
ADR-0015  Kubernetes as Container Orchestration Platform
ADR-0016  Kustomize Over Helm for Kubernetes Configuration Management
ADR-0017  Terraform for All Cloud Infrastructure Provisioning
ADR-0018  AWS as Primary Cloud Provider
ADR-0019  Multi-Region Active-Active Deployment for Production
ADR-0020  Semantic Versioning for All Public-Facing APIs and SDKs
ADR-0021  Internal APIs Versioned via Protobuf Package Namespaces
ADR-0022  Pre-Commit Hooks as Mandatory Quality Gate for All Repositories
ADR-0023  Architecture Decision Records Stored in the Repository They Govern
ADR-0024  GitHub as Version Control and CI/CD Platform
ADR-0025  CODEOWNERS Enforcement for All Restricted-Tier Repositories
```

---

## 100s — Inference & Model Serving

```
ADR-0101  Custom Inference Runtime Over vLLM or TGI
ADR-0102  Continuous Batching as Default Scheduling Strategy
ADR-0103  PagedAttention for KV Cache Memory Management
ADR-0104  Speculative Decoding for Latency-Sensitive Serving Paths
ADR-0105  Flash Attention as Default Attention Kernel Implementation
ADR-0106  FP8 Quantization for Production Serving; BF16 for Training
ADR-0107  Grouped Query Attention (GQA) in Model Architecture
ADR-0108  Rotary Positional Embeddings (RoPE) Over Absolute or ALiBi
ADR-0109  SwiGLU Activation Function as Standard MLP Variant
ADR-0110  RMSNorm Over LayerNorm for Normalization
ADR-0111  gRPC as Interface Between API Gateway and Inference Engine
ADR-0112  gRPC Server-Side Streaming for Token Generation
ADR-0113  Per-GPU Worker Thread Model for Inference Parallelism
ADR-0114  Tensor Parallelism for Large Model Sharding Across GPUs
ADR-0115  Pipeline Parallelism for Extremely Large Model Variants
ADR-0116  CUDA C++ for All Performance-Critical Kernel Implementation
ADR-0117  pybind11 for Python Bindings to C++/CUDA Kernels
ADR-0118  Model Weights Stored in Internal Binary Format, Not HuggingFace
ADR-0119  Checkpoint Format Versioned and Stored in S3 with Immutable Tags
ADR-0120  Prefix KV Cache for Shared System Prompt Optimization
ADR-0121  Model Registry as Source of Truth for Serving Configuration
ADR-0122  Canary Deployment Strategy for New Model Versions
ADR-0123  Separate Inference Clusters per Model Family (Haiku / Sonnet / Opus)
ADR-0124  Hardware Procurement Strategy: AWS p5 (H100) as Primary Training; p4d as Secondary
ADR-0125  NCCL for All GPU Collective Communication
```

---

## 200s — Training Infrastructure

```
ADR-0201  PyTorch as Primary Training Framework
ADR-0202  FSDP Over DeepSpeed for Distributed Training
ADR-0203  Hydra for Training Configuration Management
ADR-0204  Weights & Biases as Primary Training Metrics Sink
ADR-0205  SLURM for On-Premise Cluster Job Scheduling
ADR-0206  Ray for Distributed Python Workloads Outside SLURM
ADR-0207  Mixed Precision Training: BF16 with FP32 Master Weights
ADR-0208  Gradient Clipping as Standard Training Stability Measure
ADR-0209  AdamW as Default Optimizer; Muon Evaluated for Future Runs
ADR-0210  Cosine Learning Rate Schedule with Warmup as Default
ADR-0211  Data Packing Over Padding for Training Efficiency
ADR-0212  WebDataset as Streaming Training Data Format
ADR-0213  RLHF Pipeline: PPO as Primary Algorithm; DPO as Offline Alternative
ADR-0214  Reward Model Trained from Human Preference Data, Not Rule-Based
ADR-0215  KL Divergence Controller to Prevent Policy Collapse During RLHF
ADR-0216  Constitutional AI as Supplementary Alignment Layer Over RLHF
ADR-0217  RLAIF for Scalable Preference Label Generation
ADR-0218  Internal Tokenizer Format Over SentencePiece or tiktoken Public APIs
ADR-0219  Training Reproducibility: Seeded Randomness Required in All Experiments
ADR-0220  Experiment Tracking Required Before Any Training Run Begins
```

---

## 300s — Data Pipeline

```
ADR-0301  Data Pipeline Language Strategy: Python for Orchestration, Rust for Hot Stages
ADR-0302  Apache Spark for Large-Scale Batch Data Processing
ADR-0303  Ray for Medium-Scale Distributed Python Pipeline Stages
ADR-0304  MinHash LSH as Primary Near-Deduplication Algorithm
ADR-0305  Exact Hash Deduplication as First Stage Before MinHash
ADR-0306  Semantic Deduplication as Optional High-Quality Post-Processing Stage
ADR-0307  Language Detection as Mandatory Early Pipeline Stage
ADR-0308  PII Redaction Required Before Any Data Enters Training Corpus
ADR-0309  Perplexity Filtering Using Small Reference Model for Quality Scoring
ADR-0310  Toxicity and NSFW Filtering as Blocking Gates, Not Soft Labels
ADR-0311  Dataset Registry as Source of Truth for Training Data Lineage
ADR-0312  All Datasets Versioned with Immutable Identifiers
ADR-0313  Common Crawl as Primary Web Data Source
ADR-0314  Licensed Data Sources Tracked Separately with Contractual Metadata
ADR-0315  Data from Public GitHub Repositories Treated as Distinct Domain
ADR-0316  S3 as Primary Data Lake Storage Backend
ADR-0317  Apache Parquet as Canonical Intermediate Data Format
ADR-0318  Data Quality Scores Persisted Alongside Samples for Reproducibility
ADR-0319  Separate Data Pipelines per Training Stage (Pretrain / SFT / RLHF)
ADR-0320  Human Data Contractors Managed via Internal Tooling, Not Third-Party Platforms
```

---

## 400s — API Gateway & Serving Platform

```
ADR-0401  Rust (Axum) for API Gateway Over Go, Python, or Node.js
ADR-0402  Axum Over Actix-Web for Async HTTP in Rust Services
ADR-0403  Tokio as Async Runtime for All Rust Services
ADR-0404  API Key Authentication as Primary Mechanism for API Access
ADR-0405  JWT for claude.ai Session Authentication
ADR-0406  Workspace-Scoped API Keys Over Per-User Keys for Operator Accounts
ADR-0407  Token Bucket Algorithm for Per-Organization Rate Limiting
ADR-0408  Token Quota Enforcement at API Gateway, Not at Inference Layer
ADR-0409  Server-Sent Events (SSE) as Streaming Protocol to Clients
ADR-0410  SSE Over WebSockets for Streaming API Responses
ADR-0411  Upstream gRPC Calls Composed in Parallel Where Possible
ADR-0412  Context Assembly Performed Pre-Inference, Not Inside Gateway
ADR-0413  Safety Classification Performed Both Pre- and Post-Inference
ADR-0414  API Versioning via URL Path (/v1/, /v2/) Not Headers
ADR-0415  HTTP/2 for All Internal Service Communication
ADR-0416  TLS 1.3 Minimum for All Service-to-Service Communication
ADR-0417  Circuit Breaker Pattern for All Upstream Service Calls
ADR-0418  Retry with Exponential Backoff for Transient Inference Failures
ADR-0419  Request ID Propagated Across All Service Boundaries for Tracing
ADR-0420  Operator System Prompt Stored Server-Side, Not Trusted from Client
ADR-0421  Model Selection Validated Server-Side Against Operator Entitlements
ADR-0422  Billing Metering at Token Level, Recorded at API Gateway
ADR-0423  CORS Policy Managed at API Gateway, Not per Service
ADR-0424  Request and Response Logged with PII Scrubbing Before Persistence
ADR-0425  Admin API Separated from Public API Surface
```

---

## 500s — Context Assembly

```
ADR-0501  Context Assembly as a Dedicated Service, Not Gateway Logic
ADR-0502  System Prompt Templating Engine Over Raw String Concatenation
ADR-0503  Memory Injection Position: Before Conversation History, After System Prompt
ADR-0504  Tool Schema Injection Deferred Until Request Time, Not at Session Start
ADR-0505  Context Window Budget Allocation: System Prompt → Memory → History → Tools → Reserve
ADR-0506  Sliding Window Truncation with Preservation of System Prompt and Recent Turns
ADR-0507  Conversation Summarization as Fallback When Sliding Window Insufficient
ADR-0508  Token Counting Performed with Same Tokenizer as Inference Engine
ADR-0509  Operator-Provided System Prompts Sandboxed from Anthropic Core Prompt
ADR-0510  Context Assembly Result Cached by Conversation ID and Turn Hash
ADR-0511  Multi-Turn Context Managed by Conversation Store, Not Client
ADR-0512  Operator Policy Injected into Context as Non-Overridable System Segment
ADR-0513  Safety Reminders Injected by Context Service on Classifier Signal
```

---

## 600s — Safety

```
ADR-0601  Safety Classification as a Dedicated Independent Service
ADR-0602  Input Classification Performed Before Inference, Output After
ADR-0603  Parallel Safety Classification to Minimize Latency Impact
ADR-0604  Multi-Label Harm Classification Over Binary Safe/Unsafe
ADR-0605  CSAM Detection as Highest-Priority Blocking Classifier
ADR-0606  Weapons of Mass Destruction Classifier as Hard Block, No Operator Override
ADR-0607  Child Safety Classifiers Not Configurable by Operators
ADR-0608  Tiered Policy Model: Hardcoded Blocks → Default Blocks → Operator-Adjustable
ADR-0609  Operator Policies Stored Server-Side and Versioned
ADR-0610  Constitutional AI Principles as Runtime Policy, Not Only Training Signal
ADR-0611  Red Team Scenarios Not Stored in Version Control
ADR-0612  Safety Classifier Models Versioned Independently of Main Model
ADR-0613  PII Detection in Both Input and Output Streams
ADR-0614  Safety Classification Results Written to Audit Log, Immutably
ADR-0615  Jailbreak Resistance Evaluated on Every Model Release as Release Gate
ADR-0616  Safety Regression Defined as Blocking Condition for Deployment
ADR-0617  Human Red Team Runs Conducted Before Each Major Model Release
ADR-0618  Automated Red Teaming as Continuous Nightly Process
ADR-0619  Safety Incidents Trigger Immediate Circuit Breaker, Not Gradual Rollback
ADR-0620  Classifier Uncertainty Scores Logged for Human Review Triage
```

---

## 700s — Memory System

```
ADR-0701  User Memory as a Dedicated Service, Not API Gateway State
ADR-0702  PostgreSQL with pgvector as Memory Store Backend
ADR-0703  Memory Extraction Performed Asynchronously Post-Conversation
ADR-0704  LLM-Based Memory Extraction Over Rule-Based or NER Approaches
ADR-0705  Memory Stored as Structured Key-Value Facts, Not Raw Conversation Summaries
ADR-0706  Semantic Search for Memory Retrieval Over Keyword or Recency-Only
ADR-0707  Memory Injection Performed by Context Service, Not Memory Service
ADR-0708  User-Editable Memory Instructions as a Distinct Privileged Layer
ADR-0709  Sensitive Attribute Categories Require Explicit Consent Before Storage
ADR-0710  PII Scrubbing Applied to All Memories Before Persistence
ADR-0711  Memory Deleted Within 24 Hours of User Request
ADR-0712  Memory Scoped to User Identity, Not Device or Session
ADR-0713  Incognito Mode: Zero Memory Read or Write
ADR-0714  Memory Extraction Skipped for Operator Deployments by Default
ADR-0715  Memory Relevance Ranking Uses Recency-Weighted Semantic Score
ADR-0716  Memory Version History Retained for 30 Days for Auditability
ADR-0717  Embeddings Generated by Internal Embedding Model, Not OpenAI Ada
```

---

## 800s — Tool Orchestration & MCP

```
ADR-0801  Tool Orchestration as a Dedicated Service, Not Inline in Gateway
ADR-0802  Rust for Tool Orchestrator Over Python for Latency and Safety
ADR-0803  Tool Definitions Registered in Central Registry at Startup
ADR-0804  MCP as the External Tool Integration Protocol
ADR-0805  MCP Proxy as Dedicated Rust Service, Not Embedded in Tool Orchestrator
ADR-0806  SSE as Transport for MCP Server Communication
ADR-0807  OAuth 2.0 for MCP Connector Authorization
ADR-0808  OAuth Tokens Stored in MCP Proxy, Not Exposed to Model
ADR-0809  Token Refresh Handled Transparently by MCP Proxy
ADR-0810  Tool Invocations Rate-Limited Per User Per Connector
ADR-0811  Sandbox Execution for All Code-Executing Tools
ADR-0812  Tool Results Sanitized Before Injection into Context
ADR-0813  MCP Connector Registry Managed Server-Side, Not via Client Config
ADR-0814  Web Search Tool Results Subject to Post-Processing Before Model Sees Them
ADR-0815  Computer Use Tool Runs in Isolated VM, Not Host Environment
ADR-0816  Artifact Execution Sandboxed in iframe with strict CSP
ADR-0817  Tool Execution Timeout Enforced at Orchestrator Level
ADR-0818  Tool Call Logs Written to Audit Store Independently of Conversation Log
ADR-0819  User Consent Required Before First Use of Any Third-Party MCP Connector
ADR-0820  MCP Server URLs Allowlisted, Not Open to Arbitrary User-Supplied URLs
```

---

## 900s — Frontend & Product

```
ADR-0901  Next.js App Router as Web Frontend Framework
ADR-0902  React as UI Component Library for claude.ai
ADR-0903  Tailwind CSS as Styling System
ADR-0904  Radix UI as Accessible Primitive Component Library
ADR-0905  Zustand for Client-Side State Management Over Redux
ADR-0906  SSE Consumed Directly in Browser, Not via WebSocket Adapter
ADR-0907  Artifact Rendered in Sandboxed Cross-Origin iframe
ADR-0908  Artifact iframe Communication via postMessage with Origin Validation
ADR-0909  Mermaid, KaTeX, and Prism Bundled in Artifact Sandbox Independently
ADR-0910  Markdown Rendering via Custom Renderer, Not react-markdown Directly
ADR-0911  pnpm Workspaces for Frontend Monorepo
ADR-0912  Turborepo for Frontend Build Orchestration
ADR-0913  Biome Over ESLint + Prettier for Linting and Formatting
ADR-0914  Vitest as Test Runner for All TypeScript Packages
ADR-0915  Playwright for End-to-End Testing
ADR-0916  Electron as Desktop App Wrapper Over Tauri
ADR-0917  Next.js API Routes as Thin BFF Proxy, Not Business Logic Layer
ADR-0918  Authentication Managed via NextAuth.js on the Frontend
ADR-0919  Design System Published as Internal Package, Not Copied Per App
ADR-0920  Storybook for Design System Component Development and Documentation
ADR-0921  Bundle Size Budget Enforced in CI
ADR-0922  Core Web Vitals as Non-Negotiable Frontend Performance Targets
ADR-0923  Progressive Enhancement: Core Chat Functions Work Without JavaScript
ADR-0924  Mobile Web Treated as First-Class Target, Not Afterthought
ADR-0925  Accessibility Standard: WCAG 2.1 AA Minimum for All UI Components
```

---

## 1000s — Data Storage

```
ADR-1001  PostgreSQL as Primary Operational Database for All Services
ADR-1002  pgvector Extension for Vector Similarity Search Over Dedicated Vector DB
ADR-1003  Alembic for Python Service Database Migrations
ADR-1004  sqlx for Rust Service Database Access (Compile-Time Query Verification)
ADR-1005  Connection Pooling via PgBouncer for All Services
ADR-1006  Read Replicas for All High-Read Operational Databases
ADR-1007  Redis for Rate Limit State and Short-Lived Session Caching
ADR-1008  S3 as Canonical Object Store for Logs, Checkpoints, and Datasets
ADR-1009  Immutable S3 Prefixes for Training Checkpoints
ADR-1010  Database Credentials Rotated Automatically via Vault Dynamic Secrets
ADR-1011  All Databases Encrypted at Rest
ADR-1012  Point-in-Time Recovery Enabled for All Production Databases
ADR-1013  Database Backups Tested Monthly via Restore Drills
ADR-1014  Conversation History Retained for 30 Days by Default; User-Configurable
ADR-1015  Audit Logs Written to Append-Only Store, Never Updated or Deleted
ADR-1016  Cross-Region Database Replication for Disaster Recovery
ADR-1017  Data Residency Constraints Enforced at Database Routing Layer
```

---

## 1100s — Security

```
ADR-1101  Zero Trust Network Architecture: No Implicit Internal Trust
ADR-1102  mTLS for All Service-to-Service Communication
ADR-1103  Network Policies Enforced via Kubernetes NetworkPolicy Objects
ADR-1104  Principle of Least Privilege for All Service IAM Roles
ADR-1105  API Keys Stored as Hashed Values, Never Plaintext
ADR-1106  API Key Prefix Scheme for Identification Without Exposure
ADR-1107  Automated Dependency Vulnerability Scanning on Every PR
ADR-1108  Container Image Scanning via Trivy Before Every Deployment
ADR-1109  SAST via Semgrep on Every PR for All Language Ecosystems
ADR-1110  Secret Scanning Enforced via Pre-Commit and CI
ADR-1111  No Secrets in Environment Variables in Production; Use Vault Agent
ADR-1112  SOC 2 Type II as Minimum External Compliance Baseline
ADR-1113  Annual Third-Party Penetration Testing
ADR-1114  Bug Bounty Program for External Vulnerability Disclosure
ADR-1115  Security Review Required for Any Service That Handles User PII
ADR-1116  Model Weights Stored in Access-Controlled S3 Buckets with CloudTrail
ADR-1117  GPU Cluster Network Isolated from General Corporate Network
ADR-1118  Incident Response Runbooks Stored in Security Repo, Not Public Wiki
ADR-1119  All Production Access Logged and Reviewed via PAM
ADR-1120  MFA Required for All Engineer Production Access
```

---

## 1200s — Observability & Reliability

```
ADR-1201  Prometheus as Metrics Collection Backend
ADR-1202  Grafana as Metrics Visualization Layer
ADR-1203  Loki as Log Aggregation Backend
ADR-1204  Jaeger as Distributed Trace Backend
ADR-1205  OpenTelemetry SDK Used at Instrumentation Layer, Not Vendor SDK
ADR-1206  Sentry for Application Error Tracking in Python and TypeScript Services
ADR-1207  SLOs Defined for Latency (p50/p95/p99), Availability, and Error Rate
ADR-1208  Alerting on SLO Burn Rate, Not Raw Threshold Breaches
ADR-1209  PagerDuty as On-Call Escalation Platform
ADR-1210  Runbooks Required for Every Production Alert
ADR-1211  Chaos Engineering Runs Quarterly on Staging Environment
ADR-1212  Synthetic Monitoring for All Customer-Facing Endpoints
ADR-1213  Health Endpoints (/health/live, /health/ready) Required on All Services
ADR-1214  Graceful Shutdown Required for All Services; SIGTERM Handled
ADR-1215  Circuit Breaker Metrics Surfaced in Grafana Dashboards
ADR-1216  Postmortems Required for All P1 and P2 Incidents; Blameless Format
ADR-1217  Postmortems Published Internally Within 5 Business Days of Incident
ADR-1218  Deployment Frequency and Change Failure Rate Tracked as DORA Metrics
ADR-1219  Feature Flags as Standard Mechanism for Risk Reduction in Deployments
ADR-1220  Canary Analysis Automated via Metrics Comparison Before Full Rollout
```

---

## 1300s — Evals & Experimentation

```
ADR-1301  Eval Regression as a Hard CI Gate, Not Advisory
ADR-1302  LLM-as-Judge Scoring Adopted for Open-Ended Capability Evals
ADR-1303  Pass@k as Primary Metric for Code Generation Benchmarks
ADR-1304  Internal Eval Suite Maintained Alongside Public Benchmarks
ADR-1305  Eval Results Stored in PostgreSQL for Historical Regression Analysis
ADR-1306  Nightly Full Eval Run Plus Lightweight PR-Gate Subset
ADR-1307  API Responses Cached During Eval Runs for Cost and Reproducibility
ADR-1308  A/B Experimentation Framework Required for Any Behavioral Change
ADR-1309  User Assignment to Experiments Performed Server-Side, Not Client-Side
ADR-1310  Experiment Exposure Logged at First User Interaction, Not Assignment
ADR-1311  Statistical Significance Threshold: 95% Confidence, Minimum 7-Day Run
ADR-1312  Safety Metrics Included in Every A/B Experiment Analysis
ADR-1313  Human Evaluation Required Before Deploying Model Behavioral Changes
ADR-1314  Crowdworker Tasks Managed via Internal Platform, Not Directly on AMT
ADR-1315  Inter-Annotator Agreement Tracked and Reported for All Human Evals
```

---

## 1400s — SDKs & Developer Platform

```
ADR-1401  Official SDKs Maintained for Python, TypeScript, and Go Minimum
ADR-1402  SDK Code Generated from OpenAPI Spec, Not Hand-Written
ADR-1403  SDK Generation Tooling Run on Every API Schema Change
ADR-1404  SDKs Licensed Under MIT
ADR-1405  Async-First SDK Design; Sync Wrappers Provided as Convenience
ADR-1406  Streaming Responses Exposed as Idiomatic Iterators/Generators per Language
ADR-1407  Retry Logic with Exponential Backoff Built Into All SDKs
ADR-1408  SDK Changelog Maintained via Conventional Commits and Release-Please
ADR-1409  SDK Releases Automated via CI; No Manual PyPI or npm Publishes
ADR-1410  TypeScript SDK Shipped as Both ESM and CJS Targets
ADR-1411  Python SDK Supports Python 3.9+ Minimum
ADR-1412  Model Context Protocol Maintained as Open Standard, Not Proprietary
ADR-1413  MCP SDKs Published Under @modelcontextprotocol Scope
ADR-1414  Quickstart Examples Tested in CI to Prevent Bit-Rot
ADR-1415  API Documentation Generated from OpenAPI Spec, Not Hand-Authored
```

---

**Total: ~200 ADRs** across 15 domains.

The domains with the heaviest ADR density — safety (620s), API gateway (400s), and the platform (800s) — reflect where the most non-obvious, high-consequence decisions live. The training infrastructure ADRs (200s) are dense but more industry-standard; the safety and memory ADRs are where Anthropic's decisions genuinely diverge from commodity practice and where the *why* matters most.
