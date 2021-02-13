const argv = require('yargs')
    .options({
        b: {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar',
        },
        l: {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla de multiplicar',
        },
        h: {
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Indica hasta que donde realizar la multiplicación',
        },
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número.';
        }
        if (isNaN(argv.h)) {
            throw 'El limite debe ser un número.';
        }
        if (argv.h < 1 || argv.h > 1000000) {
            throw 'El limite inferior y superior es 0 y 1000000 respectivamente.';
        }
        return true;
    }).argv;

module.exports = argv;
