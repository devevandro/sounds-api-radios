"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const GetRadiosByRegionUseCase_1 = require("../../../../../domain/radios/useCases/getRadiosByRegion/GetRadiosByRegionUseCase");
const GetRadiosByRegionSpy_1 = require("../../../../provider/spys/radios/get/getRadiosByRegion/GetRadiosByRegionSpy");
const vitest_1 = require("vitest");
const makeSut = () => {
    const getRadiosByRegionData = new GetRadiosByRegionSpy_1.GetRadiosByRegionSpy();
    const useCase = new GetRadiosByRegionUseCase_1.GetRadiosByRegionUseCase(getRadiosByRegionData);
    const data = {
        regionId: faker_1.faker.database.mongodbObjectId(),
    };
    return {
        data,
        useCase,
        getRadiosByRegionData,
    };
};
(0, vitest_1.describe)('GetRadiosByRegionId Unit Tests', () => {
    (0, vitest_1.test)('Should be able call getRadiosByRegionId', async () => {
        const { data, useCase, getRadiosByRegionData } = makeSut();
        const spy = vitest_1.vi.spyOn(getRadiosByRegionData, 'getRadiosByRegion');
        await useCase.execute(data);
        (0, vitest_1.expect)(spy).toHaveBeenCalledOnce();
    });
    (0, vitest_1.test)('Shoul be able call getRadiosByRegionId if returns null', async () => {
        const { data, getRadiosByRegionData, useCase } = makeSut();
        getRadiosByRegionData.result = null;
        const spy = vitest_1.vi.spyOn(getRadiosByRegionData, 'getRadiosByRegion');
        await useCase.execute(data);
        (0, vitest_1.expect)(spy).toHaveBeenCalledOnce();
    });
});
//# sourceMappingURL=GetRadiosByRegionUseCase.spec.js.map