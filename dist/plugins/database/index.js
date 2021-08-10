"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const mongoose_1 = __importDefault(require("mongoose"));
const DatabasePlugin = {
    name: 'App-Db',
    version: '0.1.0',
    register: async function (server) {
        mongoose_1.default.connect(config_1.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        const connection = mongoose_1.default.connection;
        connection.on('error', console.error.bind(console, 'connection error'));
        connection.once('open', function callback() {
            console.log("Connection with database succeeded.");
        });
        server.app['db'] = connection.db;
        server.app['mongoClient'] = connection.getClient;
    }
};
exports.default = DatabasePlugin;
//# sourceMappingURL=index.js.map