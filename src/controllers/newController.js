const messages = require('../data/messages')

module.exports = {
  get: (req, res) => {
    console.log("hello get");
    res.render('form');
  },
  post: (req, res) => {
    const { name, message } = req.body;
    console.log(name, message);
    messages.push({ user: name, text: message, added: new Date() })
    res.redirect("/");
  }
}