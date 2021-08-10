import hobbyRoutes from './hobby.routes';

const HobbyPlugin = {
    name: 'App-Hobby',
    version: '0.1.0',
    register: function (server) {
        server.route(hobbyRoutes);
    }
};

export default HobbyPlugin;