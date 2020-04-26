const shortid = require("shortid");

exports.seed = function (knex) {
  return knex("users").insert([
    {
      id: shortid.generate(),
      first_name: "admin",
      last_name: "admin",
      username: "admin",
      password: "admin",
      email: "admin",
      is_admin: true,
      cohort: "admin",
    },
    {
      id: shortid.generate(),
      first_name: "Violet",
      last_name: "Smith",
      username: "violetsmith",
      password: "password",
      email: "VioletHSmith@teleworm.us",
      is_admin: false,
      cohort: "Web 28",
    },
    {
      id: shortid.generate(),
      first_name: "Kristi",
      last_name: "Wynn",
      username: "Phlin1939",
      password: "die7ooFee",
      email: "KristiCWynn@rhyta.com",
      is_admin: false,
      cohort: "Web 28",
    },
    {
      id: shortid.generate(),
      first_name: "Michael",
      last_name: "Sledge",
      username: "Liis1980",
      password: "ieyaetooQu6",
      email: "MichaelMSledge@rhyta.com",
      is_admin: false,
      cohort: "Web 28",
    },
    {
      id: shortid.generate(),
      first_name: "Willard",
      last_name: "Griffith",
      username: "Orromin",
      password: "iWaKeir9h",
      email: "WillardDGriffith@dayrep.com",
      is_admin: false,
      cohort: "Web 28",
    },
  ]);
};
