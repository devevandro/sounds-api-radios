"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusCode = void 0;
var statusCode;
(function (statusCode) {
    statusCode[statusCode["playlistIdNotFound"] = 404] = "playlistIdNotFound";
    statusCode[statusCode["apiKeyNotValid"] = 400] = "apiKeyNotValid";
    statusCode[statusCode["withoutApiKey"] = 403] = "withoutApiKey";
    statusCode[statusCode["serverError"] = 500] = "serverError";
})(statusCode = exports.statusCode || (exports.statusCode = {}));
//# sourceMappingURL=index.js.map