import express = require("express");
import cors = require("cors");
import produtosRoutes = require("./router/produtos.routes");

const app = express();
const PORT = 3000;

// Middleware

app.use(cors()); // Serve para comunicar o front-end com o back-end poís possuem origens diferentes
app.use(express.json()) // Serve para permitir a leitura de requisões do tipo json
app.use("/produtos",produtosRoutes);




app.listen(PORT, ()=>{
    console.log("API FUNCIONANDO NA PORTA "+PORT);
});