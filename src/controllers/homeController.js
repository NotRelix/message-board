const messages = require("../data/messages")

module.exports = {
  get: (req, res) => {
    res.render('index', { title: "Message Board", messages });
  },
  messages,
}