const serverStore = require('../serverStore');
const roomsUpdates = require('./updates/rooms');

const roomJoinHandler =  (socket,data) => {
    const { roomId } = data;
    const particpantDetails = {
        userId: socket.user.userId,
        socketId: socket.id,
    };

    const roomDetails = serverStore.getActiveRoom(roomId);

    serverStore.joinActiveRoom(roomId,particpantDetails);
    roomsUpdates.updateRooms();
};

module.exports = roomJoinHandler;