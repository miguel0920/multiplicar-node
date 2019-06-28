//Requereds
const fileSystem = require('fs');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un número.`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `Tabla de Multiplicar: ${base} * ${i} = ${base * i}\n`;
        }
        fileSystem.writeFile(`./tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`La tabla del ${ base }`);
        });
    });
};

let listarTabla = (base, limite = 10) => {
    if (!Number(base) || !Number(limite)) {
        console.log(`El valor ingresado ${base} no es un número, y/o el límite
            ${limite} no es un número.`);
        return;
    }
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

module.exports = {
    crearArchivo,
    listarTabla
};