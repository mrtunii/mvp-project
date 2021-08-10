import { MONGO_DB_NAME, MONGO_URI } from "../../config";
import { MongoClient } from "mongodb";
import Mongoose from 'mongoose';

const DatabasePlugin = {
    name: 'App-Db',
    version: '0.1.0',
    register: async function (server) {
        Mongoose.connect(MONGO_URI,  { useNewUrlParser: true, useUnifiedTopology: true });
        const connection = Mongoose.connection;
        connection.on('error', console.error.bind(console, 'connection error'));
        connection.once('open', function callback() {
            console.log("Connection with database succeeded.");
        });
        
        server.app['db'] = connection.db;
        server.app['mongoClient'] = connection.getClient;
    }
};

export default DatabasePlugin;
