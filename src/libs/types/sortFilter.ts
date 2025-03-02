/**
 * Represents the sorting value, including the field to sort by and the direction of sorting.
 */
export interface SortValue {
	field: SortFilterField;
	direction: SortFilterDirection;
}

/**
 * Enum representing the fields available for sorting.
 * - NAME: Sort by test name.
 * - TYPE: Sort by test type.
 * - STATUS: Sort by test status.
 * - SITE: Sort by site URL.
 * - NONE: No sorting applied.
 */
export enum SortFilterField {
	NAME = "NAME",
	TYPE = "TYPE",
	STATUS = "STATUS",
	SITE = "SITE",
	NONE = "NONE",
}

/**
 * Enum representing the directions for sorting.
 * - ASC: Sort in ascending order.
 * - DESC: Sort in descending order.
 * - NONE: No sorting direction applied.
 */
export enum SortFilterDirection {
	ASC = "ASC",
	DESC = "DESC",
	NONE = "NONE",
}
