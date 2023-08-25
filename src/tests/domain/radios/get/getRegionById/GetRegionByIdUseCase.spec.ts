import { faker } from '@faker-js/faker';

import { describe, expect, test, vi } from 'vitest';
import { GetRegionByIdSpy } from '../../../../provider/spys/radios/get/getRegionById/GetRegionByIdSpy';
import {
  GetRegionByIdUseCase,
  RequestDTO,
} from '../../../../../domain/radios/useCases/getRegionById/GetRegionByIdUseCase';

const makeSut = () => {
  const getRegionByIdData = new GetRegionByIdSpy();
  const useCase = new GetRegionByIdUseCase(getRegionByIdData);
  const data: RequestDTO = {
    regionId: faker.database.mongodbObjectId(),
  };

  return {
    data,
    useCase,
    getRegionByIdData,
  };
};

describe('GetStateBy Unit Tests', () => {
  test('Should be able call getRegionById', async () => {
    const { data, useCase, getRegionByIdData } = makeSut();
    const spy = vi.spyOn(getRegionByIdData, 'getRegionById');
    await useCase.execute(data);
    expect(spy).toHaveBeenCalledOnce();
  });

  test('Shoul be able call getRegionById if returns null', async () => {
    const { data, getRegionByIdData, useCase } = makeSut();
    getRegionByIdData.result = null;
    const spy = vi.spyOn(getRegionByIdData, 'getRegionById');
    await useCase.execute(data);
    expect(spy).toHaveBeenCalledOnce();
  });

  test('Shoul be able call regionId is null', async () => {
    const { data, useCase } = makeSut();
    data.regionId = null;
    const response = await useCase.execute(data);
    expect(response).toBeNull();
  });
});
