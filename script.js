const PEDRA = 'Pedra';
const PAPEL = 'Papel';
const TESOURA = 'Tesoura';

let humanScore = 0;
let computerScore = 0;

function capitalize(palavra) {
    if (!palavra){
        return null;
    }
    const palavraMinuscula = palavra.toLowerCase();
    return palavraMinuscula.charAt(0).toUpperCase() + palavraMinuscula.slice(1);
}

function getComputerChoice() {
    const escolha = Math.floor(Math.random() * 3);
    if (escolha === 0) {
        return PEDRA;
    } 
    else if (escolha === 1) {
        return PAPEL;
    } 
    else {
        return TESOURA;
    }
}

function getHumanChoice() {
    let input = prompt('Escolha uma opção entre: Pedra, Papel e Tesoura');
    input = capitalize(input);
    if (input === 'Pedra') {
        return PEDRA;
    } 
    else if (input === 'Papel') {
        return PAPEL;
    } 
    else if (input === 'Tesoura'){
        return TESOURA;
    }
    else {
        return null;
    }
}

// execute: playRound(getHumanChoice(), getComputerChoice())
function playRound(humanChoice, computerChoice) { 
    if (humanChoice === null) {
        return 'Digite uma opção válida por favor';
    }
    console.log(`${humanChoice} x ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log('Resultado: Empate');
        return `Placar: Você ${humanScore} x ${computerScore} Computador`;
    }

    if (humanChoice === 'Pedra') {
        if (computerChoice === 'Tesoura') {
            console.log('Resultado: Você ganhou!');
            ++humanScore;
            return `Placar: Você ${humanScore} x ${computerScore} Computador`;
        }
        else {
            console.log('Resultado: Você perdeu, tente novamente.');
            ++computerScore;
            return `Placar: Você ${humanScore} x ${computerScore} Computador`;
        }
    }

    if (humanChoice === 'Papel') {
        if (computerChoice === 'Pedra') {
            console.log('Resultado: Você ganhou!');
            ++humanScore;
            return `Placar: Você ${humanScore} x ${computerScore} Computador`;
        }
        else {
            console.log('Resultado: Você perdeu, tente novamente.');
            ++computerScore;
            return `Placar: Você ${humanScore} x ${computerScore} Computador`;
        }
    }

    if (humanChoice === 'Tesoura') {
        if (computerChoice === 'Papel') {
            console.log('Resultado: Você ganhou!');
            ++humanScore;            
            return `Placar: Você ${humanScore} x ${computerScore} Computador`;
        }
        else {
            console.log('Resultado: Você perdeu, tente novamente.');
            ++computerScore;
            return `Placar: Você ${humanScore} x ${computerScore} Computador`;
        }
    }
}
