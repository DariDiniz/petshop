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
        vacinado: true,
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
    vacinado: true,
    servicos: ["banho"]
}
];

// console.log(pets);

const listarPets = () => {
    for(let pet of pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca} `); //Usei crase
    }
}

listarPets();