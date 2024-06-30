
const { crearArchivo } = require ('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

console.log('base:yargs', argv.b);


crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado '))
    .catch( err =>  console.log(err));

    
 
    // console.log('hello'.green); // outputs green text
    // console.log('i like cake and pies'.underline.red) // outputs red underlined text
    // console.log('inverse the color'.inverse); // inverses the color
    // console.log('OMG Rainbows!'.rainbow); // rainbow
    // console.log('Run the trap'.trap); // Drops the bass
     