const router = require("express").Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// Set up GET all and POST at /api/users
router.route("/").get(getAllUser).post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// set up Post and Delete friends /api/users/:userId/friends/:friendId
// router.route("/:id/friends/:id").post(createFriend).delete(deleteFriend);

module.exports = router;
