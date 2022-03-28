const Thought = require("../models/Thought");

const controller = {
  create: async (request, response) => {
    try {
      const { thought } = request.body;
      if (!thought) response.status(500).send({ message: "Missing data" });
      const newThought = await Thought.create(thought);
      return response.status(201).send({ newThought });
    } catch (error) {
      return response.status(500).send({ error });
    }
  },
  findOne: async (request, response) => {
    try {
      const { id } = request.params;
      if (!id) response.status(404).send({ message: "Missing information" });
      const thought = await Thought.findById(id);
      return response.status(200).send({ thought });
    } catch (error) {
      return response.status(500).send({ error })
    }
  },
  find: async (request, response) => {
    try {
      const thoughts = await Thought.find({});
      return response.status(200).send({ thoughts })
    } catch (error) {
      return response.status(500).send({ error })
    }
  },
  update: async (request, response) => {
    try {
      const { id } = request.params;
      const { thought } = request.body;
      if (!id || !thought) response.status(404).send({ message: "Missing information" });
      const updatedThought = await Thought.findByIdAndUpdate(id, thought);
      return response.status(200).send({ updatedThought });
    } catch (error) {
      return response.status(500).send({ error })
    }
  },
  delete: async (response, request) => {
    try {
      const { id } = request.params;
      if (!id) response.status(404).send({ message: "Missing id" });
      const deletedThought = await Thought.findByIdAndDelete(id, { new: true });
      return response.status(200).send({ deletedThought });
    } catch (error) {
      return response.status(500).send({ error });
    }
  },
};

module.exports = controller;
