export function up(knex) {
  return knex.schema.createTable("scores", function (table) {
    table.increments("scoreId").primary();
    table.integer("turns").notNull();
    table.string("userId").notNull();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export function down(knex) {
  return knex.schema.dropTable("scores");
}
