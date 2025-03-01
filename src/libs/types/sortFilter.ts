export interface SortValue {
	field: SortFilterField;
	direction: SortFilterDirection;
}

export enum SortFilterField {
	NAME = "NAME",
	TYPE = "TYPE",
	STATUS = "STATUS",
	SITE = "SITE",
	NONE = "NONE",
}

export enum SortFilterDirection {
	ASC = "ASC",
	DESC = "DESC",
	NONE = "NONE",
}
