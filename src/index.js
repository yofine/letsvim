#!/usr/bin/env node
const yargs = require('yargs')

yargs.usage('$0 <cmd> [args]')
.command('hello [name]', 'welcome ter yargs', (yargs) => {
    yargs.positional('name', {
        type: 'string',
        default: 'Cambi',
        describe: 'the name to say hello to'
    })
}, (argv) => {
    console.log('hello', argv.name, 'welcom to yargs!')
})
.help()
.argv
