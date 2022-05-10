import React from 'react'
import { useState } from 'react'
import { styled } from '@mui/system';
import ResizeRoomButton from "./ResizeRoomButton";

const MainContainer = styled("div")({
    position: "absolute",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
});
  
const fullScreenRoomStyle = {
    width: "100%",
    height: "100vh",
};

const minimizedRoomStyle = {
    bottom: "0px",
    right: "0px",
    width: "30%",
    height: "40vh",
};

const Room = () => {
    const [isRoomMinimized, setIsRoomMinimized] = useState(true);
    const roomResizeHandler = () => {
        setIsRoomMinimized(!isRoomMinimized);
    }
    return (
    <MainContainer style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}>
        <ResizeRoomButton
            isRoomMinimized={isRoomMinimized}
            handleRoomResize = {roomResizeHandler}
        />

    </MainContainer>
    )
}

export default Room;