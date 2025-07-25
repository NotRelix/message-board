const { getUserById } = require('../../db/query');

module.exports = {
  get: async (req, res) => {
    const { id } = req.params;
    const user = await getUserById(id);
    res.render('message', { message: user });
  }
}