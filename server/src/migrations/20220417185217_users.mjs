export function up(knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("email").unique().notNull();
    table.string("password").notNull();
    table.string("rePassword").notNull();
    table.string("nickName").notNull();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export function down(knex) {
  return knex.schema.dropTable("users");
}
