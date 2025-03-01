export enum TestTypeDto {
	CLASSIC = "CLASSIC",
	SERVER_SIDE = "SERVER_SIDE",
	MVT = "MVT",
}

export enum TestStatusDto {
	DRAFT = "DRAFT",
	ONLINE = "ONLINE",
	PAUSED = "PAUSED",
	STOPPED = "STOPPED",
}

export interface TestDto {
	id: number;
	name: string;
	type: TestTypeDto;
	status: TestStatusDto;
	siteId: number;
}
