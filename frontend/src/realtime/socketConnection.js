import io from 'socket.io-client';

let socket = null;

export const connectWithSocketServer = () => {
    socket = io("http://localhost:2442");
    socket.on("connect" , () => {
        console.log("connected to socket server");
        console.log(socket.id);
    });
};