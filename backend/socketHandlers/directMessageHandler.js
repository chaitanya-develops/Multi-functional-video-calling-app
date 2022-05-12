const Message = require("../models/message");
const Conversation = require("../models/conversation");
const chatUpdates = require("./updates/chat");
const logger = require("../logging/loggerConfig");

const directMessageHandler = async (socket, data) => {
  try {
    console.log("direct message event is being handled");

    const { userId } = socket.user;
    const { receiverUserId, content } = data;

    const message = await Message.create({
      content: content,
      author: userId,
      date: new Date(),
      type: "DIRECT",
    });
    logger.info("Message created successfully.");

    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverUserId] },
    });
    

    if (conversation) {
      conversation.messages.push(message._id);
      await conversation.save();
      logger.info("Push message to the conversation.")

      chatUpdates.updateChatHistory(conversation._id.toString());
    } else {
      logger.info("Create new converssation.")
      const newConversation = await Conversation.create({
        messages: [message._id],
        participants: [userId, receiverUserId],
      });


      chatUpdates.updateChatHistory(newConversation._id.toString());
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = directMessageHandler;
