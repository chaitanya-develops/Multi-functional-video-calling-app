import React from "react";
import { styled } from "@mui/system";
import AppBar from "../AppBar/AppBar";

const MainContainer = styled("div")({
  
  width: "60%",
  height: "90%",
  backgroundColor: "#FFFFFF",
  marginTop: "40px",
  marginRight: "15%",
  marginBottom: "40px",
  display: "flex",
});

const Messenger = () => {
  return <MainContainer>
    <AppBar />
  </MainContainer>;
};

export default Messenger;