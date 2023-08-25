"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetRegionsUseCase = void 0;
class GetRegionsUseCase {
    constructor(getSRegionsData) {
        this.getSRegionsData = getSRegionsData;
    }
    async execute() {
        const { getSRegionsData } = this;
        const regions = await getSRegionsData.getRegions();
        if (!regions) {
            return null;
        }
        return regions;
    }
}
exports.GetRegionsUseCase = GetRegionsUseCase;
//# sourceMappingURL=GetRegionsUseCase.js.map