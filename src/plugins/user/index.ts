import userRoutes from './user.routes';

const UserPlugin = {
    name: 'App-User',
    version: '0.1.0',
    register: function (server) {
        server.route(userRoutes);
    }
};

export default UserPlugin;