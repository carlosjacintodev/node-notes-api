
//const validator = require('validator')
//const chalk = require('chalk')
//const log = console.log

//import chalk from "chalk"
//const getNotes = require('./notes.js')
// const msg = getNotes()
// console.log((msg))

//  validator if is email
//console.log(validator.isEmail('andrew@example.com'))

//  validator if is url
//console.log(validator.isURL('hen.link/any'))

//  THIS COURSE USE ES6

//  using Chalk2
// const greenSucess = chalk.redBright.bold.inverse("Success!!!")
// log(greenSucess)

// console.log(chalk.green(msg), chalk.blue('lol'))

// log(chalk.keyword('orange')('Yay for orange colored text!'));
// log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
// log(chalk.hex('#DEADED').bold('Bold gray!'));

//______________________________ARGV COMMANDS_____________________________
// 
//  CORE MODULES FIRST, NPM PACKAGES ...
//import chalk from "chalk"
const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
//const log = console.log
//const getNotes = require('./notes.js')
//const command = process.argv[2]
//console.log(process.argv[2])
//console.log(process.argv)
//console.log(yargs.argv)

/* if (command === 'add') {
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
} */


/* //  comparison between node and yargs
[
    'C:\\Program Files\\nodejs\\node.exe',
    'E:\\PIPECODES\\NODEJS_UDEMY\\notes-app\\app.js'
  ]
  { _: [], '$0': 'app.js' } */

// npm i yargs
// $ node app.js add --title="Todo list"
/* notes.js
[
  'C:\\Program Files\\nodejs\\node.exe',
  'E:\\PIPECODES\\NODEJS_UDEMY\\notes-app\\app.js',
  'add',
  '--title=Todo list'
]
{ _: [ 'add' ], title: 'Todo list', '$0': 'app.js' } */

// $ node app.js --help

//  Customize yargs verson
//yargs.version('1.1.0')

//  Multiple
const notes = require('./notes.js')


//  Create add command
yargs.command({
    command:'add',
    description:'Add a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption : true,
            type: 'string'
        },
        body: {
            description: 'Buy Kebabs.',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv) {          //  OLD WAY IS handler: function (argv)
        //console.log('Adding a new note!')
       /*  console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body) */
        notes.addNote(argv.title, argv.body)
    }
})

//  Create remove command
yargs.command({
    command:'remove',
    description:'Remove a new note',
    builder: {
        title: {
            description: 'Note title',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv) {
        //console.log('Removed a note!', argv)
        notes.removeNote(argv.title)
    }
})
//  $ node app.js add --title="Shopping list"

//  Create list command
yargs.command({
    command:'list',
    description:'List notes',
    handler(argv) {
        //console.log(chalk.blackBright('Listed notes!'))
        notes.listNotes()
    }
})

//  Create read command
yargs.command({
    command:'read',
    description:'Read a note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {                                 //handler: function () {
        //console.log('Readed a note!')
        notes.readNote(argv.title)
    }
})

//  add, remove, read, list

//console.log(yargs.argv)
yargs.parse()   //ALMOST EQUAL