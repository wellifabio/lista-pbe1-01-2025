const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    let mensagem = 'API respondendo';
    res.json({ mensagem });
});

app.post('/desconto', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;
    if(preco >= 1000){
        desconto = preco * 0.08;
    }
    let precoFinal = preco - desconto;
    res.json({ desconto, precoFinal });
});

app.post('/salariofamilia', (req, res) => {
    const {salario, filhos} = req.body;
    let salarioFamilia = 0;
    if(salario < 2000)
        salarioFamilia = filhos * 45;
    let salarioFinal = salario + salarioFamilia;
    res.json({ salario, salarioFamilia, salarioFinal });
});

app.post('/triangulos', (req, res) => {
    const {a, b, c} = req.body;
    let tipo = 'não é um triângulo';
    if(a + b > c && a + c > b && b + c > a){
        if(a == b && b == c)
            tipo = 'equilátero';
        else if(a != b && b != c && a != c)
            tipo = 'escaleno';
        else
            tipo = 'isósceles';
    }
    res.json({ tipo });
});

app.post('/triangulosvetor', (req, res) => {
    const {l} = req.body;
    let tipo = 'não é um triângulo';
    if(l[0] + l[1] > l[2] && l[0] + l[2] > l[1] && l[1] + l[2] > l[0]){
        if(l[0] == l[1] && l[1] == l[2])
            tipo = 'equilátero';
        else if(l[0] != l[1] && l[1] != l[2] && l[0] != l[2])
            tipo = 'escaleno';
        else
            tipo = 'isósceles';
    }
    res.json({ tipo });
});

app.post('/maior', (req, res) => {
    const { numeros } = req.body;
    let maior = Math.max(...numeros);
    res.json({ maior });
});

app.post('/crescente', (req, res) => {
    const { numeros } = req.body;
    let crescente = numeros.sort((a, b) => a - b);
    res.json({ crescente });
});

// Faça os 9 exercícios aqui

app.listen(4000, () => {
    console.log('API rodando em http://localhost:4000');
});