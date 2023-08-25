"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const vitest_1 = require("vitest");
const GetRegionByIdSpy_1 = require("../../../../provider/spys/radios/get/getRegionById/GetRegionByIdSpy");
const GetRegionByIdUseCase_1 = require("../../../../../domain/radios/useCases/getRegionById/GetRegionByIdUseCase");
const makeSut = () => {
    const getRegionByIdData = new GetRegionByIdSpy_1.GetRegionByIdSpy();
    const useCase = new GetRegionByIdUseCase_1.GetRegionByIdUseCase(getRegionByIdData);
    const data = {
        regionId: faker_1.faker.database.mongodbObjectId(),
    };
    return {
        data,
        useCase,
        getRegionByIdData,
    };
};
(0, vitest_1.describe)('GetStateBy Unit Tests', () => {
    (0, vitest_1.test)('Should be able call getRegionById', async () => {
        const { data, useCase, getRegionByIdData } = makeSut();
        const spy = vitest_1.vi.spyOn(getRegionByIdData, 'getRegionById');
        await useCase.execute(data);
        (0, vitest_1.expect)(spy).toHaveBeenCalledOnce();
    });
    (0, vitest_1.test)('Shoul be able call getRegionById if returns null', async () => {
        const { data, getRegionByIdData, useCase } = makeSut();
        getRegionByIdData.result = null;
        const spy = vitest_1.vi.spyOn(getRegionByIdData, 'getRegionById');
        await useCase.execute(data);
        (0, vitest_1.expect)(spy).toHaveBeenCalledOnce();
    });
    (0, vitest_1.test)('Shoul be able call regionId is null', async () => {
        const { data, useCase } = makeSut();
        data.regionId = null;
        const response = await useCase.execute(data);
        (0, vitest_1.expect)(response).toBeNull();
    });
});
//# sourceMappingURL=GetRegionByIdUseCase.spec.js.map