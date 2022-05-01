import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const BoxWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#141921",
});

const RegisterAuthBox = (props) => {
  return (
    <BoxWrapper>
      <Box
        sx={{
          width: 350,
          height: 400,
          bgcolor: "#FFFFFF",
          borderRadius: "10px",
          // boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        {props.children}
      </Box>
    </BoxWrapper>
  );
};

export default RegisterAuthBox;
