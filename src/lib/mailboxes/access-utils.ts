import type { AppDatabase } from "@/db";

/** This fork unlocks every feature, so Team mailbox sharing is always on (see lib/licenses/service.ts). */
export async function isTeamMailboxSharingEnabled(_db: AppDatabase): Promise<boolean> {
	return true;
}
