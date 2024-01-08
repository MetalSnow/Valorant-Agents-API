const asyncHandler = require("express-async-handler");
const Agent = require("../models/agentsModel");

//@desc Get All Agents
//@route GET /api/valorant
//@access private
const getAgents = asyncHandler(async (req, res) => {
  const agent = await Agent.find({ user_id: req.user.id });
  res.status(200).json(agent);
});

//@desc Create Agents
//@route POST /api/valorant
//@access private
const createAgent = asyncHandler(async (req, res) => {
  const { name, role, gun } = req.body;
  if (!name || !role || !gun) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const agent = await Agent.create({ name, role, gun, user_id: req.user.id });
  res.status(201).json(agent);
});

//@desc Get Agent
//@route GET /api/valorant
//@access private
const getAgent = asyncHandler(async (req, res) => {
  const agent = await Agent.findById(req.params.id);
  if (!agent) {
    res.status(404);
    throw new Error("Agent Not Available!");
  }
  res.status(200).json(agent);
});

//@desc Update Agent
//@route PUT /api/valorant
//@access private
const updateAgent = asyncHandler(async (req, res) => {
  const agent = await Agent.findById(req.params.id);
  if (!agent) {
    res.status(404);
    throw new Error("Agent Not Available!");
  }
  if (agent.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User dont have permission to update other user contacts");
  }
  const updatedAgent = await Agent.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedAgent);
});

//@desc Delete Agent
//@route DELETE /api/valorant
//@access private
const deleteAgent = asyncHandler(async (req, res) => {
  const agent = await Agent.findById(req.params.id);
  if (!agent) {
    res.status(404);
    throw new Error("Agent Not Available!");
  }
  if (agent.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User dont have permission to update other user contacts");
  }
  await Agent.deleteOne({ _id: req.params.id });
  console.log("Agent Removed Successfully!");
  res.status(200).json(agent);
});

module.exports = { getAgents, createAgent, getAgent, updateAgent, deleteAgent };
