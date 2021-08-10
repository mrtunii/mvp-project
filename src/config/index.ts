import dotenv from 'dotenv';
const path = require('path');

// add your own .env file with your private keys and remember to add it to your .gitignore
dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const MONGO_URI = process.env['MONGO_URI'];
export const HOST = process.env['HOST'];
export const MONGO_DB_NAME = process.env['MONGO_DB_NAME'];
export const PORT = process.env.PORT || 4000;
export const IN_MEMORY_DB = process.env['IN_MEMORY_DB'] || false;

