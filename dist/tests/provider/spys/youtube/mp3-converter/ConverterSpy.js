"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterSpy = void 0;
class ConverterSpy {
    async convertToMP3({ videoId }) {
        this.params = { videoId };
    }
}
exports.ConverterSpy = ConverterSpy;
//# sourceMappingURL=ConverterSpy.js.map