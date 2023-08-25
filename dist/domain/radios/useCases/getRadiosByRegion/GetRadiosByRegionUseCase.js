"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRadiosByRegionUseCase = void 0;
class GetRadiosByRegionUseCase {
    constructor(getRadiosByRegionData) {
        this.getRadiosByRegionData = getRadiosByRegionData;
    }
    async execute({ regionId }) {
        const { getRadiosByRegionData } = this;
        const radios = await getRadiosByRegionData.getRadiosByRegion({ regionId });
        if (!radios) {
            return null;
        }
        return radios;
    }
}
exports.GetRadiosByRegionUseCase = GetRadiosByRegionUseCase;
//# sourceMappingURL=GetRadiosByRegionUseCase.js.map