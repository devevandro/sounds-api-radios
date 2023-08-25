"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoRadioMappers = void 0;
class MongoRadioMappers {
    static toEntity(radio) {
        return {
            id: radio.id,
            name: radio.name,
            img: radio.img,
            state: radio.state,
            region: radio.region,
            city: radio.city,
            isFavorite: radio.isFavorite,
            url: radio.url,
        };
    }
}
exports.MongoRadioMappers = MongoRadioMappers;
//# sourceMappingURL=MongoRadioMappers.js.map