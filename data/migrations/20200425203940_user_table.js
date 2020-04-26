exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.string("id", 14).primary();
    tbl.string("first_name", 128).notNullable();
    tbl.string("last_name", 128).notNullable();
    tbl.string("username", 128).notNullable().unique();
    tbl.string("password", 128).notNullable();
    tbl.string("email", 128).notNullable().unique();
    tbl.boolean("is_admin").notNullable().defaultTo(false);
    tbl.string("cohort", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
