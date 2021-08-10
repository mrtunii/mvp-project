"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hobby_routes_1 = __importDefault(require("./hobby.routes"));
const HobbyPlugin = {
    name: 'App-Hobby',
    version: '0.1.0',
    register: function (server) {
        server.route(hobby_routes_1.default);
    }
};
exports.default = HobbyPlugin;
//# sourceMappingURL=index.js.map