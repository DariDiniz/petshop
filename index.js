const nomePetshop = "PETSHOP AVANADE"

let pets = [{
    nome: "Lady Juju",
    tipo: "cachorro",
    idade: 0.3,
    raca: "SRD",
    peso: 3,
    tutor: "Dari",
    contato: "(81) 98859-5324",
    vacinado: true,
    servicos: ["banho", "tosa"]
},
{
        nome: "Snoopy",
        tipo: "cachorro",
        idade: 13,
        raca: "Beagle",
        peso: 3,
        tutor: "Charlie Brown",
        contato: "(11) 98374-9573",
        vacinado: false,
        servicos: ["banho"]
},
{
    nome: "Salem",
    tipo: "gato",
    idade: 100,
    raca: "SRD",
    peso: 3,
    tutor: "Sabrina",
    contato: "(21) 99573-9473",
    vacinado: false,
    servicos: ["banho"]
}
];

// console.log(pets);

const listarPets = () => {
    for(let pet of pets){
        //console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca} `); //Usei crase
        console.log(`${pet.nome}`); //Usei crase
    }
}

const vacinarPet = (animal) => {
    let tamanhoDaLista = pets.length;
    let i = 1;

    for(let pet of pets){

            if (animal == pet.nome){
                if (pet.vacinado == true){
                    console.log(`${pet.nome} não precisa ser vacinado(a) `);
                    break;
                } else {
                    pet.vacinado = true;
                    console.log(`Agora ${pet.nome} está vacinado ;D`);
                    break;
                }
        } else {
            if (tamanhoDaLista == 1){
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

const darBanhoPet = (){}
const tosarPetPet = (){}
const apararUnhasPetPet = (){}
//listarPets();
//vacinarPet("Snooy");
//campanhaVacina();
//adicionarPet("Scooby", "cachorro", 12, "SRD", 25, "Salsicha", "22", true, "banho");
//listarPets();