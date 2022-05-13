let express = require('express'); //Importando la dependencia.
let router = express.Router();    //Instancia del router al que asociaremos todas las rutas.

//Creando la ruta person.
router.get('/person', (req, res) => {
    res.send('Has solicitado el listado de personas'); //Respuesta al acceder a la ruta.
});

module.exports = router; //Exportando el módulo.