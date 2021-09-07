const yargs = require('yargs');
const noteFunctions = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Adds a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        noteFunctions.addNote(argv.title, argv.body);
    }
});

yargs.parse();