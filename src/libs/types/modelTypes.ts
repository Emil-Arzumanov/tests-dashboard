import { TestModel } from "../models/test.model";

/**
 * Represents an array of TestModel objects or null.
 */
export type NullableTestModelArray = TestModel[] | null;

/**
 * Represents a map where site IDs are mapped to their corresponding colors.
 */
export type SitesColorsMap = Map<number, string>;
