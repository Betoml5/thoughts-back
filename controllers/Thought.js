const Thought = require("../models/Thought");

const controller = {
  create: async (request, response) => {
    try {
      const { thought } = request.body;
      if (!thought) response.status(500).send({ message: "Missing data" });
      const newThought = await Thought.create(thought);
      return response.status(201).send({ newThought });
    } catch (error) {
      return response.status(500).send(error);
    }
  },
  delete: async (response, request) => {
    try {
      const { id } = request.params;
      if (!id) response.status(404).send({ message: "Missing id" });
      const deletedTought = await Thought.findByIdAndDelete(id, { new: true });
      return response.status(200).send({ deletedTought });
    } catch (error) {
      return response.status(500).send(error);
    }
  },
};
