const acciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
};
const argvs = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', acciones)
    .command('crear', 'crear archivo de la tabla de multiplicar', acciones)
    .help()
    .argv;


module.exports = {
    argvs
}