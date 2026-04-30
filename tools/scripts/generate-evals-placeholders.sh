#!/usr/bin/env bash
set -euo pipefail

ROOT="evals"

dirs=(
  "$ROOT/.github/workflows"

  "$ROOT/src/runner"
  "$ROOT/src/benchmarks/capability/agentic"
  "$ROOT/src/benchmarks/safety"
  "$ROOT/src/metrics"
  "$ROOT/src/tracking"
  "$ROOT/src/utils"

  "$ROOT/configs/benchmarks"

  "$ROOT/data"

  "$ROOT/notebooks"

  "$ROOT/tests/unit"
)

files=(
  "$ROOT/.github/workflows/nightly-evals.yml"
  "$ROOT/.github/workflows/pr-evals.yml"
  "$ROOT/.github/workflows/regression-alert.yml"
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
  "$ROOT/Makefile"

  "$ROOT/src/__init__.py"

  "$ROOT/src/runner/__init__.py"
  "$ROOT/src/runner/eval_runner.py"
  "$ROOT/src/runner/parallel_runner.py"
  "$ROOT/src/runner/sampling.py"
  "$ROOT/src/runner/cache.py"

  "$ROOT/src/benchmarks/__init__.py"
  "$ROOT/src/benchmarks/base.py"

  "$ROOT/src/benchmarks/capability/mmlu.py"
  "$ROOT/src/benchmarks/capability/humaneval.py"
  "$ROOT/src/benchmarks/capability/mbpp.py"
  "$ROOT/src/benchmarks/capability/gsm8k.py"
  "$ROOT/src/benchmarks/capability/math.py"
  "$ROOT/src/benchmarks/capability/gpqa.py"
  "$ROOT/src/benchmarks/capability/swe_bench.py"
  "$ROOT/src/benchmarks/capability/agentic/tool_use.py"
  "$ROOT/src/benchmarks/capability/agentic/multi_step.py"

  "$ROOT/src/benchmarks/safety/harmlessness.py"
  "$ROOT/src/benchmarks/safety/honesty.py"
  "$ROOT/src/benchmarks/safety/bias.py"
  "$ROOT/src/benchmarks/safety/jailbreak_resistance.py"

  "$ROOT/src/metrics/__init__.py"
  "$ROOT/src/metrics/exact_match.py"
  "$ROOT/src/metrics/pass_at_k.py"
  "$ROOT/src/metrics/llm_judge.py"
  "$ROOT/src/metrics/human_agreement.py"
  "$ROOT/src/metrics/calibration.py"

  "$ROOT/src/tracking/__init__.py"
  "$ROOT/src/tracking/results_store.py"
  "$ROOT/src/tracking/regression_detector.py"
  "$ROOT/src/tracking/reporter.py"

  "$ROOT/src/utils/__init__.py"
  "$ROOT/src/utils/api_client.py"
  "$ROOT/src/utils/logging.py"

  "$ROOT/configs/nightly.yaml"
  "$ROOT/configs/pr-gate.yaml"
  "$ROOT/configs/benchmarks/capability.yaml"
  "$ROOT/configs/benchmarks/safety.yaml"

  "$ROOT/data/README.md"
  "$ROOT/data/.gitignore"

  "$ROOT/notebooks/results_analysis.ipynb"
  "$ROOT/notebooks/regression_investigation.ipynb"

  "$ROOT/tests/conftest.py"
  "$ROOT/tests/unit/test_runner.py"
  "$ROOT/tests/unit/test_metrics.py"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
done

for file in "${files[@]}"; do
  mkdir -p "$(dirname "$file")"
  : > "$file"
done

echo "Generated placeholder scaffold at: $ROOT"