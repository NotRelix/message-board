const { getAllMessages } = require("../../db/query");

module.exports = {
  get: async (req, res) => {
    const messages = await getAllMessages();
    res.render("index", { title: "Message Board", messages });
  },
};
