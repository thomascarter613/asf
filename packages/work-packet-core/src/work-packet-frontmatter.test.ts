import { describe, expect, test } from "bun:test";
import {
  hasWorkPacketFrontmatter,
  parseWorkPacketFrontmatter,
  validateWorkPacketMetadata,
} from "./index";

const validMarkdown = `---
title: "WP-0038: Work Packet Frontmatter Parser Runtime Baseline"
description: "Adds dependency-free work-packet Markdown frontmatter parsing."
status: "ready"
version: "0.1.0"
created: "2026-05-03"
updated: "2026-05-03"
owner: "Project Steward"
document_type: "work-packet"
work_packet_id: "WP-0038"
milestone: "Runtime Implementation"
recommended_commit: "feat(work-packet): add frontmatter parser"
---

# WP-0038: Work Packet Frontmatter Parser Runtime Baseline

## 1. Purpose

Add parser behavior.
`;

describe("hasWorkPacketFrontmatter", () => {
  test("returns true when Markdown begins with frontmatter delimiter", () => {
    expect(hasWorkPacketFrontmatter(validMarkdown)).toBe(true);
  });

  test("returns false when Markdown does not begin with frontmatter delimiter", () => {
    expect(hasWorkPacketFrontmatter("# No frontmatter")).toBe(false);
  });
});

describe("parseWorkPacketFrontmatter", () => {
  test("parses valid frontmatter metadata", () => {
    const result = parseWorkPacketFrontmatter(validMarkdown);

    expect(result.errors).toHaveLength(0);
    expect(result.metadata.id).toBe("WP-0038");
    expect(result.metadata.workPacketId).toBe("WP-0038");
    expect(result.metadata.title).toBe(
      "WP-0038: Work Packet Frontmatter Parser Runtime Baseline",
    );
    expect(result.metadata.status).toBe("ready");
    expect(result.metadata.version).toBe("0.1.0");
    expect(result.metadata.owner).toBe("Project Steward");
    expect(result.metadata.documentType).toBe("work-packet");
    expect(result.metadata.milestone).toBe("Runtime Implementation");
    expect(result.metadata.recommendedCommit).toBe(
      "feat(work-packet): add frontmatter parser",
    );
  });

  test("extracts Markdown body", () => {
    const result = parseWorkPacketFrontmatter(validMarkdown);

    expect(result.body).toContain(
      "# WP-0038: Work Packet Frontmatter Parser Runtime Baseline",
    );
    expect(result.body).toContain("## 1. Purpose");
    expect(result.body).not.toContain("recommended_commit");
  });

  test("accepts unquoted string values", () => {
    const result = parseWorkPacketFrontmatter(`---
title: WP-0038
status: ready
version: 0.1.0
owner: Project Steward
work_packet_id: WP-0038
recommended_commit: feat(work-packet): add frontmatter parser
---

# Body
`);

    expect(result.errors).toHaveLength(0);
    expect(result.metadata.title).toBe("WP-0038");
    expect(result.metadata.status).toBe("ready");
    expect(result.metadata.version).toBe("0.1.0");
    expect(result.metadata.owner).toBe("Project Steward");
    expect(result.metadata.id).toBe("WP-0038");
    expect(result.metadata.recommendedCommit).toBe(
      "feat(work-packet): add frontmatter parser",
    );
  });

  test("maps id when explicit id key is used", () => {
    const result = parseWorkPacketFrontmatter(`---
id: "WP-0038"
title: "Parser"
status: "ready"
version: "0.1.0"
owner: "Project Steward"
recommended_commit: "feat(work-packet): add frontmatter parser"
---

# Body
`);

    expect(result.metadata.id).toBe("WP-0038");
    expect(result.metadata.workPacketId).toBeUndefined();
  });

  test("returns missing-frontmatter error", () => {
    const result = parseWorkPacketFrontmatter("# No frontmatter");

    expect(result.errors.some((error) => error.code === "missing-frontmatter")).toBe(true);
    expect(result.body).toBe("# No frontmatter");
  });

  test("returns unclosed-frontmatter error", () => {
    const result = parseWorkPacketFrontmatter(`---
title: "Broken"

# Body
`);

    expect(result.errors.some((error) => error.code === "unclosed-frontmatter")).toBe(true);
    expect(result.body).toBe("");
  });

  test("warns on unknown keys", () => {
    const result = parseWorkPacketFrontmatter(`---
title: "Parser"
status: "ready"
version: "0.1.0"
owner: "Project Steward"
work_packet_id: "WP-0038"
recommended_commit: "feat(work-packet): add frontmatter parser"
custom_key: "ignored"
---

# Body
`);

    expect(result.errors).toHaveLength(0);
    expect(result.warnings.some((warning) => warning.code === "unknown-frontmatter-key")).toBe(true);
  });

  test("warns on unsupported inline array values", () => {
    const result = parseWorkPacketFrontmatter(`---
  title: ["Parser"]
  status: "ready"
  version: "0.1.0"
  owner: "Project Steward"
  work_packet_id: "WP-0038"
  recommended_commit: "feat(work-packet): add frontmatter parser"
  ---

  # Body
  `);

    expect(result.warnings.some((warning) => warning.code === "unsupported-frontmatter-value")).toBe(true);
  });

  test("ignores known ASF metadata fields without warnings", () => {
    const result = parseWorkPacketFrontmatter(`---
  title: "Parser"
  description: "Known but ignored."
  status: "ready"
  version: "0.1.0"
  owner: "Project Steward"
  document_type: "work-packet"
  work_packet_id: "WP-0038"
  canonical: false
  audience:
    - "project-steward"
    - "engineering"
  related_documents:
    - "README.md"
  affected_files:
    - "packages/work-packet-core/src/work-packet-frontmatter.ts"
  recommended_commit: "feat(work-packet): add frontmatter parser"
  ---

  # Body
  `);

    expect(result.errors).toHaveLength(0);
    expect(result.warnings).toHaveLength(0);
    expect(result.metadata.id).toBe("WP-0038");
    expect(result.metadata.recommendedCommit).toBe(
      "feat(work-packet): add frontmatter parser",
    );
  });


  test("parsed metadata can pass metadata validation", () => {
    const parsed = parseWorkPacketFrontmatter(validMarkdown);
    const validation = validateWorkPacketMetadata(parsed.metadata);

    expect(parsed.errors).toHaveLength(0);
    expect(validation.valid).toBe(true);
  });
});