const db = require("../data/dbConfig.js");
const shortid = require("shortid");

module.exports = {
  add,
  find,
  findById,
};

function find() {
  return db("users").select(
    "id",
    "first_name",
    "last_name",
    "username",
    "password",
    "email",
    "is_admin",
    "cohort"
  );
}

async function add(user) {
  const [id] = await db("users").insert({ id: shortid.generate(), ...user });
  return await findById(id);
}

function findById(id) {
  return db("users").where({ id });
}
