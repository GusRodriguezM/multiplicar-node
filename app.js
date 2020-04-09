//De esta manera se hace la importación de todo lo que contiene el archivo multiplicar
//const multiplicar = require('./multiplicar/multiplicar');

const argv = require('./config/yargs').argv;
const colors = require('colors');

//Gracias a la destructuración se puede hacer uso de la función de crearArchivo que está dentro del archivo multiplicar
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

console.log('Base: ' + argv.base + ' Limite: ' + argv.limite);

console.log(argv);
let comando = argv._[0];

switch(comando){

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
            .catch(e => console.log(e));
        break;
    
    default:
        console.log('Comando no reconocido');

}

