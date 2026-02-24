const maoUm = 'Pedra';
const maoDois = 'Papel';
const maoTres = 'Tesoura';

let humanScore = 0;
let computerScore = 0;

function capitalize(palavra) {
    palavra = palavra.toLowerCase();
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
}

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
    input = capitalize(input);
    if (input === 'Pedra') {
        return maoUm;
    } 
    else if (input === 'Papel') {
        return maoDois;
    } 
    else if (input === 'Tesoura'){
        return maoTres;
    }
    else {
        return 'Digite uma opção válida por favor';
    }
}


function playRound(humanChoice, computerChoice) {
    console.log(humanChoice = getHumanChoice());
    console.log(computerChoice = getComputerChoice());
    if (humanChoice === computerChoice) {
        console.log('Resultado: Empate');
        return console.log(`Placar: Você ${humanScore} x ${computerScore} Computador`);
    }

    if (humanChoice === 'Pedra') {
        if (computerChoice === 'Tesoura') {
            console.log('Resultado: Você ganhou!');
            return console.log(`Placar: Você ${(++humanScore)} x ${computerScore} Computador`);
        }
        else {
            console.log('Resultado: Você perdeu, tente novamente.');
            return console.log(`Placar: Você ${humanScore} x ${(++computerScore)} Computador`);
        }
    }

    if (humanChoice === 'Papel') {
        if (computerChoice === 'Pedra') {
            console.log('Resultado: Você ganhou!');
            return console.log(`Placar: Você ${(++humanScore)} x ${computerScore} Computador`);
        }
        else {
            console.log('Resultado: Você perdeu, tente novamente.');
            return console.log(`Placar: Você ${humanScore} x ${(++computerScore)} Computador`);
        }
    }

    if (humanChoice === 'Tesoura') {
        if (computerChoice === 'Papel') {
            console.log('Resultado: Você ganhou!');            
            return console.log(`Placar: Você ${(++humanScore)} x ${computerScore} Computador`);
        }
        else {
            console.log('Resultado: Você perdeu, tente novamente.');
            return console.log(`Placar: Você ${humanScore} x ${(++computerScore)} Computador`);
        }
    }
}
