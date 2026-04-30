#!/usr/bin/env bash
set -euo pipefail

ROOT="constitutional-ai"

dirs=(
  "$ROOT/.github/workflows"

  "$ROOT/constitution/versions"

  "$ROOT/src/rlaif"
  "$ROOT/src/red_teaming"
  "$ROOT/src/evaluation"
  "$ROOT/src/classifiers"
  "$ROOT/src/utils"

  "$ROOT/data/constitutions"
  "$ROOT/data/red_team_scenarios"
  "$ROOT/data/eval_sets"

  "$ROOT/experiments/scaling_laws"
  "$ROOT/experiments/constitution_ablations"
  "$ROOT/experiments/red_team_analysis"

  "$ROOT/notebooks"

  "$ROOT/tests/unit"
  "$ROOT/tests/integration"
)

files=(
  "$ROOT/.github/workflows/lint.yml"
  "$ROOT/.github/workflows/tests.yml"
  "$ROOT/.github/workflows/red-team-nightly.yml"
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

  "$ROOT/constitution/principles.yaml"
  "$ROOT/constitution/critique_prompts.yaml"
  "$ROOT/constitution/revision_prompts.yaml"
  "$ROOT/constitution/versions/v1.0.yaml"
  "$ROOT/constitution/versions/v1.1.yaml"
  "$ROOT/constitution/versions/v2.0.yaml"

  "$ROOT/src/__init__.py"

  "$ROOT/src/rlaif/__init__.py"
  "$ROOT/src/rlaif/critique.py"
  "$ROOT/src/rlaif/revision.py"
  "$ROOT/src/rlaif/preference_labeling.py"
  "$ROOT/src/rlaif/pipeline.py"

  "$ROOT/src/red_teaming/__init__.py"
  "$ROOT/src/red_teaming/automated_red_team.py"
  "$ROOT/src/red_teaming/attack_strategies.py"
  "$ROOT/src/red_teaming/jailbreak_detector.py"
  "$ROOT/src/red_teaming/report_generator.py"

  "$ROOT/src/evaluation/__init__.py"
  "$ROOT/src/evaluation/harmlessness_eval.py"
  "$ROOT/src/evaluation/helpfulness_eval.py"
  "$ROOT/src/evaluation/honesty_eval.py"
  "$ROOT/src/evaluation/bias_eval.py"
  "$ROOT/src/evaluation/crowdworker_integration.py"

  "$ROOT/src/classifiers/__init__.py"
  "$ROOT/src/classifiers/harm_classifier.py"
  "$ROOT/src/classifiers/topic_classifier.py"
  "$ROOT/src/classifiers/sentiment_classifier.py"

  "$ROOT/src/utils/__init__.py"
  "$ROOT/src/utils/prompting.py"
  "$ROOT/src/utils/model_client.py"
  "$ROOT/src/utils/logging.py"

  "$ROOT/data/README.md"
  "$ROOT/data/red_team_scenarios/README.md"
  "$ROOT/data/red_team_scenarios/.gitignore"
  "$ROOT/data/eval_sets/.gitignore"

  "$ROOT/experiments/README.md"

  "$ROOT/notebooks/harm_distribution_analysis.ipynb"
  "$ROOT/notebooks/constitution_effectiveness.ipynb"
  "$ROOT/notebooks/red_team_results.ipynb"

  "$ROOT/tests/conftest.py"
  "$ROOT/tests/unit/test_critique.py"
  "$ROOT/tests/unit/test_revision.py"
  "$ROOT/tests/unit/test_classifiers.py"
  "$ROOT/tests/integration/test_rlaif_pipeline.py"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
done

for file in "${files[@]}"; do
  mkdir -p "$(dirname "$file")"
  : > "$file"
done

echo "Generated placeholder scaffold at: $ROOT"