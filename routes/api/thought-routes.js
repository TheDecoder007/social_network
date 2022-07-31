const router = require("express").Router();
const {
  getAllThought,
  addThought,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

//api.thoughts
router.route("/").get(getAllThought);

// /api/thoughts/<userId>
router.route("/:userId").post(addThought);

// /api/thoughts/:thoughtId
router.route("/:thoughtId").put(updateThought);

// /api/thoughts/<userId>/<reactionId>
router.route("/:userId/:thoughtId").put(addReaction).delete(removeThought);

// remove reaction
router.route("/:userId/:thoughtId/:reactionId").delete(removeReaction);

module.exports = router;
