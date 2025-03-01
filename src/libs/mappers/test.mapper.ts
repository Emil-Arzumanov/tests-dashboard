import { TestDto, TestTypeDto, TestStatusDto } from "../dtos/test.dto";

import {
	TestModel,
	TestTypeModel,
	TestStatusModel,
	TestStatusColor,
} from "../models/test.model";

export const TestMapperToDto = (model: TestModel): TestDto => {
	return {
		id: model.id,
		name: model.name,
		type: TEST_TYPE_TO_DTO[model.type],
		status: TEST_STATUS_TO_DTO[model.status],
		siteId: model.siteId,
	};
};

export const TestMapperFromDto = (dto: TestDto): TestModel => {
	return {
		id: dto.id,
		name: dto.name,
		type: TEST_TYPE_TO_MODEL[dto.type],
		status: TEST_STATUS_TO_MODEL[dto.status],
		siteId: dto.siteId,
	};
};

const TEST_TYPE_TO_MODEL = {
	[TestTypeDto.CLASSIC]: TestTypeModel.CLASSIC,
	[TestTypeDto.SERVER_SIDE]: TestTypeModel.SERVER_SIDE,
	[TestTypeDto.MVT]: TestTypeModel.MVT,
};

const TEST_TYPE_TO_DTO = {
	[TestTypeModel.CLASSIC]: TestTypeDto.CLASSIC,
	[TestTypeModel.SERVER_SIDE]: TestTypeDto.SERVER_SIDE,
	[TestTypeModel.MVT]: TestTypeDto.MVT,
};

const TEST_STATUS_TO_MODEL = {
	[TestStatusDto.DRAFT]: TestStatusModel.DRAFT,
	[TestStatusDto.ONLINE]: TestStatusModel.ONLINE,
	[TestStatusDto.PAUSED]: TestStatusModel.PAUSED,
	[TestStatusDto.STOPPED]: TestStatusModel.STOPPED,
};

const TEST_STATUS_TO_DTO = {
	[TestStatusModel.DRAFT]: TestStatusDto.DRAFT,
	[TestStatusModel.ONLINE]: TestStatusDto.ONLINE,
	[TestStatusModel.PAUSED]: TestStatusDto.PAUSED,
	[TestStatusModel.STOPPED]: TestStatusDto.STOPPED,
};

export const TEST_STATUS_TO_COLOR = {
	[TestStatusModel.DRAFT]: TestStatusColor.DRAFT,
	[TestStatusModel.ONLINE]: TestStatusColor.ONLINE,
	[TestStatusModel.PAUSED]: TestStatusColor.PAUSED,
	[TestStatusModel.STOPPED]: TestStatusColor.STOPPED,
};
