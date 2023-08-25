"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const GetStatesUseCase_1 = require("../../../../../domain/radios/useCases/getStates/GetStatesUseCase");
const GetStatesSpy_1 = require("../../../../provider/spys/radios/get/getStates/GetStatesSpy");
const makeSut = () => {
    const getStatesData = new GetStatesSpy_1.GetStatesSpy();
    const useCase = new GetStatesUseCase_1.GetStatesUseCase(getStatesData);
    return {
        useCase,
        getStatesData,
    };
};
(0, vitest_1.describe)('GetStateBy Unit Tests', () => {
    (0, vitest_1.test)('Should be able call all states', async () => {
        const { useCase, getStatesData } = makeSut();
        const spy = vitest_1.vi.spyOn(getStatesData, 'getStates');
        await useCase.execute();
        (0, vitest_1.expect)(spy).toHaveBeenCalledOnce();
    });
    (0, vitest_1.test)('Shoul be able call state is null', async () => {
        const { useCase, getStatesData } = makeSut();
        getStatesData.result = null;
        const response = await useCase.execute();
        (0, vitest_1.expect)(response).toBeNull();
    });
});
//# sourceMappingURL=GetStatesUseCase.spec.js.map