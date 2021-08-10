import { Server } from '@hapi/hapi';
import * as Hapi from '@hapi/hapi';
import * as uuid from 'uuid';
import * as HapiSwagger from 'hapi-swagger';
import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import { PORT, HOST } from './config';
import { database, featuresPlugins } from './plugins';

start();

export async function start() {
    // hapi server instance
    const server = new Server({
        port: PORT,
        host: HOST
    });

    // register mongodb plugin and expose connection to the server
    await server.register(database);
    // register all features of the app
    await server.register(featuresPlugins, { routes: { prefix: '/api' } });


    const swaggerOptions: HapiSwagger.RegisterOptions = {
        info: {
            title: 'API Documentation'
        }
    };

    const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
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

    await server.register(plugins);
    // start server
    console.log('connected');
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
    server.log('info', `Server running at: ${server.info.uri}`);
}
