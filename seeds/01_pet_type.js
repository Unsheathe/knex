/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE pet_type CASCADE')
  await knex('pet_type').del()
  await knex('pet_type').insert([
    {id: 1, name: 'berd'},
    {id: 2, name: 'kat'},
    {id: 3, name: 'doggo'},
    {id: 4, name: 'fSH'}
  ]);
};
