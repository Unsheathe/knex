/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'stank', pet_type_id: 1},
    {id: 2, name: 'stenk', pet_type_id: 2},
    {id: 3, name: 'stink', pet_type_id: 3},
    {id: 4, name: 'stonk', pet_type_id: 4},
    {id: 5, name: 'stunk', pet_type_id: 2},
    {id: 6, name: 'stynk', pet_type_id: 3}
  ]);
};
