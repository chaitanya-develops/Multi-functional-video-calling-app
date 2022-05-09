import React from "react";
import { styled } from "@mui/system";
import AppBar from "../AppBar/AppBar";
import { connect } from "react-redux";
import WelcomeMessage from "./WelcomeMessage";
import MessengerContent from "./MessengerContent";

const MainContainer = styled("div")({
  
  width: "60%",
  height: "90%",
  backgroundColor: "#FFFFFF",
  marginTop: "40px",
  marginRight: "15%",
  marginBottom: "40px",
  display: "flex",
});

const Messenger = (chosenChatDetails) => {
  return (
  <MainContainer>
    <AppBar />
    {!chosenChatDetails ? (<WelcomeMessage />) : (<MessengerContent chosenChatDetails={chosenChatDetails} />)} 
    
  </MainContainer>);
};

const mapStoreStateToProps = ({chat}) => {
  return {
    ...chat,
  };
};
export default connect(mapStoreStateToProps)(Messenger);