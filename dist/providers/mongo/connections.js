"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDataBase = void 0;
const mongoose_1 = require("mongoose");
const ENVIRONMENTS_1 = require("../../constants/ENVIRONMENTS");
mongoose_1.default.Promise = global.Promise;
let isConnected;
const connectToDataBase = async () => {
    if (isConnected) {
        return Promise.resolve();
    }
    return mongoose_1.default.connect(ENVIRONMENTS_1.ENVIRONMENTS.MONGO_URL || '').then((db) => {
        isConnected = db.connections[0].readyState;
    });
};
exports.connectToDataBase = connectToDataBase;
//# sourceMappingURL=connections.js.map