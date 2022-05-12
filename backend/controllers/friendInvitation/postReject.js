const logger = require("../../logging/loggerConfig");
const FriendInvitation = require("../../models/friendInvitation");
const friendsUpdates = require("../../socketHandlers/updates/friends");

const postReject = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;

    // remove that invitation from friend invitations collection
    const invitationExists = await FriendInvitation.exists({ _id: id });

    if (invitationExists) {
      await FriendInvitation.findByIdAndDelete(id);
      logger.info("Friend Invitation removed from db on request.");
    }

    // update pending invitations
    friendsUpdates.updateFriendsPendingInvitations(userId);
    logger.info("Friend Invitation rejected successfully.");
    return res.status(200).send("Invitation succesfully rejected");
  } catch (err) {
    console.log(err);
    logger.error("Friend Invitation rejection failed.");
    return res.status(500).send("Something went wrong please try again");
  }
};

module.exports = postReject;
