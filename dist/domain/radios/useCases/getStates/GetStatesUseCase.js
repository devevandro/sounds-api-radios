"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetStatesUseCase = void 0;
class GetStatesUseCase {
    constructor(getStatesData) {
        this.getStatesData = getStatesData;
    }
    async execute() {
        const { getStatesData } = this;
        const states = await getStatesData.getStates();
        if (!states) {
            return null;
        }
        return states;
    }
}
exports.GetStatesUseCase = GetStatesUseCase;
//# sourceMappingURL=GetStatesUseCase.js.map