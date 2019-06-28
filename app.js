const { crearArchivo, listarTabla } = require('./multiplicacion/multiplicacion');
const configYargs = require('./configuracion/configuracion').argvs;
const colors = require('colors');
//let base = 'abc';
//let argv = process.argv;
//let parametro = argv[2].split('=')[1];
let accion = configYargs._[0];
switch (accion) {
    case 'crear':
        crearArchivo(configYargs.base, configYargs.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(error => console.log(error));
        break;
    case 'listar':
        listarTabla(configYargs.base, configYargs.limite);
        break;
    default:
        console.log(`Acción no reconocido`.red);
        break;
}