import React from "react";
import Button from "@mui/material/Button";
import Avatar from "../../../shared/components/Avatar";
import Typography from "@mui/material/Typography";
import Online from "./Online";
import { chatTypes, getActions } from "../../../store/actions/chatActions";
import { connect } from 'react-redux';


const ChatListItem = ({ id, username, isOnline, setChosenChatDetails }) => {
  const handleChooseActiveConversation = () => {
    setChosenChatDetails({id:id,name:username}, chatTypes.DIRECT)
  };
  return (
    <Button
      onClick={handleChooseActiveConversation}
      style={{
        width: "100%",
        height: "60px",
        borderBottom: "1px solid black",
        paddingLeft: "2px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        textTransform: "none",
        color: "black",
        position: "relative",
        
        
        
        
        
        
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          marginLeft: "20px",
          fontSize: "14px",
          color: "#FFFFFF",
          
          
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <Online />}
    </Button>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(ChatListItem);
