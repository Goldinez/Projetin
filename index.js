const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set(express.static("public"));

app.get("/",(req,res) => {
    var nome = "Danilo";
    var lang = "Javascript";
    var produtos = [
        {nome: "Cadeira", preco: 714.99},
        {nome: "Mesa", preco: 1478.99},
        {nome: "Luminaria", preco: 451.99}
    ];

    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Sun House",
        inscritos: 9999,
        msg: true,
        produtos: produtos
    });
});

app.listen(8080,()=>{
    console.log("App rodando");
});