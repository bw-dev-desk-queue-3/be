const db = require("../data/dbConfig.js");
const shortid = require("shortid");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return db("users").where({ id }).first();
}

function findById(id) {
  return db("users").where({ id }).first();
}
