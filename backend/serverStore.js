const connectedUsers = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set(socketId,{ userId });
    console.log('new user connected');
    console.log(connectedUsers);

};

const removeConnctedUser = (socketId) => {
    if(connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);
        console.log('connected users');
        console.log(connectedUsers);
    }
};

module.exports = {
    addNewConnectedUser,
    removeConnctedUser,
}