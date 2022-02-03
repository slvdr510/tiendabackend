const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente',
    new mongoose.Schema({ nombre: String, apellidos: String })
);

const Articulo = mongoose.model('Articulo',
    new mongoose.Schema({ nombre: String, precio: Number })
);

const Herramienta = mongoose.model('Herramienta',
    new mongoose.Schema({ nombre: String, precio: Number })
);

const Arreglo = mongoose.model('Arreglo',
    new mongoose.Schema({ nombre: String, precio: Number })
);


module.exports = {
    Cliente: Cliente,
    Articulo: Articulo,
    Herramienta: Herramienta,
    Arreglo: Arreglo
}

// Otra forma más corta:
// module.exports = {
//     Cliente,
//     Articulo
// }