import { TestStatusModel } from "../models/test.model";

/**
 * Enum representing the names of buttons used in the application.
 * - RESET: Button to reset filters or actions.
 * - FINALIZE: Button to finalize a test.
 * - RESULTS: Button to view test results.
 */
export enum ListButtonName {
	RESET = "Reset",
	FINALIZE = "Finalize",
	RESULTS = "Results",
}

/**
 * Enum representing the colors of buttons used in the application.
 * - GREEN: Green color for buttons.
 * - GRAY: Gray color for buttons.
 */
export enum ListButtonColor {
	GREEN = "#2ee5ac",
	GRAY = "#7d7d7d",
}

/**
 * Maps TestStatusModel values to the corresponding button names.
 */
export const TEST_STATUS_TO_BUTTON_NAME = {
	[TestStatusModel.DRAFT]: ListButtonName.FINALIZE,
	[TestStatusModel.ONLINE]: ListButtonName.RESULTS,
	[TestStatusModel.PAUSED]: ListButtonName.RESULTS,
	[TestStatusModel.STOPPED]: ListButtonName.RESULTS,
};

/**
 * Maps ListButtonName values to their corresponding colors.
 */
export const BUTTON_NAME_TO_COLOR = {
	[ListButtonName.RESET]: ListButtonColor.GREEN,
	[ListButtonName.FINALIZE]: ListButtonColor.GRAY,
	[ListButtonName.RESULTS]: ListButtonColor.GREEN,
};
