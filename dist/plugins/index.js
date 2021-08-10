"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./user/index"));
const shutdown_sequence_1 = __importDefault(require("./shutdown-sequence"));
const database_1 = __importDefault(require("./database"));
const hobby_1 = __importDefault(require("./hobby"));
exports.database = [database_1.default];
exports.featuresPlugins = [hobby_1.default, index_1.default, shutdown_sequence_1.default];
//# sourceMappingURL=index.js.map