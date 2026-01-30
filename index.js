const express = require("express"); //importar express
const app = express();

app.set("port", process.env.PORT || 8080);//definir puerto del servidor 

app.listen(app.get("port"), () => { // funcion para iniciar el servidor
  console.log(`Hola desde el puerto ${app.get("port")}`);
});

app.use(require("./src/routes/indexRutas"));
