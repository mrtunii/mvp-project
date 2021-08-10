import UserPlugin from './user/index';
import ShutdownSequence from "./shutdown-sequence";
import DatabasePlugin from "./database";
import HobbyPlugin from './hobby';

export const database = [DatabasePlugin];
export const featuresPlugins = [HobbyPlugin,UserPlugin, ShutdownSequence];
