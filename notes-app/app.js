const chalk = require('chalk');
const { argv } = require('process');
const yargs = require('yargs');

const notes = require('./notes');

//const msg = getNotes();
const success = chalk.gray.bgGreenBright.bold;
//console.log(success('success!'));
yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
       notes.addNote(argv.title,argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Remove title name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Get Note List',
    handler() {
       notes.listNotes();
    }
});

yargs.command({
command: 'read',
describe:'Read a Note',
builder: {
    title:{
        describe: 'Reading title name',
        demandOption: true,
        type: 'string'
    }
},
handler(argv){
    notes.readNote(argv.title);
}
});


yargs.parse()
//console.log(yargs.argv);
