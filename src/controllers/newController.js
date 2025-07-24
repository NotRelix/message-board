const messages = require('../data/messages')

module.exports = {
  get: (req, res) => {
    console.log("hello get");
    res.render('form');
  },
  post: (req, res) => {
    const { name, message } = req.body;
    messages.push({ id: Number(messages.length), user: name, text: message, added: new Date() });
    res.redirect("/");
  }
}