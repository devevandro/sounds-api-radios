"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStateByIdUseCase = void 0;
class GetStateByIdUseCase {
    constructor(getStateByIdData) {
        this.getStateByIdData = getStateByIdData;
    }
    async execute({ stateId }) {
        if (stateId === '' || stateId === null) {
            return null;
        }
        const { getStateByIdData } = this;
        const state = await getStateByIdData.getStateById({ stateId });
        if (!state) {
            return null;
        }
        return state;
    }
}
exports.GetStateByIdUseCase = GetStateByIdUseCase;
//# sourceMappingURL=GetStateByIdUseCase.js.map