.PHONY: verify repo-contracts jsonl frontmatter sections hygiene local-state

PYTHON ?= python

verify:
    tools/scripts/verify.sh

repo-contracts:
    $(PYTHON) evals/repo-contracts/check-repo-contracts.py

jsonl:
    $(PYTHON) tools/scripts/check-jsonl.py .foundry/events/events.jsonl

frontmatter:
    $(PYTHON) tools/scripts/check-frontmatter.py

sections:
    $(PYTHON) tools/scripts/check-markdown-sections.py

hygiene:
    $(PYTHON) tools/scripts/check-file-hygiene.py

local-state:
    $(PYTHON) tools/scripts/check-local-state.py