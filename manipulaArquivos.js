let fs = require ('fs'); //filesystem -modulo nativo

//pega conteudo e converte para utf-8
let bancoDados = JSON.parse(bancoDados);

bancoDados.pets.push({
    "nome": "Pedrita",
    "tipo": "Cachorro",
    "idade": 10,
    "raca": "Pastor alemão",
    "peso": 18,
    "tutor": "João",
    "contato": "(11) 98899-4345",
    "vacinado": true,
    "servicos": []
});

let petsAtualizado = JSON.stringify(bancoDados);
fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');