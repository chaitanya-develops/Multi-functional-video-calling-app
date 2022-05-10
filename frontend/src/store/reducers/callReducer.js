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
        case callActions.SET_ROOM_DETAILS:
            return{
                ...state,
                roomDetails: action.roomDetails,
            }
        default:
            return state;
    }
};


export default reducer;