import { callActions } from "../actions/callActions";

const initState = {
    isUserInRoom: false,
    isUserRoomCreator: false,
    roomDetails: null,
    activeRooms: [],
    localStream: null,
    remoteStreams: [],
};

const reducer = (state = initState,action) => {
    switch (action.type) {
        default:
            return state;
    }
};


export default reducer;