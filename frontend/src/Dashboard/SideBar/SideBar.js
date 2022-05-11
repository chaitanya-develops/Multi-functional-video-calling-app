import React from "react";
import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";
import AddFriendButton from "./AddFriendButton";
import FriendsTitle from "./FriendsTitle";
import ChatList from "./ChatList/ChatList";
import PendingInvitationsList from "./InvitationList/PendingInvitationsList";

const MainContainer = styled("div")({

  width: "266px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#3a3e98",
});

const SideBar = () => {
  return (
    <MainContainer>
      {/* <MainPageButton /> */}
      <AddFriendButton />
      <FriendsTitle title="Messages" />
      <ChatList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationsList />
      
    </MainContainer>
  );
};

export default SideBar;