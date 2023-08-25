"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
const vitest_1 = require("vitest");
const GetStateByIdSpy_1 = require("../../../../provider/spys/radios/get/getStateById/GetStateByIdSpy");
const GetStateByIdUseCase_1 = require("../../../../../domain/radios/useCases/getStateById/GetStateByIdUseCase");
const makeSut = () => {
    const getStateByIdData = new GetStateByIdSpy_1.GetStateByIdSpy();
    const useCase = new GetStateByIdUseCase_1.GetStateByIdUseCase(getStateByIdData);
    const data = {
        stateId: faker_1.faker.database.mongodbObjectId(),
    };
    return {
        data,
        useCase,
        getStateByIdData,
    };
};
(0, vitest_1.describe)('GetStateBy Unit Tests', () => {
    (0, vitest_1.test)('Should be able call getRadiosByRegionId', async () => {
        const { data, useCase, getStateByIdData } = makeSut();
        const spy = vitest_1.vi.spyOn(getStateByIdData, 'getStateById');
        await useCase.execute(data);
        (0, vitest_1.expect)(spy).toHaveBeenCalledOnce();
    });
    (0, vitest_1.test)('Shoul be able call getStateById if returns null', async () => {
        const { data, getStateByIdData, useCase } = makeSut();
        getStateByIdData.result = null;
        const spy = vitest_1.vi.spyOn(getStateByIdData, 'getStateById');
        await useCase.execute(data);
        (0, vitest_1.expect)(spy).toHaveBeenCalledOnce();
    });
    (0, vitest_1.test)('Shoul be able call stateId is null', async () => {
        const { data, useCase } = makeSut();
        data.stateId = null;
        const response = await useCase.execute(data);
        (0, vitest_1.expect)(response).toBeNull();
    });
});
//# sourceMappingURL=GetStateByIdUseCase.spec.js.map