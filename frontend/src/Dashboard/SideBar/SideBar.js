import React from "react";
import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";
import ChatList from "./ChatList/ChatList";
import PendingInvitationsList from "./InvitationList/PendingInvitationsList";

const MainContainer = styled("div")({
    marginLeft: "10%",
    marginTop: "40px",
    marginBottom: "40px",
  width: "23%",
  height: "90%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#3a3e98",
});

const SideBar = () => {
  return (
    <MainContainer>
      <MainPageButton />
      <AddFriendButton />
      <FriendsTitle title="Messages" />
      <ChatList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationsList />
      
    </MainContainer>
  );
};

export default SideBar;