

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55879,
        lat: 14.589,
        lng: 34.89745
    }
};

// console.table( persona );

const persona2 = { ...persona }; // operador spread "..."
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );