const router = require("express").Router();

const Tickets = require("../models/tickets-model.js");
const Users = require("../models/users-model.js");
const { auth, adminAuth } = require("../auth/withAuth.js");

// get all tickets
router.get("/", auth, async (req, res) => {
  try {
    const tickets = await Tickets.getAllTickets();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

// get tickets by id
router.get("/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;
    const ticket = await Tickets.getTicketById(id);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

//get staffs assigned tickets
router.get("/staff/:assigned_to", adminAuth, async (req, res) => {
  try {
    const id = req.params.assigned_to;
    const tickets = await Tickets.getAssignedTickets(id);
    if (tickets.length) {
      res.status(200).json(tickets);
    } else {
      res.status(404).json({
        message: "there are no tickets assigned to this staff memeber",
      });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

//get students created tickets
router.get("/student/:user_id", auth, async (req, res) => {
  try {
    const id = req.params.user_id;
    const tickets = await Tickets.getCreatedTickets(id);
    if (tickets.length) {
      res.status(200).json(tickets);
    } else {
      res.status(404).json({ message: "student has no tickets" });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

//create new ticket
router.post("/", auth, async (req, res) => {
  try {
    const { title, description, user_id } = req.body;

    if (title || description || user_id) {
      const ticket = await Tickets.createTicket(req.body);
      res.status(200).json(ticket);
    } else {
      res.status(400).json({ message: "required fields missing" });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

//update ticket
router.put("/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    const ticket = await Tickets.getTicketById(id);
    console.log(ticket);
    if (ticket) {
      Tickets.updateTicket(id, update)
        .then((ticket) => {
          res.status(200).json(ticket);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } else {
      res.status(404).json({ message: "the requested ticket does not exist" });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

//delete ticket
router.delete("/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;
    const ticket = await Tickets.getTicketById(id);

    if (ticket) {
      Tickets.deleteTicket(id)
        .then((count) => {
          res.status(200).json(count);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    } else {
      res.status(404).json({ message: "the requested ticket does not exist" });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
});

module.exports = router;
