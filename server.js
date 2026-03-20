require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

/* Importar Rotas (nomes padronizados e sem acento) */ 
const produtoPersonalizadoRotas = require("./src/routes/ProdutosPersonalizado.routes");
const avatarRotas = require("./src/routes/avatar.routes");
const pedidoRotas = require("./src/routes/Pedidos.routes"); 
const criacaoRotas = require("./src/routes/Criação.routes"); 
const materiaisRotas = require("./src/routes/materiais.routes");
const usuarioRotas = require("./src/routes/Usuarios.routes");
const authRotas = require("./src/routes/auth.routes");

/* Implementar Rotas */
app.use("/produtopersonalizado", produtoPersonalizadoRotas);
app.use("/avatar", avatarRotas);
app.use("/pedido", pedidoRotas);
app.use("/criacao", criacaoRotas);
app.use("/materiais", materiaisRotas);
app.use("/usuario", usuarioRotas);
app.use("/auth", authRotas);

/* Porta */
const porta = process.env.PORT_APP || 3000;

app.listen(porta, () => {
    console.log(`Servidor online na porta ${porta}`);
});