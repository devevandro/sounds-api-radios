import { faker } from '@faker-js/faker';
import {
  GetRadiosByRegionUseCase,
  RequestDTO,
} from '../../../../../domain/radios/useCases/getRadiosByRegion/GetRadiosByRegionUseCase';
import { GetRadiosByRegionSpy } from '../../../../provider/spys/radios/get/getRadiosByRegion/GetRadiosByRegionSpy';
import { describe, expect, test, vi } from 'vitest';

const makeSut = () => {
  const getRadiosByRegionData = new GetRadiosByRegionSpy();
  const useCase = new GetRadiosByRegionUseCase(getRadiosByRegionData);
  const data: RequestDTO = {
    regionId: faker.database.mongodbObjectId(),
  };

  return {
    data,
    useCase,
    getRadiosByRegionData,
  };
};

describe('GetRadiosByRegionId Unit Tests', () => {
  test('Should be able call getRadiosByRegionId', async () => {
    const { data, useCase, getRadiosByRegionData } = makeSut();
    const spy = vi.spyOn(getRadiosByRegionData, 'getRadiosByRegion');
    await useCase.execute(data);
    expect(spy).toHaveBeenCalledOnce();
  });

  test('Shoul be able call getRadiosByRegionId if returns null', async () => {
    const { data, getRadiosByRegionData, useCase } = makeSut();
    getRadiosByRegionData.result = null;
    const spy = vi.spyOn(getRadiosByRegionData, 'getRadiosByRegion');
    await useCase.execute(data);
    expect(spy).toHaveBeenCalledOnce();
  });
});
