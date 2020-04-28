# Build Week Dev Desk Queue 3 Backend

## Schema

#### Users

---

```js
{
  id: INTEGER; // auto increments by database
  first_name: STRING; // not nullable - 128 max chars
  last_name: STRING; // not nullable - 128 max chars
  username: STRING; // not nullable , unique - 128 max chars
  password: STRING; // not nullable - 128 max chars
  email: STRING; // not nullable , unique - 128 max chars
  is_admin: BOOLEAN; // not nullable , defaults to false
  cohort: STRING; // 128 max chars
}
```

#### Tickets

---

```js
{
  id: INTEGER; // auto increments by database
  title: STRING; // not nullable
  description: TEXT; //not nullable
  category: STRING; // nullable
  is_resolved: BOOLEAN; // not nullable, defaults to false
  is_assigned: BOOLEAN; //not nullable, defaults to false
  assigned_to: INTEGER; // defaults to 0 - meaning not assigned to anyone!
  created_at: TIMESTAMP; // defaults to now - no need to fill this out
  user_id: INTEGER; // references user id - the users id that created this ticket!
}
```

## Endpoints

#### Auth

---

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| POST   | `/api/register`  | User Registration  |
| POST   | `/api/login`     | User Login         |
| GET    | `/api/users`     | Returns all users  |
| GET    | `/api/users/:id` | Returns user by ID |

#### Tickets

---

| Method | Endpoint                          | Description                                   |
| ------ | --------------------------------- | --------------------------------------------- |
| GET    | `/api/tickets`                    | Returns all tickets                           |
| GET    | `/api/tickets/:id`                | Returns specified ticket                      |
| GET    | `/api/tickets/staff/:assigned_to` | Returns tickets assigned to specified staff   |
| GET    | `/api/tickets/student/:user_id`   | Returns tickets assigned to specified student |
| POST   | `/api/tickets/`                   | Creates a new ticket                          |
| PUT    | `/api/tickets/:id`                | Udates specified ticket                       |
| DELETE | `/api/tickets/:id`                | Deletes specified ticket                      |

## Seed Data

#### Users

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

#### Tickets

---

```js
[
  {
    id: 1,
    title: "GitHub issue",
    description: "Short description",
    category: "GitHub",
    is_resolved: 0,
    is_assigned: 0,
    assigned_to: 0,
    user_id: 2,
  },
  {
    id: 2,
    title: "JavaScript issue",
    description: "Short description",
    category: "JavaScript",
    is_resolved: 0,
    is_assigned: 0,
    assigned_to: 0,
    user_id: 3,
  },
  {
    id: 3,
    title: "React issue",
    description: "Short description",
    category: "React",
    is_resolved: 0,
    is_assigned: 1,
    assigned_to: 1,
    user_id: 4,
  },
  {
    id: 4,
    title: "CSS issue",
    description: "Short description",
    category: "CSS",
    is_resolved: 0,
    is_assigned: 1,
    assigned_to: 1,
    user_id: 5,
  },
  {
    id: 5,
    title: "HTML issue",
    description: "Short description",
    category: "HTML",
    is_resolved: 0,
    is_assigned: 0,
    assigned_to: 0,
    user_id: 4,
  },
  {
    id: 6,
    title: "React problems",
    description: "Short description",
    category: "React",
    is_resolved: 0,
    is_assigned: 0,
    assigned_to: 0,
    user_id: 3,
  },
];
```
