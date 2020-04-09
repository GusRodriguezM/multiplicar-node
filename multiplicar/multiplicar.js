//variable para requerir el paquete de FileSystem
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    if(!Number(base) || !Number(limite)){
        reject(`El valor introducido de la base y/o el limite no es un número`);
    }

    console.log('==============='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('==============='.green);

    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base*i}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if(!Number(base) || !Number(limite)){
            // reject(`El valor introducido ${base} no es un número`);
            reject(`El valor introducido de la base y/o el limite no es un número`);
            return;
        }
        
        for(let i = 1; i <= limite; i++){
            //console.log(`${base} * ${i} = ${base*i}`);
            data += `${base} * ${i} = ${base*i}\n`
        }
        
        fs.writeFile(`archivos/tabla-${base}.txt`, data, (err) => {
            if(err) 
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    })
}

//Mediante module.exports se puede usar esta función en otra parte de la aplicación solamente importandolo
//como un paquete cualquiera
module.exports = {
    crearArchivo,
    listarTabla
}
