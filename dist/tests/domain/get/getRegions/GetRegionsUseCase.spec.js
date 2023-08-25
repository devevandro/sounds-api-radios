"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const GetRegionsSpy_1 = require("../../../../provider/spys/radios/get/getRegions/GetRegionsSpy");
const GetRegionsUseCase_1 = require("../../../../../domain/radios/useCases/getRegions/GetRegionsUseCase");
const makeSut = () => {
    const getRegionsData = new GetRegionsSpy_1.GetRegionsSpy();
    const useCase = new GetRegionsUseCase_1.GetRegionsUseCase(getRegionsData);
    return {
        useCase,
        getRegionsData,
    };
};
(0, vitest_1.describe)('GetStateBy Unit Tests', () => {
    (0, vitest_1.test)('Should be able call all regions', async () => {
        const { useCase, getRegionsData } = makeSut();
        const spy = vitest_1.vi.spyOn(getRegionsData, 'getRegions');
        await useCase.execute();
        (0, vitest_1.expect)(spy).toHaveBeenCalledOnce();
    });
    (0, vitest_1.test)('Shoul be able call region is null', async () => {
        const { useCase, getRegionsData } = makeSut();
        getRegionsData.result = null;
        const response = await useCase.execute();
        (0, vitest_1.expect)(response).toBeNull();
    });
});
//# sourceMappingURL=GetRegionsUseCase.spec.js.map