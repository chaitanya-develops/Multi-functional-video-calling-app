const Conversation = require("../models/conversation");


const directChatHistoryHandler = async (socket, data) => {
  try {
    const { userId } = socket.user;
    const { receiverUserId } = data;

    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverUserId] },
      type: "DIRECT",
    });

  } catch (err) {
    console.log(err);
  }
};

module.exports = directChatHistoryHandler;
