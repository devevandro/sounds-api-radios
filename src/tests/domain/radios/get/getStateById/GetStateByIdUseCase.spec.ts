import { faker } from '@faker-js/faker';

import { describe, expect, test, vi } from 'vitest';
import { GetStateByIdSpy } from '../../../../provider/spys/radios/get/getStateById/GetStateByIdSpy';
import {
  GetStateByIdUseCase,
  RequestDTO,
} from '../../../../../domain/radios/useCases/getStateById/GetStateByIdUseCase';

const makeSut = () => {
  const getStateByIdData = new GetStateByIdSpy();
  const useCase = new GetStateByIdUseCase(getStateByIdData);
  const data: RequestDTO = {
    stateId: faker.database.mongodbObjectId(),
  };

  return {
    data,
    useCase,
    getStateByIdData,
  };
};

describe('GetStateBy Unit Tests', () => {
  test('Should be able call getRadiosByRegionId', async () => {
    const { data, useCase, getStateByIdData } = makeSut();
    const spy = vi.spyOn(getStateByIdData, 'getStateById');
    await useCase.execute(data);
    expect(spy).toHaveBeenCalledOnce();
  });

  test('Shoul be able call getStateById if returns null', async () => {
    const { data, getStateByIdData, useCase } = makeSut();
    getStateByIdData.result = null;
    const spy = vi.spyOn(getStateByIdData, 'getStateById');
    await useCase.execute(data);
    expect(spy).toHaveBeenCalledOnce();
  });

  test('Shoul be able call stateId is null', async () => {
    const { data, useCase } = makeSut();
    data.stateId = null;
    const response = await useCase.execute(data);
    expect(response).toBeNull();
  });
});
