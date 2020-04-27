# Build Week Dev Desk Queue 3 Backend

## Schema

#### Users

---

```js
{
  id: INT; // auto increments by database
  _id: STRING; // unique ID - automatically set by database - used to query
  first_name: STRING; // not nullable - 128 max chars
  last_name: STRING; // not nullable - 128 max chars
  username: STRING; // not nullable , unique - 128 max chars
  password: STRING; // not nullable - 128 max chars
  email: STRING; // not nullable , unique - 128 max chars
  is_admin: BOOLEAN; // not nullable , defaults to false
  cohort: STRING; // 128 max chars
}
```

#### Seed Data

---

```js
[
  {
    id: 1,
    first_name: "admin",
    last_name: "admin",
    username: "admin",
    password: "admin",
    email: "admin",
    is_admin: true,
    cohort: "admin",
  },
  {
    id: 2,
    first_name: "Violet",
    last_name: "Smith",
    username: "violetsmith",
    password: "password",
    email: "VioletHSmith@teleworm.us",
    is_admin: false,
    cohort: "WEB28",
  },
  {
    id: 3,
    first_name: "Kristi",
    last_name: "Wynn",
    username: "Phlin1939",
    password: "die7ooFee",
    email: "KristiCWynn@rhyta.com",
    is_admin: false,
    cohort: "WEB28",
  },
  {
    id: 4,
    first_name: "Michael",
    last_name: "Sledge",
    username: "Liis1980",
    password: "ieyaetooQu6",
    email: "MichaelMSledge@rhyta.com",
    is_admin: false,
    cohort: "WEB28",
  },
  {
    id: 5,
    first_name: "Willard",
    last_name: "Griffith",
    username: "Orromin",
    password: "iWaKeir9h",
    email: "WillardDGriffith@dayrep.com",
    is_admin: false,
    cohort: "WEB28",
  },
];
```
