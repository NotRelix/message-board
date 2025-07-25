const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM users");
  return rows;
}

async function insertMessage(name, message) {
  await pool.query("INSERT INTO users (username, message) VALUES ($1, $2)", [
    name,
    message,
  ]);
}

async function getUserById(id) {
  const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return rows[0];
}

module.exports = {
  getAllMessages,
  insertMessage,
  getUserById,
};
