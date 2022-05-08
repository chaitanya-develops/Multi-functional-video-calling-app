const User = require("../../models/user");
const FriendInvitation = require("../../models/friendInvitation");


const postInvite = async (req, res) => {
  const { targetMailAddress } = req.body;

  const { userId, email: email } = req.user;

  // check if invitation is valid

  if (email.toLowerCase() === targetMailAddress.toLowerCase()) {
    return res
      .status(409)
      .send("Sorry. You cannot become friend with yourself");
  }

  const targetUser = await User.findOne({
    email: targetMailAddress.toLowerCase(),
  });

  if (!targetUser) {
    return res
      .status(404)
      .send(
        `Friend of ${targetMailAddress} has not been found. Please check mail address.`
      );
  }
  const invitationAlreadyReceived = await FriendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });

  if (invitationAlreadyReceived) {
    return res.status(409).send("Invitation has been already sent");
  }
  
};

module.exports = postInvite;
