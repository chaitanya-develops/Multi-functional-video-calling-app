export const callActions = {
    OPEN_ROOM: "ROOM.OPEN_ROOM",
    SET_ROOM_DETAILS: "ROOM.SET_ROOM_DETAILS",
    SET_ACTIVE_ROOMS: "ROOM.SET_ACTIVE_ROOMS",
    SET_LOCAL_STREAM: "ROOM.SET_LOCAL_STREAM",
    SET_REMOTE_STREAMS: "ROOM.SET_REMOTE_STREAMS",
};

export const setOpenRoom = (isUserRoomCreator = false, isUserInRoom = false) => {
    return {
        type: roomActions.OPEN_ROOM,
        isUserRoomCreator,
        isUserInRoom,
    }
};
