import React from "react";
import { styled } from "@mui/system";
import ChatListItem from "./ChatListItem";
import { connect } from 'react-redux';



const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
  borderBottom: "1px solid black",
  
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  friends.forEach((f) => {
    const isUserOnline = onlineUsers.find((user) => user.userId === f.id);
    f.isOnline = isUserOnline ? true : false;
  });

  return friends;
};

const ChatList = ({ friends, onlineUsers}) => {
  return (
    <MainContainer>
      {checkOnlineUsers(friends,onlineUsers).map((f) => (
        <ChatListItem
          username={f.username}
          
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

export default connect(mapStoreStateToProps)(ChatList);
