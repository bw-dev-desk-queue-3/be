const db = require("../data/dbConfig.js");
const shortid = require("shortid");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users").select(
    "id",
    "_id",
    "first_name",
    "last_name",
    "username",
    "password",
    "email",
    "is_admin",
    "cohort"
  );
}
function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [id] = await db("users").insert({ _id: shortid.generate(), ...user });
  return db("users").where({ id }).first();
}

function findById(_id) {
  return db("users").where({ _id });
}
