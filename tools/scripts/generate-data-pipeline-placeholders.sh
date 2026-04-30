#!/usr/bin/env bash
set -euo pipefail

ROOT="data-pipeline"

dirs=(
  "$ROOT/.github/workflows"

  "$ROOT/docker"

  "$ROOT/configs/pipelines"

  "$ROOT/src/python/acquisition"
  "$ROOT/src/python/cleaning"
  "$ROOT/src/python/quality"
  "$ROOT/src/python/deduplication"
  "$ROOT/src/python/tokenization"
  "$ROOT/src/python/registry"
  "$ROOT/src/python/orchestration"

  "$ROOT/src/rust/dedup/src"
  "$ROOT/src/rust/tokenizer_worker/src"

  "$ROOT/migrations"

  "$ROOT/tests/unit"
  "$ROOT/tests/integration"

  "$ROOT/scripts"
)

files=(
  "$ROOT/.github/workflows/lint.yml"
  "$ROOT/.github/workflows/tests.yml"
  "$ROOT/.github/workflows/data-quality-checks.yml"
  "$ROOT/.github/workflows/pipeline-integration.yml"
  "$ROOT/.github/CODEOWNERS"
  "$ROOT/.github/pull_request_template.md"

  "$ROOT/.gitignore"
  "$ROOT/.pre-commit-config.yaml"
  "$ROOT/.python-version"
  "$ROOT/.env.example"
  "$ROOT/README.md"
  "$ROOT/PROPRIETARY"
  "$ROOT/pyproject.toml"
  "$ROOT/uv.lock"
  "$ROOT/Cargo.toml"
  "$ROOT/Cargo.lock"
  "$ROOT/Makefile"

  "$ROOT/docker/Dockerfile.pipeline"
  "$ROOT/docker/docker-compose.yml"

  "$ROOT/configs/sources.yaml"
  "$ROOT/configs/quality_filters.yaml"
  "$ROOT/configs/pipelines/pretrain.yaml"
  "$ROOT/configs/pipelines/sft.yaml"
  "$ROOT/configs/pipelines/rlhf.yaml"

  "$ROOT/src/python/__init__.py"

  "$ROOT/src/python/acquisition/__init__.py"
  "$ROOT/src/python/acquisition/web_crawler.py"
  "$ROOT/src/python/acquisition/common_crawl.py"
  "$ROOT/src/python/acquisition/github_scraper.py"
  "$ROOT/src/python/acquisition/arxiv_scraper.py"
  "$ROOT/src/python/acquisition/licensed_sources.py"

  "$ROOT/src/python/cleaning/__init__.py"
  "$ROOT/src/python/cleaning/text_cleaner.py"
  "$ROOT/src/python/cleaning/html_extractor.py"
  "$ROOT/src/python/cleaning/language_detector.py"
  "$ROOT/src/python/cleaning/pii_redactor.py"

  "$ROOT/src/python/quality/__init__.py"
  "$ROOT/src/python/quality/perplexity_filter.py"
  "$ROOT/src/python/quality/toxicity_filter.py"
  "$ROOT/src/python/quality/nsfw_filter.py"
  "$ROOT/src/python/quality/length_filter.py"
  "$ROOT/src/python/quality/quality_scorer.py"

  "$ROOT/src/python/deduplication/__init__.py"
  "$ROOT/src/python/deduplication/exact_dedup.py"
  "$ROOT/src/python/deduplication/minhash_dedup.py"
  "$ROOT/src/python/deduplication/semantic_dedup.py"

  "$ROOT/src/python/tokenization/__init__.py"
  "$ROOT/src/python/tokenization/tokenizer.py"
  "$ROOT/src/python/tokenization/packing.py"

  "$ROOT/src/python/registry/__init__.py"
  "$ROOT/src/python/registry/dataset_registry.py"
  "$ROOT/src/python/registry/lineage.py"

  "$ROOT/src/python/orchestration/__init__.py"
  "$ROOT/src/python/orchestration/ray_pipeline.py"
  "$ROOT/src/python/orchestration/spark_pipeline.py"

  "$ROOT/src/rust/dedup/src/main.rs"
  "$ROOT/src/rust/dedup/src/minhash.rs"
  "$ROOT/src/rust/dedup/src/bloom.rs"
  "$ROOT/src/rust/dedup/Cargo.toml"

  "$ROOT/src/rust/tokenizer_worker/src/main.rs"
  "$ROOT/src/rust/tokenizer_worker/src/worker.rs"
  "$ROOT/src/rust/tokenizer_worker/Cargo.toml"

  "$ROOT/migrations/0001_create_datasets_table.sql"
  "$ROOT/migrations/0002_add_lineage.sql"
  "$ROOT/migrations/0003_add_quality_scores.sql"

  "$ROOT/tests/conftest.py"
  "$ROOT/tests/unit/test_cleaner.py"
  "$ROOT/tests/unit/test_dedup.py"
  "$ROOT/tests/unit/test_filters.py"
  "$ROOT/tests/unit/test_tokenizer.py"
  "$ROOT/tests/integration/test_full_pipeline.py"

  "$ROOT/scripts/run_pipeline.sh"
  "$ROOT/scripts/validate_dataset.sh"
  "$ROOT/scripts/export_stats.sh"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
done

for file in "${files[@]}"; do
  mkdir -p "$(dirname "$file")"
  : > "$file"
done

chmod +x \
  "$ROOT/scripts/run_pipeline.sh" \
  "$ROOT/scripts/validate_dataset.sh" \
  "$ROOT/scripts/export_stats.sh"

echo "Generated placeholder scaffold at: $ROOT"