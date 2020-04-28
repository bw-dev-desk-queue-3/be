// const shortid = require("shortid");

exports.seed = function (knex) {
  return knex("users").insert([
    {
      id: 1,
      first_name: "admin",
      last_name: "admin",
      username: "admin",
      password: "$2a$14$Jy4D9momwE2Jk10OUL2GZu0At8wCX5JC6IbIPOyUjBa8qjXDuvy4C", //admin
      email: "admin",
      is_admin: true,
      cohort: "admin",
    },
    {
      id: 2,
      first_name: "Violet",
      last_name: "Smith",
      username: "violetsmith",
      password: "$2a$14$nBQ8pSTeNz7RptROP3kt5eowwvN80TG0msOgo.obqN8a4v58P1W8W", //password
      email: "VioletHSmith@teleworm.us",
      is_admin: false,
      cohort: "WEB28",
    },
    {
      id: 3,
      first_name: "Kristi",
      last_name: "Wynn",
      username: "Phlin1939",
      password: "$2a$14$QE50LjHPito0UJ.TMEIJS.JyMt.ycxoxy9xmk5SUZ8cSFP9yvtEiK", //die7ooFee
      email: "KristiCWynn@rhyta.com",
      is_admin: false,
      cohort: "WEB28",
    },
    {
      id: 4,
      first_name: "Michael",
      last_name: "Sledge",
      username: "Liis1980",
      password: "$2a$14$XCOaFPSqycvaa.at5VayYeRAxzTsOJmTfSTrsqgBHkvl383TXHgeq", //ieyaetooQu6
      email: "MichaelMSledge@rhyta.com",
      is_admin: false,
      cohort: "WEB28",
    },
    {
      id: 5,
      first_name: "Willard",
      last_name: "Griffith",
      username: "Orromin",
      password: "$2a$14$AOx7sS0tK.kyXA62JlArG.au8.prbZmwkMMBrlGibMz9Jb7exzOde", //iWaKeir9h
      email: "WillardDGriffith@dayrep.com",
      is_admin: false,
      cohort: "WEB28",
    },
  ]);
};
