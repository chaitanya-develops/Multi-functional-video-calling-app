import React from "react";
import { styled } from "@mui/system";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";
import { getDirectChatHistory } from "../../realtime/socketConnection";
import {useEffect} from "react";


const Wrapper = styled("div")({
    flexGrow: 1,
});

const MessengerContent = ({chosenChatDetails}) => {
    useEffect(() => {
        getDirectChatHistory({
          receiverUserId: chosenChatDetails.id,
        });
        
    }, [chosenChatDetails]);
    
    return(
        <Wrapper>
            <Messages />
            <NewMessageInput />
        </Wrapper>
    );
    
    
};


export default MessengerContent;

