/**
 * Enum representing the types of tests in a user-friendly format.
 * - CLASSIC: Classic type of test.
 * - SERVER_SIDE: Server-side type of test.
 * - MVT: Multi-variant test type.
 */
export enum TestTypeModel {
	CLASSIC = "Classic",
	SERVER_SIDE = "Server-side",
	MVT = "MVT",
}

/**
 * Enum representing the statuses of tests in a user-friendly format.
 * - DRAFT: The test is in draft mode.
 * - ONLINE: The test is currently active.
 * - PAUSED: The test is paused.
 * - STOPPED: The test is stopped.
 */
export enum TestStatusModel {
	DRAFT = "Draft",
	ONLINE = "Online",
	PAUSED = "Paused",
	STOPPED = "Stopped",
}

/**
 * Enum representing the colors associated with test statuses.
 * - DRAFT: Gray color for draft status.
 * - ONLINE: Green color for online status.
 * - PAUSED: Orange color for paused status.
 * - STOPPED: Red color for stopped status.
 */
export enum TestStatusColor {
	DRAFT = "#5C5C5C",
	ONLINE = "#1BDA9D",
	PAUSED = "#FF8346",
	STOPPED = "#FE4848",
}

/**
 * Represents a test model with an ID, name, type, status, and associated site ID.
 */
export interface TestModel {
	id: number;
	name: string;
	type: TestTypeModel;
	status: TestStatusModel;
	siteId: number;
}
