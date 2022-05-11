export const callActions = {
    OPEN_ROOM: "ROOM.OPEN_ROOM",
    SET_ROOM_DETAILS: "ROOM.SET_ROOM_DETAILS",
    SET_ACTIVE_ROOMS: "ROOM.SET_ACTIVE_ROOMS",
    SET_LOCAL_STREAM: "ROOM.SET_LOCAL_STREAM",
    SET_REMOTE_STREAMS: "ROOM.SET_REMOTE_STREAMS",
    SET_AUDIO_ONLY: "ROOM.SET_AUDIO_ONLY",
    SET_SCREEN_SHARE_STREAM: "ROOM.SET_SCREEN_SHARE_STREAM",
    SET_IS_USER_JOINED_WITH_ONLY_AUDIO: "ROOM.SET_IS_USER_JOINED_WITH_ONLY_AUDIO",
};

export const setOpenRoom = (isUserRoomCreator = false, isUserInRoom = false) => {
    return {
        type: callActions.OPEN_ROOM,
        isUserRoomCreator,
        isUserInRoom,
    }
};

export const getActions = (dispatch) => {
    return {
      setAudioOnly: (audioOnly) => dispatch(setAudioOnly(audioOnly)),
      setScreenSharingStream: (stream) => {
        dispatch(setScreenSharingStream(stream));
      },
    };
};

export const setRoomDetails = (roomDetails) => {
    return {
        type: callActions.SET_ROOM_DETAILS,
        roomDetails,
    };
};

export const setActiveRooms = (activeRooms) => {
    return{
        type: callActions.SET_ACTIVE_ROOMS,
        activeRooms,
    };
};

export const setLocalStream = (localStream) => {
    return {
      type: callActions.SET_LOCAL_STREAM,
      localStream,
    };
};

export const setAudioOnly = (audioOnly) => {
    return {
      type: callActions.SET_AUDIO_ONLY,
      audioOnly,
    };
};
  
  export const setRemoteStreams = (remoteStreams) => {
    return {
      type: callActions.SET_REMOTE_STREAMS,
      remoteStreams,
    };
};
  
  export const setScreenSharingStream = (stream) => {
    return {
      type: callActions.SET_SCREEN_SHARE_STREAM,
      isScreenSharingActive: stream ? true : false,
      screenSharingStream: stream || null,
    };
};
  
  export const setIsUserJoinedOnlyWithAudio = (onlyWithAudio) => {
    return {
      type: callActions.SET_IS_USER_JOINED_WITH_ONLY_AUDIO,
      isUserJoinedWithOnlyAudio: onlyWithAudio,
    };
};
