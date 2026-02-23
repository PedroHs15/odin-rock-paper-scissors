const maoUm = 'Pedra';
const maoDois = 'Papel';
const maoTres = 'Tesoura';

// function capitalize(palavra) {
//     palavra = palavra.toLowerCase();
//     return palavra.charAt(0).toUpperCase() + palavra.slice(1);
// }

function getComputerChoice(escolha) {
    escolha = Math.floor(Math.random() * 3);
    if (escolha === 0) {
        return escolha = maoUm;
    } 
    else if (escolha === 1) {
        return escolha = maoDois;
    } 
    else {
        return escolha = maoTres;
    }
}

function getHumanChoice(input) {
    input = prompt('Escolha uma opção entre: Pedra, Papel e Tesoura');
    if (input === 'pedra' || input === 'Pedra') {
        return maoUm;
    } 
    else if (input === 'papel' || input === 'Papel') {
        return maoDois;
    } 
    else if (input === 'tesoura' || input === 'Tesoura'){
        return maoTres;
    }
    else {
        return 'Digite uma opção válida por favor'
    }
}
