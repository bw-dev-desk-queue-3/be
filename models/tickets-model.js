const db = require("../data/dbConfig.js");

module.exports = {
  getAllTickets,
  getTicketById,
  getAssignedTickets,
  getCreatedTickets,
  createTicket,
  updateTicket,
  deleteTicket,
};

function getAllTickets() {
  return db("tickets");
}

function getTicketById(id) {
  return db("tickets").where({ id }).first();
}

function getAssignedTickets(assigned_to) {
  return db("tickets").where({ assigned_to });
}

function getCreatedTickets(user_id) {
  return db("tickets").where({ user_id });
}

async function createTicket(ticket) {
  const [id] = await db("tickets").insert(ticket, "id");
  return db("tickets").where({ id }).first();
}

async function updateTicket(id, updatedTicket) {
  const updated = await db("tickets").where({ id }).update(updatedTicket);
  return db("tickets").where({ id }).first();
}

async function deleteTicket(id) {
  await db("tickets").where({ id }).del();
  return db("tickets");
}
