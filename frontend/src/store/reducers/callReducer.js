import { callActions } from '../actions/callActions';

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
        case callActions.OPEN_ROOM:
            return {
                ...state,
                isUserInRoom: action.isUserInRoom,
                isUserRoomCreator: action.isUserRoomCreator,

            }
        default:
            return state;
    }
};


export default reducer;