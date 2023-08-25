import { describe, expect, test, vi } from 'vitest';
import { GetRegionsSpy } from '../../../../provider/spys/radios/get/getRegions/GetRegionsSpy';
import { GetRegionsUseCase } from '../../../../../domain/radios/useCases/getRegions/GetRegionsUseCase';

const makeSut = () => {
  const getRegionsData = new GetRegionsSpy();
  const useCase = new GetRegionsUseCase(getRegionsData);

  return {
    useCase,
    getRegionsData,
  };
};

describe('GetStateBy Unit Tests', () => {
  test('Should be able call all regions', async () => {
    const { useCase, getRegionsData } = makeSut();
    const spy = vi.spyOn(getRegionsData, 'getRegions');
    await useCase.execute();
    expect(spy).toHaveBeenCalledOnce();
  });

  test('Shoul be able call region is null', async () => {
    const { useCase, getRegionsData } = makeSut();
    getRegionsData.result = null;
    const response = await useCase.execute();
    expect(response).toBeNull();
  });
});
