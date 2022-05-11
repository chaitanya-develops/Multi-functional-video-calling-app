import { callActions } from '../actions/callActions';

const initState = {
    isUserInRoom: false,
    isUserRoomCreator: false,
    roomDetails: null,
    activeRooms: [],
    localStream: null,
    remoteStreams: [],
    audioOnly: false,
    screenSharingStream: null,
    isScreenSharingActive: false,
    isUserJoinedWithOnlyAudio: false,
};

const reducer = (state = initState,action) => {
    switch (action.type) {
        case callActions.OPEN_ROOM:
            return {
                ...state,
                isUserInRoom: action.isUserInRoom,
                isUserRoomCreator: action.isUserRoomCreator,

            };
        case callActions.SET_ROOM_DETAILS:
            return{
                ...state,
                roomDetails: action.roomDetails,
            };
        case callActions.SET_ACTIVE_ROOMS:
            return {
                ...state,
                activeRooms: action.activeRooms,
            };
        case callActions.SET_LOCAL_STREAM:
            return {
                ...state,
                localStream: action.localStream,
            };
        case callActions.SET_AUDIO_ONLY:
            return {
                ...state,
                audioOnly: action.audioOnly,
            };
        case callActions.SET_REMOTE_STREAMS:
        return {
            ...state,
            remoteStreams: action.remoteStreams,
        };
        case callActions.SET_SCREEN_SHARE_STREAM:
        return {
            ...state,
            screenSharingStream: action.screenSharingStream,
            isScreenSharingActive: action.isScreenSharingActive,
        };
        case callActions.SET_IS_USER_JOINED_WITH_ONLY_AUDIO:
        return {
            ...state,
            isUserJoinedWithOnlyAudio: action.isUserJoinedWithOnlyAudio,
        };
        default:
            return state;
    }
};


export default reducer;