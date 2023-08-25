"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRegionByIdUseCase = void 0;
class GetRegionByIdUseCase {
    constructor(getRegionByIdData) {
        this.getRegionByIdData = getRegionByIdData;
    }
    async execute({ regionId }) {
        if (regionId === '' || regionId === null) {
            return null;
        }
        const { getRegionByIdData } = this;
        const region = await getRegionByIdData.getRegionById({ regionId });
        if (!region) {
            return null;
        }
        return region;
    }
}
exports.GetRegionByIdUseCase = GetRegionByIdUseCase;
//# sourceMappingURL=GetRegionByIdUseCase.js.map