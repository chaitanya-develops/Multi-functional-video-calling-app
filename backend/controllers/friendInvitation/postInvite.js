const User = require("../../models/user");
const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdates = require("../../socketHandlers/updates/friends");
const logger = require("../../logging/loggerConfig");


const postInvite = async (req, res) => {
  console.log(req);
  const { targetMailAddress } = req.body;

  const { userId, email: email } = req.user;

  // check if invitation is valid

  if (email.toLowerCase() === targetMailAddress.toLowerCase()) {
    logger.warn("Trying to send friend request to themself.");
    return res
      .status(409)
      .send("Sorry. You cannot become friend with yourself");
  }

  const targetUser = await User.findOne({
    email: targetMailAddress.toLowerCase(),
  });

  if (!targetUser) {
    logger.warn("Target user doesnot exist.");
    return res
      .status(404)
      .send(
        `Friend of ${targetMailAddress} has not been found. Please check mail address.`
      );
  }
  // check if invitation already sent.
  const invitationAlreadyReceived = await FriendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  });

  if (invitationAlreadyReceived) {
    logger.warn("Invitation already sent.");
    return res.status(409).send("Invitation has been already sent");
  }


  // check for if users already friends.
  const usersAlreadyFriends = targetUser.friends.find(
    (friendId) => friendId.toString() === userId.toString()
  );

  if (usersAlreadyFriends) {
    logger.warn("Friend already in friend list.");
    return res
      .status(409)
      .send("Friend already added. Please check friends list");
  }

  // add invitation to database
  const newInvitation = await FriendInvitation.create({
    senderId: userId,
    receiverId: targetUser._id,
  });
  
  // update friend request list
  friendsUpdates.updateFriendsPendingInvitations(targetUser._id.toString());
  logger.info("Friend invitation sent successfully.");
  return res.status(201).send("Invitation has been sent");
};

module.exports = postInvite;
