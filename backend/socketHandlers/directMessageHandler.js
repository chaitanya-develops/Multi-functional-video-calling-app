const Message = require("../models/message");
const Conversation = require("../models/conversation");
const chatUpdates = require("./updates/chat");

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

    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverUserId] },
    });

  } catch (err) {
    console.log(err);
  }
};

module.exports = directMessageHandler;
