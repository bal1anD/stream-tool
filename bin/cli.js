require('yargs')
  .commandDir('../src/commands')
  .demandCommand(1, 'Please enter at-least 1 command to proceed')
  .help()
  .argv