"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = require("@hapi/hapi");
const HapiSwagger = __importStar(require("hapi-swagger"));
const Inert = __importStar(require("@hapi/inert"));
const Vision = __importStar(require("@hapi/vision"));
const config_1 = require("./config");
const plugins_1 = require("./plugins");
// hapi server instance
exports.server = new hapi_1.Server({
    port: config_1.PORT,
    host: config_1.HOST
});
// register mongodb plugin and expose connection to the server
exports.server.register(plugins_1.database);
// register all features of the app
exports.server.register(plugins_1.featuresPlugins, { routes: { prefix: '/api' } });
const swaggerOptions = {
    info: {
        title: 'API Documentation'
    }
};
const plugins = [
    {
        plugin: Inert
    },
    {
        plugin: Vision
    },
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
];
exports.server.register(plugins);
// start server
console.log('connected');
async function start() {
    await exports.server.start();
    console.log(`Server running at: ${exports.server.info.uri}`);
    exports.server.log('info', `Server running at: ${exports.server.info.uri}`);
}
start();
//# sourceMappingURL=index.js.map