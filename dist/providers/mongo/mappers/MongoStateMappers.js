"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoStateMappers = void 0;
class MongoStateMappers {
    static toEntity(state) {
        return {
            id: state.id,
            name: state.name,
        };
    }
}
exports.MongoStateMappers = MongoStateMappers;
//# sourceMappingURL=MongoStateMappers.js.map