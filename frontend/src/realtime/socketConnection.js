import io from 'socket.io-client';
import { setPendingFriendsInvitations,setFriends,setOnlineUsers } from "../store/actions/friendsActions";
import store from "../store/store";
import { updateDirectChatHistoryIfActive } from "../shared/utils/chat";

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

    socket.on("friends-list", (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
    });

    socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers));
    });

    socket.on("direct-chat-history", (data) => {
        console.log(data);
        updateDirectChatHistoryIfActive(data);
      });

    socket.on("room-create",(data) => {
        console.log(data);
        console.log("created room details came to client . .");
    });
};


export const sendDirectMessage = (data) => {
  console.log(data);
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};

export const createNewRoom = () => {
  socket.emit('room-create');
}
