const knex2 = require('../configurations/knex2')
const knex = require('../configurations/knex')
const h = require('highland')

const readFromSource = async (tableName) => knex(tableName).select()
const writeToDestination = async (tableName, row) => {
  if (Array.isArray(row)) {
    return row.forEach(item => knex2(tableName).insert(item))
  }
  return knex2(tableName).insert(row)
}

async function copyfromDatabase (tableName = 'source_test') {
  h(readFromSource(tableName))
    .each(async row => writeToDestination(tableName, row))
    .done(() => {
      console.log('Done !')
      process.exit(0)
    })
}

module.exports = copyfromDatabase
