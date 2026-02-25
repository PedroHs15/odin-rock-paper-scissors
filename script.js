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
        console.log('Empate');
        return `Você ${humanScore} x ${computerScore} Computador`;
    }

    if (humanChoice === 'Pedra') {
        if (computerChoice === 'Tesoura') {
            console.log('Vitória!');
            ++humanScore;
            return `Você ${humanScore} x ${computerScore} Computador`;
        }
        else {
            console.log('Derrota');
            ++computerScore;
            return `Você ${humanScore} x ${computerScore} Computador`;
        }
    }

    if (humanChoice === 'Papel') {
        if (computerChoice === 'Pedra') {
            console.log('Vitória!');
            ++humanScore;
            return `Você ${humanScore} x ${computerScore} Computador`;
        }
        else {
            console.log('Derrota');
            ++computerScore;
            return `Você ${humanScore} x ${computerScore} Computador`;
        }
    }

    if (humanChoice === 'Tesoura') {
        if (computerChoice === 'Papel') {
            console.log('Vitória!');
            ++humanScore;            
            return `Você ${humanScore} x ${computerScore} Computador`;
        }
        else {
            console.log('Derrota');
            ++computerScore;
            return `
            Você ${humanScore} x ${computerScore} Computador`;
        }
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    if (humanScore === computerScore) {
        return 'Resultado: Empate'
    }
    else if (humanScore > computerScore) {
        return 'Resultado: Parabéns! você ganhou uma MD5'
    }
    else {
        return 'Resultado: Derrota'
    }
}