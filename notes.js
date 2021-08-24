const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')
//console.log('notes.js');

/* const getNotes = function () {
    return "Your notes..."
} */
/* const getNotes = () => {
    return "Your notes..."
} */

//module.exports = getNotes

//  add note
const addNote = (title, body) => {        //  OLD WAY const addNote = function (title, body) {
    const notes = loadNotes()
    /* const duplicateNotes = notes.filter(function (note){
        return note.title === title
    }) */
    //const duplicateNotes = notes.filter((note) => note.title === title)     // SHORTER AND MORE CONSIZE

    //  ARROW
    /* if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        //  debug
        //console.log(notes)
        saveNotes(notes)
        // debug
        console.log(chalk.green.inverse('New note added! Yey ʘ‿ʘ'))
    } else {
        //  debug
        console.log(chalk.red.inverse('Note title already token... ಠ_ಠ'))
    } */
    //  WOULD BE NICE TO STOP WHEN FOUND A DUPLICATE FIND1st
    const duplicateNote = notes.find((note) => note.title === title)
    //  NOW if there is no finds we add, we coul also check if === undefined if dont find a match


    //      5.DEBUG
    /* console.log(duplicateNote)
    console.log(title) */
    //debugger

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        //  debug
        //console.log(notes)
        saveNotes(notes)
        // debug
        console.log(chalk.green.inverse('New note added! Yey ʘ‿ʘ'))
    } else {
        //  debug
        console.log(chalk.red.inverse('Note title already token... ಠ_ಠ'))
    }
    
}

const removeNote = function (title) {
    //  placeholder for now
    //console.log(title)
    const notes = loadNotes()
    /* const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    }) */
    const notesToKeep = notes.filter((note) => note.title !==title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}
/* const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
} */

//  ARROW FCT
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJsON)
}

/* const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
} */

//  ARROW
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    //console.log(notes)
    console.log(chalk.inverse('Your notes'))
    //  now for each
    notes.forEach((note) => {
        console.log(note.title)
    })
}

module.exports = {
    //getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}