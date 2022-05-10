import React from "react";
import { useEffect } from "react";
import { styled} from "@mui/material";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";
import SideBar from "./SideBar/SideBar";
import Messenger from "./Messenger/Messenger";
import {logout} from "../shared/utils/auth"
import { authActions } from "../store/actions/authActions";
import { connectWithSocketServer } from "../realtime/socketConnection";
import videoBar from "./videoBar/videoBar";




const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  backgroundColor : "#d6d6ef",
});

const Dashboard = ({setUserDetails} ) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    function setUserDetails(userDetails) {
      return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
      };
    };

    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, []);
  return (
    <Wrapper>
      <videoBar />
      <SideBar />
      <Messenger />
      
    </Wrapper>
  )
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Dashboard);
