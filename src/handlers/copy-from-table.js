const knex = require('../configurations/knex')
const h = require('highland')

const writeToDb = async (row, destTable) => knex(destTable).insert(row)

async function copyFromDb (source = 'source_test', destination = 'dest_test') {
  console.log(`Source ${source}, destination ${destination}`)
  h(knex(source).select())
    .each(row => writeToDb(row, destination))
    .done(() => {
      console.log('Done!')
      process.exit(0)
    })
}

module.exports = copyFromDb
