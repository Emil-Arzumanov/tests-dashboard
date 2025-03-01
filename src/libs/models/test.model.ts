export enum TestTypeModel {
	CLASSIC = "Classic",
	SERVER_SIDE = "Server-side",
	MVT = "MVT",
}

export enum TestStatusModel {
	DRAFT = "Draft",
	ONLINE = "Online",
	PAUSED = "Paused",
	STOPPED = "Stopped",
}

export enum TestStatusColor {
	DRAFT = "#5C5C5C",
	ONLINE = "#1BDA9D",
	PAUSED = "#FF8346",
	STOPPED = "#FE4848",
}

export interface TestModel {
	id: number;
	name: string;
	type: TestTypeModel;
	status: TestStatusModel;
	siteId: number;
}
