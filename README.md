# Back-End for Dev Desk Queue

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
