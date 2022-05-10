import React from "react";
import { styled } from "@mui/system";
import CreateRoomButton from "./CreateRoomButton";


const MainContainer = styled("div")({
  width: "70px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

const videoBar = () => {
    return (
        <CreateRoomButton />
    );
};

export default videoBar;