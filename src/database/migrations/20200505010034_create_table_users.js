
exports.up = (knex) => knex.schema.createTable('users', (table)=>{
    table.increments('id')
    table.text('username').notNullable()
    
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('update_at').defaultTo(knex.fn.now())
})


exports.down = (knex) => {

  return knex.schema.dropTable('users')

};