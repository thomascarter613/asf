#!/usr/bin/env bash
set -euo pipefail

ROOT="model-training"

dirs=(
  "$ROOT/.github/workflows"
  "$ROOT/.github/ISSUE_TEMPLATE"

  "$ROOT/docker"

  "$ROOT/scripts"

  "$ROOT/configs/model"
  "$ROOT/configs/training"
  "$ROOT/configs/data"
  "$ROOT/configs/cluster"

  "$ROOT/src/models"
  "$ROOT/src/training"
  "$ROOT/src/data"
  "$ROOT/src/rlhf"

  "$ROOT/src/kernels/attention"
  "$ROOT/src/kernels/matmul"
  "$ROOT/src/kernels/normalization"
  "$ROOT/src/kernels/activations"

  "$ROOT/src/utils"

  "$ROOT/tests/unit"
  "$ROOT/tests/integration"
  "$ROOT/tests/fixtures"

  "$ROOT/evals/benchmarks"
  "$ROOT/evals/safety"
  "$ROOT/evals/internal"

  "$ROOT/notebooks"

  "$ROOT/slurm"
)

files=(
  "$ROOT/.github/workflows/lint.yml"
  "$ROOT/.github/workflows/type-check.yml"
  "$ROOT/.github/workflows/unit-tests.yml"
  "$ROOT/.github/workflows/integration-tests.yml"
  "$ROOT/.github/workflows/kernel-tests.yml"
  "$ROOT/.github/workflows/eval-gate.yml"
  "$ROOT/.github/CODEOWNERS"
  "$ROOT/.github/pull_request_template.md"
  "$ROOT/.github/ISSUE_TEMPLATE/bug_report.md"
  "$ROOT/.github/ISSUE_TEMPLATE/regression.md"
  "$ROOT/.github/SECURITY.md"

  "$ROOT/.gitignore"
  "$ROOT/.gitattributes"
  "$ROOT/.pre-commit-config.yaml"
  "$ROOT/.python-version"
  "$ROOT/.env.example"
  "$ROOT/.editorconfig"
  "$ROOT/README.md"
  "$ROOT/CONTRIBUTING.md"
  "$ROOT/PROPRIETARY"
  "$ROOT/pyproject.toml"
  "$ROOT/uv.lock"
  "$ROOT/Makefile"
  "$ROOT/CMakeLists.txt"

  "$ROOT/docker/Dockerfile.train"
  "$ROOT/docker/Dockerfile.eval"
  "$ROOT/docker/Dockerfile.dev"
  "$ROOT/docker/docker-compose.dev.yml"

  "$ROOT/scripts/setup.sh"
  "$ROOT/scripts/launch_train.sh"
  "$ROOT/scripts/launch_eval.sh"
  "$ROOT/scripts/sync_checkpoints.sh"
  "$ROOT/scripts/convert_checkpoint.sh"
  "$ROOT/scripts/profile_kernels.sh"

  "$ROOT/configs/base.yaml"
  "$ROOT/configs/model/claude-sonnet.yaml"
  "$ROOT/configs/model/claude-opus.yaml"
  "$ROOT/configs/model/claude-haiku.yaml"
  "$ROOT/configs/training/pretrain.yaml"
  "$ROOT/configs/training/sft.yaml"
  "$ROOT/configs/training/rlhf.yaml"
  "$ROOT/configs/training/cai.yaml"
  "$ROOT/configs/data/pretrain_mix.yaml"
  "$ROOT/configs/data/finetuning_mix.yaml"
  "$ROOT/configs/cluster/local.yaml"
  "$ROOT/configs/cluster/aws-p4d.yaml"
  "$ROOT/configs/cluster/aws-p5.yaml"

  "$ROOT/src/__init__.py"

  "$ROOT/src/models/__init__.py"
  "$ROOT/src/models/architecture.py"
  "$ROOT/src/models/attention.py"
  "$ROOT/src/models/mlp.py"
  "$ROOT/src/models/embeddings.py"
  "$ROOT/src/models/normalization.py"
  "$ROOT/src/models/rope.py"
  "$ROOT/src/models/kv_cache.py"
  "$ROOT/src/models/config.py"

  "$ROOT/src/training/__init__.py"
  "$ROOT/src/training/trainer.py"
  "$ROOT/src/training/distributed.py"
  "$ROOT/src/training/checkpointing.py"
  "$ROOT/src/training/curriculum.py"
  "$ROOT/src/training/loss.py"
  "$ROOT/src/training/optimizer.py"
  "$ROOT/src/training/gradient_clipping.py"
  "$ROOT/src/training/mixed_precision.py"

  "$ROOT/src/data/__init__.py"
  "$ROOT/src/data/dataset.py"
  "$ROOT/src/data/tokenizer.py"
  "$ROOT/src/data/preprocessing.py"
  "$ROOT/src/data/sampling.py"
  "$ROOT/src/data/collation.py"
  "$ROOT/src/data/filters.py"
  "$ROOT/src/data/deduplication.py"

  "$ROOT/src/rlhf/__init__.py"
  "$ROOT/src/rlhf/reward_model.py"
  "$ROOT/src/rlhf/ppo.py"
  "$ROOT/src/rlhf/grpo.py"
  "$ROOT/src/rlhf/dpo.py"
  "$ROOT/src/rlhf/constitutional.py"
  "$ROOT/src/rlhf/preference_data.py"
  "$ROOT/src/rlhf/kl_controller.py"

  "$ROOT/src/kernels/__init__.py"
  "$ROOT/src/kernels/attention/flash_attention_fwd.cu"
  "$ROOT/src/kernels/attention/flash_attention_bwd.cu"
  "$ROOT/src/kernels/attention/flash_attention.cuh"
  "$ROOT/src/kernels/attention/varlen_attn.cu"
  "$ROOT/src/kernels/attention/bindings.cpp"
  "$ROOT/src/kernels/matmul/fused_matmul.cu"
  "$ROOT/src/kernels/matmul/int8_matmul.cu"
  "$ROOT/src/kernels/matmul/bindings.cpp"
  "$ROOT/src/kernels/normalization/rms_norm.cu"
  "$ROOT/src/kernels/normalization/bindings.cpp"
  "$ROOT/src/kernels/activations/swiglu.cu"
  "$ROOT/src/kernels/activations/bindings.cpp"
  "$ROOT/src/kernels/CMakeLists.txt"

  "$ROOT/src/utils/__init__.py"
  "$ROOT/src/utils/logging.py"
  "$ROOT/src/utils/metrics.py"
  "$ROOT/src/utils/profiling.py"
  "$ROOT/src/utils/seeding.py"
  "$ROOT/src/utils/cluster.py"
  "$ROOT/src/utils/registry.py"

  "$ROOT/tests/__init__.py"
  "$ROOT/tests/conftest.py"
  "$ROOT/tests/unit/test_attention.py"
  "$ROOT/tests/unit/test_rope.py"
  "$ROOT/tests/unit/test_loss.py"
  "$ROOT/tests/unit/test_tokenizer.py"
  "$ROOT/tests/unit/test_sampling.py"
  "$ROOT/tests/unit/test_kernels.py"
  "$ROOT/tests/integration/test_training_loop.py"
  "$ROOT/tests/integration/test_distributed.py"
  "$ROOT/tests/integration/test_checkpointing.py"
  "$ROOT/tests/integration/test_rlhf_loop.py"
  "$ROOT/tests/fixtures/tiny_model_config.yaml"
  "$ROOT/tests/fixtures/sample_batch.pkl.lfs"

  "$ROOT/evals/__init__.py"
  "$ROOT/evals/run_evals.py"
  "$ROOT/evals/benchmarks/mmlu.py"
  "$ROOT/evals/benchmarks/humaneval.py"
  "$ROOT/evals/benchmarks/gsm8k.py"
  "$ROOT/evals/benchmarks/hellaswag.py"
  "$ROOT/evals/benchmarks/math.py"
  "$ROOT/evals/benchmarks/swe_bench.py"
  "$ROOT/evals/safety/harmlessness.py"
  "$ROOT/evals/safety/honesty.py"
  "$ROOT/evals/internal/claude_score.py"
  "$ROOT/evals/internal/regression_suite.py"

  "$ROOT/notebooks/loss_analysis.ipynb"
  "$ROOT/notebooks/attention_visualization.ipynb"
  "$ROOT/notebooks/reward_model_analysis.ipynb"
  "$ROOT/notebooks/tokenizer_analysis.ipynb"

  "$ROOT/slurm/train_job.sbatch"
  "$ROOT/slurm/eval_job.sbatch"
  "$ROOT/slurm/array_job.sbatch"
  "$ROOT/slurm/interactive.sbatch"
)

for dir in "${dirs[@]}"; do
  mkdir -p "$dir"
done

for file in "${files[@]}"; do
  mkdir -p "$(dirname "$file")"
  : > "$file"
done

chmod +x \
  "$ROOT/scripts/setup.sh" \
  "$ROOT/scripts/launch_train.sh" \
  "$ROOT/scripts/launch_eval.sh" \
  "$ROOT/scripts/sync_checkpoints.sh" \
  "$ROOT/scripts/convert_checkpoint.sh" \
  "$ROOT/scripts/profile_kernels.sh"

echo "Generated placeholder scaffold at: $ROOT"