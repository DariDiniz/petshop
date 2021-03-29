const moment = require('moment');
const fs = require('fs');
let bancoDados = fs.readFileSync('./bancoDados.json');
//bancoDados = JSON.parse(bancoDados);

bancoDados = JSON.parse(bancoDados);

const nomePetshop = "PETSHOP AVANADE";

const atualizarBanco = () => {
    //conversão de objeto javascritp para JSON
    let petsAtualizado = JSON.stringify(bancoDados);
    //atualização do arquivo bancoDados.json
    fs.writeFileSync('bancoDados.json', petsAtualizado, 'utf-8');
    }

    const listarPets = () => {
        for (let pet of bancoDados.pets) {
            //template string
            console.log(`${pet.nome}, ${pet.idade} anos, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'}`);
    
            for (const servico of pet.servicos) {
                console.log(`${servico.data} - ${servico.nome}`);
            }
        }
    }

const vacinarPet = pet => {

    const vacinarPet = pet => {
        if (!pet.vacinado) {
            pet.vacinado = true;
            atualizarBanco();
            console.log(`${pet.nome} foi vacinado com sucesso! ;D`);
        } else {
            console.log(`Ops, ${pet.nome} já está vacinado!`);
        }
    }
}

 

const campanhaVacina = () => {
    var totalPets =0;
    console.log(`Campanha de Vacinação de ${moment().format('YYYY')}`);
    
    for(let pet of bancoDados.pets){

                if (pet.vacinado == false){
                    totalPets++;
                    vacinarPet(pet);
                }
        
    }
    console.log(`${totalPets} pets foram vacinados nessa linda campanha ;D`);

}

const adicionarPet = novoPet => {
    bancoDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso! \o/`);
}

const darBanhoPet = pet => {
    pet.servicos.push({
        nome: 'banho',
        data: moment().format('DD-MM-YYYY'),
    });
    atualizarBanco();
    console.log(`${pet.nome} está de banho tomado!`);
}

const tosarPet = pet => {
    pet.servicos.push({
        nome: 'tosa',
        data: moment().format('DD-MM-YYYY'),
    });
    atualizarBanco();
    console.log(`${pet.nome} está com cabelinho na régua!`);
}

const apararUnhasPet= pet => {
        
    pet.servicos.push({
        'nome':'corte de unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas cortadas!`);
} 

const atenderCliente = (pet, servicos) => {
    console.log(`Olá, ${pet.nome} e ${pet.tutor} <3`);
    servicos(pet);
    console.log('Tchau, até mais e volte sempre ;D !');
}
    



// const antenderCliente = (pet, servico) => {
//     console.log(`Olá, ${pet.nome}`);
//     switch(servico.toLowerCase()){
//         case 'banho':
//             darBanhoPet(pet);
//             console.log(`serviço concluido!!!`);
//             break;

//         case 'tosar':
//             tosarPet(pet);
//             console.log(`serviço concluido!!!`);
//             break;

//         case 'unhas':
//             apararUnhasPet(pet);
//             console.log(`serviço concluido!!!`);
//             break;

//         default:
//             console.log("só vim dar uma olhadinha");
//     }

//     console.log(`Tchau ${pet.nome}, até logo`);
    
// }

//listarPets();
//vacinarPet("Snoopy");
//campanhaVacina();

// adicionarPet({
//     nome: "Scooby",
//     tipo: "cachorro",
//     idade: 12,
//     raca: "Dogue alemão",
//     peso: 25,
//     tutor: "Salsicha",
//     contato: "(22) 98303-2346",
//     vacinado: true, 
//     servicos: []});

//darBanhoPet ("Snoopy");
//tosarPet ("Snoopy");
//apararUnhasPet("Snoopy");
//antenderCliente(dadosPet.JSON.pets[0]);
//AtenderCliente("Snoopy", "banho");
atenderCliente(bancoDados.pets[0], tosarPet);