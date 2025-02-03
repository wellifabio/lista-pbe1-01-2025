const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Lista de exercícios');
});

app.post('/desconto', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;
    if (preco > 1000) {
        desconto = preco * 0.08;
    }
    let precoComDesconto = preco - desconto;
    res.json({ preco, desconto, precoComDesconto });
});

app.post('/crescente', (req, res)=>{
    const { numeros } = req.body;
    res.json({ numeros: numeros.sort((a, b) => a - b) });
    res.json({ numeros: numeros}); 
});

app.post('/descontoproduto',(req, res)=>{
    const { produto, preco } = req.body;
    let desconto = 0;
    if (produto.toUpperCase() == "CAMISA") {
        desconto = preco * 0.2;
    } else if (produto.toUpperCase() == "BERMUDA") {
        desconto = preco * 0.1;
    }else if (produto.toUpperCase() == "CALÇA") {
        desconto = preco * 0.15;
    }
    let precoComDesconto = preco - desconto;
    res.json({ produto, precoComDesconto });
});

app.listen(4000, () => {
  console.log('Servidor respondendo em http://localhost:4000');
});