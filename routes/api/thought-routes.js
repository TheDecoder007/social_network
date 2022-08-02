const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

//api.thoughts
router.route("/").get(getAllThought);

//api.thoughts/<thoughtID>
router.route("/:thoughtId").get(getThoughtById);

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").put(updateThought);

// /api/thoughts/:thoughtId
router.route("/:userId/:thoughtId").delete(removeThought);

// /api/thoughts/;userId/<thoughtID>/
router.route("/:thoughtId/reactions").post(addReaction);

// remove reaction
router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
