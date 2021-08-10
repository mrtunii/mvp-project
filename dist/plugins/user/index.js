"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = __importDefault(require("./user.routes"));
const UserPlugin = {
    name: 'App-User',
    version: '0.1.0',
    register: function (server) {
        server.route(user_routes_1.default);
    }
};
exports.default = UserPlugin;
//# sourceMappingURL=index.js.map