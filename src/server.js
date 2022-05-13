let express = require('express'); //Importando la dependencia de Express.
let app = express();              //Declaramos la app de Express.
let personsRoute= require('./routes/person'); //Importamos la ruta de person.js

app.set('view engine', 'ejs'); //Template de EJS.
app.use(personsRoute);         //Ejecutando la ruta de person.js
app.use('/assets', express.static(__dirname + '/public'));

const mongoose = require('mongoose'); //Importando la dependencia de Mongoose.
mongoose.connect(
`mongodb+srv://ahernandez102:nzpLLIENm8SbfOC3@cluster0.dhyul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
{
useNewUrlParser: true,
useUnifiedTopology: true
}
);

const db = mongoose.connection; //Constante que nos permite establecer conexión con la base de datos.
db.on("error", console.error.bind(console, "connection error: ")); //Imprime en consola un mensaje para informar un error al tratar de conectarse con MongoDB.
db.once("open", function () {
console.log("Connected successfully"); //Imprime en consola un mensaje que confirma la conexión con MongoDB.
});

let PORT = process.env.PORT || 3000; //Asignamos el puerto que esuchará las peticiones.

app.listen(PORT, () => {
    console.log('Escuchando en el puerto 3000'); //Respuesta del servidor.
});

