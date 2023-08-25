"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterUseCase = void 0;
class ConverterUseCase {
    constructor(converterData) {
        this.converterData = converterData;
    }
    async execute(params) {
        await this.converterData.convertToMP3(params);
    }
}
exports.ConverterUseCase = ConverterUseCase;
//# sourceMappingURL=ConverterUseCase.js.map