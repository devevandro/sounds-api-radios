import { faker } from '@faker-js/faker';
import { describe, expect, test, vi } from 'vitest';
import { GetRadiosByStateSpy } from '../../../../provider/spys/radios/get/getRadiosByState/GetRadiosByStateSpy';
import {
  GetRadiosByStateUseCase,
  RequestDTO,
} from '../../../../../domain/radios/useCases/getRadiosByState/GetRadiosByStateUseCase';

const makeSut = () => {
  const getRadiosByStateData = new GetRadiosByStateSpy();
  const useCase = new GetRadiosByStateUseCase(getRadiosByStateData);
  const data: RequestDTO = {
    stateId: faker.database.mongodbObjectId(),
  };

  return {
    data,
    useCase,
    getRadiosByStateData,
  };
};

describe('GetRadiosByRegionId Unit Tests', () => {
  test('Should be able call getRadiosByStateId', async () => {
    const { data, useCase, getRadiosByStateData } = makeSut();
    const spy = vi.spyOn(getRadiosByStateData, 'getRadiosByState');
    await useCase.execute(data);
    expect(spy).toHaveBeenCalledOnce();
  });

  test('Shoul be able call getRadiosByStateId if returns null', async () => {
    const { data, getRadiosByStateData, useCase } = makeSut();
    getRadiosByStateData.result = null;
    const spy = vi.spyOn(getRadiosByStateData, 'getRadiosByState');
    await useCase.execute(data);
    expect(spy).toHaveBeenCalledOnce();
  });
});
