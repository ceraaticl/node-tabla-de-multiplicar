const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base, listar, hasta) => {
    try {
        salida = '';
        consola = '';
        nombre = `./salida/tabla-${base}.txt`;
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }
        if (listar) {
            console.log('=================='.magenta);
            console.log('   Tabla del:'.green, colors.magenta(base));
            console.log('=================='.magenta);
            console.log(consola);
        }
        fs.writeFileSync(nombre, salida);
        return nombre;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivo,
};
