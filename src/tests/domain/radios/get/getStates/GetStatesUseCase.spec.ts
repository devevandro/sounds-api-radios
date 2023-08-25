import { describe, expect, test, vi } from 'vitest';
import { GetStatesUseCase } from '../../../../../domain/radios/useCases/getStates/GetStatesUseCase';
import { GetStatesSpy } from '../../../../provider/spys/radios/get/getStates/GetStatesSpy';

const makeSut = () => {
  const getStatesData = new GetStatesSpy();
  const useCase = new GetStatesUseCase(getStatesData);

  return {
    useCase,
    getStatesData,
  };
};

describe('GetStateBy Unit Tests', () => {
  test('Should be able call all states', async () => {
    const { useCase, getStatesData } = makeSut();
    const spy = vi.spyOn(getStatesData, 'getStates');
    await useCase.execute();
    expect(spy).toHaveBeenCalledOnce();
  });

  test('Shoul be able call state is null', async () => {
    const { useCase, getStatesData } = makeSut();
    getStatesData.result = null;
    const response = await useCase.execute();
    expect(response).toBeNull();
  });
});
