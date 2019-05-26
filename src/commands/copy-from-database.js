const handler = require('../handlers/copy-from-database')
module.exports.command = 'copy-from-database [tableName]'
module.exports.desc = 'Copy from one database into another database'
module.exports.builder = {
  tableName: {
    default: 'source_test',
    description: 'Table to copy from and to write to'
  }
}

module.exports.handler = async (yargs) => handler(yargs.tableName)
