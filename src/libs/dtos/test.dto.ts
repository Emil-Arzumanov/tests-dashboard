/**
 * Enum representing the types of tests.
 * - CLASSIC: Classic type of test.
 * - SERVER_SIDE: Server-side type of test.
 * - MVT: Multi-variant test type.
 */
export enum TestTypeDto {
	CLASSIC = "CLASSIC",
	SERVER_SIDE = "SERVER_SIDE",
	MVT = "MVT",
}

/**
 * Enum representing the statuses of tests.
 * - DRAFT: The test is in draft mode.
 * - ONLINE: The test is currently active.
 * - PAUSED: The test is paused.
 * - STOPPED: The test is stopped.
 */
export enum TestStatusDto {
	DRAFT = "DRAFT",
	ONLINE = "ONLINE",
	PAUSED = "PAUSED",
	STOPPED = "STOPPED",
}

/**
 * Represents a test data transfer object (DTO) with an ID, name, type, status, and associated site ID.
 */
export interface TestDto {
	id: number;
	name: string;
	type: TestTypeDto;
	status: TestStatusDto;
	siteId: number;
}
