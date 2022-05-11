import React from "react";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";
import ChatHead from "./ChatHead";


const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  height: "50px",
  borderBottom: "1px solid black",
  backgroundColor: "#36393f",
  width: "calc(100% - 375px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
});

const AppBar = () => {
  return (
    <MainContainer>
        <ChatHead />
        <DropdownMenu />
      
    </MainContainer>
  );
};

export default AppBar;
