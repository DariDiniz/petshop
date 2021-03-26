const moment = require('moment');
let dadospet = require('./dadosPets.json');

const nomePetshop = "PETSHOP AVANADE"



const listarPets = () => {
    for(let pet of pets){
        //console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca} `); //Usei crase
        console.log(`${pet.nome}`); //Usei crase
    }
}

const vacinarPet = (animal) => {
    let tamanhoDaLista = pets.length;
    let i = 1;
    console.log(1);

    for(let pet of pets){

            if (animal == pet.nome){
                if (pet.vacinado == true){
                    console.log(2);
                    console.log(`${pet.nome} não precisa ser vacinado(a) `);
                    break;
                    console.log(2.1);
                } else {
                    pet.vacinado = true;
                    console.log(`Agora ${pet.nome} está vacinado ;D`);
                    break;
                    console.log(2.2);
                }
        } else {
            console.log(3);
            if (tamanhoDaLista == i){
                console.log(3.1);
                console.log("Esse pet ainda não estar registrado");
                break;             
            } 
        }
        i++;
    }

 
}

const campanhaVacina = () => {
    let i =0;
    for(let pet of pets){

                if (pet.vacinado == false){
                    pet.vacinado = true;
                    
                    i++;
                }
        
    }
    console.log(`${i} pets foram vacinados nessa linda campanha ;D`);

}

const adicionarPet = (nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos) => {
    pets.push({
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        peso: peso,
        tutor: tutor,
        contato: contato,
        vacinado: vacinado,
        servicos: servicos
    })
    
}

const darBanhoPet = (animal) => {
    for(let pet of pets){
        if (animal == pet.nome){
            pet.servicos.push(
                `banho: ${moment().format('DD-MM-YYYY')}`);
            console.log(`${animal} está de banho tomado!`);
            }
}
}

const tosarPet = (animal) => {
    for(let pet of pets){
        if (animal == pet.nome){
            pet.servicos.push(
                `tosa: ${moment().format('DD-MM-YYYY')}`);
            console.log(`${animal} está com cabelinho na régua!`);
            }
}
}

const apararUnhasPet = (animal) => {
    for(let pet of pets){
        if (animal == pet.nome){
            pet.servicos.push(
                `corte de unhas em data: ${moment().format('DD-MM-YYYY')}`);
            console.log(`${animal} está de unhas aparadas!`);
            }
}
}

//listarPets();
//vacinarPet("Snooy");
//campanhaVacina();
//adicionarPet("Scooby", "cachorro", 12, "SRD", 25, "Salsicha", "22", true, "banho");
//darBanhoPet ("Snoopy");
//tosarPet ("Snoopy");
//apararUnhasPet("Snoopy");
