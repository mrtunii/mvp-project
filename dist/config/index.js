"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path = require('path');
// add your own .env file with your private keys and remember to add it to your .gitignore
dotenv_1.default.config({ path: path.resolve(__dirname, '../.env') });
exports.MONGO_URI = process.env['MONGO_URI'];
exports.HOST = process.env['HOST'];
exports.MONGO_DB_NAME = process.env['MONGO_DB_NAME'];
exports.PORT = process.env.PORT || 4000;
exports.IN_MEMORY_DB = process.env['IN_MEMORY_DB'] || false;
//# sourceMappingURL=index.js.map