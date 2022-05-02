import React from "react";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";


const MainContainer = styled("div")({

  height: "50px",
  borderBottom: "1px solid black",
  backgroundColor: "#36393f",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
});

const AppBar = () => {
  return (
    <MainContainer>
        <DropdownMenu />
      
    </MainContainer>
  );
};

export default AppBar;
