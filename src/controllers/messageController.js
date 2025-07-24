const messages = require('../data/messages')

module.exports = {
  get: (req, res) => {
    const { id } = req.params;
    res.render('message', { message: messages[id] });
  }
}