export const WORK_PACKET_STATUSES = [
  "draft",
  "ready",
  "active",
  "blocked",
  "completed",
  "superseded",
  "deprecated",
] as const;

export type WorkPacketStatus = (typeof WORK_PACKET_STATUSES)[number];

export function isWorkPacketStatus(value: unknown): value is WorkPacketStatus {
  return (
    typeof value === "string" &&
    (WORK_PACKET_STATUSES as readonly string[]).includes(value)
  );
}
