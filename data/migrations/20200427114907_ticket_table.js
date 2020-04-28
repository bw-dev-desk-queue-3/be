exports.up = function (knex) {
  return knex.schema.createTable("tickets", (tbl) => {
    tbl.increments();
    tbl.string("title").notNullable();
    tbl.text("description").notNullable();
    tbl.string("category");
    tbl.boolean("is_resolved").notNullable().defaultTo(false);
    tbl.boolean("is_assigned").notNullable().defaultTo(false);
    tbl.integer("assigned_to").defaultTo(0);
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
    tbl.integer("user_id").unsigned().references("id").inTable("users");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tickets");
};
