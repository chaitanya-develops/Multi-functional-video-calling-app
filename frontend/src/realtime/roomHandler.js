import { setOpenRoom } from "../store/actions/callActions";
import store from "../store/store";

export const roomHandler = () => {
    store.dispatch(setOpenRoom(true,true));
};
