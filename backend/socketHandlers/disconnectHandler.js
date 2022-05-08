const serverStore = require('../serverStore');

const disconnectHandler = (socket) => {
    serverStore.removeConnctedUser(socket.id);
};

module.exports = disconnectHandler;