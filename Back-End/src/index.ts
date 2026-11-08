import express = require("express");
import cors = require("cors");


const app = express();
const PORT = 3000;

// Middleware

app.use(cors()); // Serve para comunicar o front-end com o back-end poís possuem origens diferentes
app.use(express.json()) // Serve para permitir a leitura de requisões do tipo json




// Rotas

app.get("/", (req,res)=>{
    res.send("API MenuQR funcionando!");
});





app.listen(PORT, ()=>{
    console.log("API FUNCIONANDO NA PORTA "+PORT);
});