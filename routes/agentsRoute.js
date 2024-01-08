const express = require("express");
const {
  getAgents,
  createAgent,
  getAgent,
  updateAgent,
  deleteAgent,
} = require("../controllers/agentsController");
const validateToken = require("../Middlewares/validateTokenHandler");
const router = express.Router();

router.use(validateToken);
router.route("/").get(getAgents).post(createAgent);
router.route("/:id").get(getAgent).put(updateAgent).delete(deleteAgent);

module.exports = router;
