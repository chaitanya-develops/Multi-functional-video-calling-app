import io from 'socket.io-client';
import { setPendingFriendsInvitations } from "../store/actions/friendsActions";
import store from "../store/store";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;
    socket = io("http://localhost:2442", {
        auth: {
            token: jwtToken,
        },
    });
    socket.on("connect" , () => {
        console.log("connected to socket server");
        console.log(socket.id);
    });

    socket.on("friends-invitations", (data) => {
        const { pendingInvitations } = data;
        console.log('friends invitation event . . .');
        store.dispatch(setPendingFriendsInvitations(pendingInvitations));
      });
};