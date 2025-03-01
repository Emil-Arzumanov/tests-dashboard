import { TestStatusModel } from "../models/test.model";

export enum ListButtonName {
	RESET = "Reset",
	FINALIZE = "Finalize",
	RESULTS = "Results",
}

export enum ListButtonColor {
	GREEN = "#2ee5ac",
	GRAY = "#7d7d7d",
}

export const TEST_STATUS_TO_BUTTON_NAME = {
	[TestStatusModel.DRAFT]: ListButtonName.FINALIZE,
	[TestStatusModel.ONLINE]: ListButtonName.RESULTS,
	[TestStatusModel.PAUSED]: ListButtonName.RESULTS,
	[TestStatusModel.STOPPED]: ListButtonName.RESULTS,
};

export const BUTTON_NAME_TO_COLOR = {
	[ListButtonName.RESET]: ListButtonColor.GREEN,
	[ListButtonName.FINALIZE]: ListButtonColor.GRAY,
	[ListButtonName.RESULTS]: ListButtonColor.GREEN,
};
