const handler = require('../handlers/copy-from-table')
module.exports.command = 'copy-from-table [source] [dest]'
module.exports.desc = 'Start copying from one table into another table in the same DB'
module.exports.builder = {
  source: {
    default: 'source_test',
    description: 'Tablename to copy data from'
  },
  dest: {
    default: 'dest_test',
    description: 'Tablename to copy data into'
  }
}
module.exports.handler = async (yargs) => handler(yargs.source, yargs.dest)
