const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  console.log("alguien accedio al servidor");
  res.send("Bienvenido al servidor");
});

router.get("/rutaGet", (req, res) => {
  console.log("alguien hizo un get");
  res.send("Hola mundo desde la ruta get");
});

router.get("/error", (req, res) => {
  res.status(404).json({
    error: "Recurso no encontrado",
  });
});
router.get("/listaProductos", (req, res) => {
  const productos = [
    { id: 1, nombre: "Laptop", precio: 1200, stock: 5 },
    { id: 2, nombre: "Mouse", precio: 25, stock: 20 },
    { id: 3, nombre: "Teclado", precio: 45, stock: 10 },
  ];

  console.log("Alguien entró a la lista de productos");
  res.json(productos);
});

router.get("/registro", (req, res) => {
  console.log("alguien se registro");
  res.send("bienvendio al registro, ¿Con que deseas registrarte?");
});
router.get("/Tienda", (req, res) => {
  console.log("alguien accedio al mapa de tiendas");
  res.send("¿Quires activar la ubicacion para encontrar la tienda?");
});
router.get("/listaProductos", (req, res) => {
  console.log("Alguien entro a la lista de productos");
  res.send("Esta es la lista de productos disponibles");
});
router.get("/Scaner", (req, res) => {
  console.log("alguien va a escanear un producto");
  res.send("Escanea el codigo de barras del producto que deseas comprar");
});
router.get("/Carrito", (req, res) => {
  console.log("alguien entro a su carrito de compras");
  res.json({
    Elige:
      "Metodo de pago para finalizar tu compra o ¿quieres seguir comprando?",
  });
});

router.post("/holaPOST", (req, res) => {
  req.body =
    "En el request body guardaremos los datos de los formularios para enviarlos a la base de datos";

  console.log("Enviada una peticion post");
  console.log(req.body);
  res.json({
    Title: "Probando cosas con un POST",
  });
});

router.post("/testPOST2", (req, res) => {
  req.body = console.log("Enviada una peticion post");
  console.log(req.body);
  res.json({
    Title: "Peticion POST 2",
  });
});
router.post("/POSTproductos", (req, res) => {
  req.body =
    "guardaremos los datos de los productos para enviarlos a la base de datos";
  console.log("Enviada una peticion post de productos");
  console.log(req.body);
  res.json({
    Title: "Producto guardado correctamente",
  });
});
router.post("/POSTregistro", (req, res) => {
  req.body =
    "guardaremos los datos de registro para enviarlos a la base de datos";
  console.log("Enviada una peticion post de registro");
  console.log(req.body);
  res.json({
    Title: "Usuario registrado correctamente",
  });
});

module.exports = router;
