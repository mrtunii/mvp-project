"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Response {
    constructor(message, payload, statusCode = 200) {
        this.message = message;
        this.payload = payload;
        this.statusCode = statusCode;
    }
}
exports.Response = Response;
//# sourceMappingURL=response.model.js.map