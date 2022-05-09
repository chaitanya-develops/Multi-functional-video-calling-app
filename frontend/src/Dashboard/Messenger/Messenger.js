import React from "react";
import { styled } from "@mui/system";
import AppBar from "../AppBar/AppBar";
import { connect } from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import MessengerContent from "./MessengerContent";

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#FFFFFF",
  marginTop: "50px",
  display: "flex",
});

const Messenger = (chosenChatDetails) => {
  return (
  <MainContainer>
    <AppBar />
    <WelcomeMessage />
    {/* {!chosenChatDetails ? (<WelcomeMessage />) : (<MessengerContent chosenChatDetails={chosenChatDetails} />)}  */}
    
  </MainContainer>);
};

const mapStoreStateToProps = ({chat}) => {
  return {
    ...chat,
  };
};
export default connect(mapStoreStateToProps)(Messenger);