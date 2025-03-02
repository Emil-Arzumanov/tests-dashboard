import { TestDto, TestTypeDto, TestStatusDto } from "../dtos/test.dto";

import {
	TestModel,
	TestTypeModel,
	TestStatusModel,
	TestStatusColor,
} from "../models/test.model";

/**
 * Maps a TestModel object to a TestDto object.
 * Converts the test type and status from the model format to the DTO format.
 * @param model The TestModel object to map.
 * @returns A TestDto object with the corresponding DTO values.
 */
export const TestMapperToDto = (model: TestModel): TestDto => {
	return {
		id: model.id,
		name: model.name,
		type: TEST_TYPE_TO_DTO[model.type],
		status: TEST_STATUS_TO_DTO[model.status],
		siteId: model.siteId,
	};
};

/**
 * Maps a TestDto object to a TestModel object.
 * Converts the test type and status from the DTO format to the model format.
 * @param dto The TestDto object to map.
 * @returns A TestModel object with the corresponding model values.
 */
export const TestMapperFromDto = (dto: TestDto): TestModel => {
	return {
		id: dto.id,
		name: dto.name,
		type: TEST_TYPE_TO_MODEL[dto.type],
		status: TEST_STATUS_TO_MODEL[dto.status],
		siteId: dto.siteId,
	};
};

/**
 * Maps TestTypeDto values to TestTypeModel values.
 */
const TEST_TYPE_TO_MODEL = {
	[TestTypeDto.CLASSIC]: TestTypeModel.CLASSIC,
	[TestTypeDto.SERVER_SIDE]: TestTypeModel.SERVER_SIDE,
	[TestTypeDto.MVT]: TestTypeModel.MVT,
};

/**
 * Maps TestTypeModel values to TestTypeDto values.
 */
const TEST_TYPE_TO_DTO = {
	[TestTypeModel.CLASSIC]: TestTypeDto.CLASSIC,
	[TestTypeModel.SERVER_SIDE]: TestTypeDto.SERVER_SIDE,
	[TestTypeModel.MVT]: TestTypeDto.MVT,
};

/**
 * Maps TestStatusDto values to TestStatusModel values.
 */
const TEST_STATUS_TO_MODEL = {
	[TestStatusDto.DRAFT]: TestStatusModel.DRAFT,
	[TestStatusDto.ONLINE]: TestStatusModel.ONLINE,
	[TestStatusDto.PAUSED]: TestStatusModel.PAUSED,
	[TestStatusDto.STOPPED]: TestStatusModel.STOPPED,
};

/**
 * Maps TestStatusModel values to TestStatusDto values.
 */
const TEST_STATUS_TO_DTO = {
	[TestStatusModel.DRAFT]: TestStatusDto.DRAFT,
	[TestStatusModel.ONLINE]: TestStatusDto.ONLINE,
	[TestStatusModel.PAUSED]: TestStatusDto.PAUSED,
	[TestStatusModel.STOPPED]: TestStatusDto.STOPPED,
};

/**
 * Maps TestStatusModel values to their corresponding colors.
 */
export const TEST_STATUS_TO_COLOR = {
	[TestStatusModel.DRAFT]: TestStatusColor.DRAFT,
	[TestStatusModel.ONLINE]: TestStatusColor.ONLINE,
	[TestStatusModel.PAUSED]: TestStatusColor.PAUSED,
	[TestStatusModel.STOPPED]: TestStatusColor.STOPPED,
};
