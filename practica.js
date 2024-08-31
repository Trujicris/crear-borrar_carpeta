var fs = require('fs');
/* crear carpeta */
if (!fs.existsSync('./do')) {
    fs.mkdirSync('do');
}



/* introduccion de texto al archivo   */
var archivo = 'ejerci.txt';

if (fs.existsSync(archivo)) {
    fs.writeFileSync(archivo, '');
}

var uno = 'Hola, ¿cómo vas? \n';
var dos = 'Bien y tú? ';

fs.writeFileSync(archivo, uno);
fs.appendFileSync(archivo, dos);
 
/* interpretar el archivo */
var contenido = fs.readFileSync(archivo, 'utf-8');

console.log(contenido);

/* enrutar el archivo  */
 if(fs.existsSync('./do')
){
    fs.renameSync('./ejerci.txt','./do/ejerci.txt')

 }

/* eliminar el archivo */
 if (fs.existsSync('./do')) {
    fs.unlinkSync('./do/ejerci.txt'); 
    console.log('Archivo ejerci.txt eliminado.');
}

/* eliminar carpeta */
fs.rmdirSync ('./do', {recursive:true});
console.log('CARPETA ELIMINADA')