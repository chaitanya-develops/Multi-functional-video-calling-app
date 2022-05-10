import { setOpenRoom } from "../store/actions/callActions";
import store from "../store/store";
import * as socketConnection from "./socketConnection"

export const roomHandler = () => {
    store.dispatch(setOpenRoom(true,true));
    socketConnection.createNewRoom();
};
