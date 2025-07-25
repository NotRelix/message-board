const { insertMessage } = require('../../db/query');

module.exports = {
  get: (req, res) => {
    res.render('form');
  },
  post: async (req, res) => {
    const { name, message } = req.body;
    await insertMessage(name, message);
    res.redirect("/");
  }
}