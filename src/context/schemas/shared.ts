import { z } from "zod";

export const NonEmptyStringSchema = z.string().trim().min(1);

export const StableIdSchema = z
  .string()
  .trim()
  .min(1)
  .regex(/^[A-Za-z0-9][A-Za-z0-9._:/#-]*$/, "Must be a stable, URL-safe identifier.");

export const SemanticVersionSchema = z
  .string()
  .trim()
  .regex(/^\d+\.\d+\.\d+(?:[-+][A-Za-z0-9.-]+)?$/, "Must be a semantic version.");

export const CommitShaSchema = z
  .string()
  .trim()
  .regex(/^[0-9a-f]{7,64}$/i, "Must be a Git commit SHA or abbreviated SHA.");

export const Sha256Schema = z
  .string()
  .trim()
  .regex(/^sha256:[0-9a-f]{64}$/i, "Must be a sha256 digest in the form sha256:<hex>.");

export const IsoDateTimeSchema = z.string().trim().refine(
  (value) => {
    const parsed = Date.parse(value);
    return !Number.isNaN(parsed) && value.includes("T");
  },
  {
    message: "Must be an ISO-like datetime string.",
  },
);

export const DomainSchema = z.enum([
  "architecture",
  "data",
  "retrieval",
  "charon",
  "foundry-control-plane",
  "operations",
  "local-development",
  "security",
  "governance",
  "implementation",
  "testing",
  "documentation",
]);

export const ClassificationSchema = z.enum(["public", "internal", "confidential", "restricted"]);

export const CanonicalStoreSchema = z.enum(["git", "postgresql", "mongodb", "object_storage"]);

export type StableId = z.infer<typeof StableIdSchema>;
export type Domain = z.infer<typeof DomainSchema>;
export type Classification = z.infer<typeof ClassificationSchema>;
export type CanonicalStore = z.infer<typeof CanonicalStoreSchema>;
