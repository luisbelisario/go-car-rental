export default function isValidCpf(field) {
    const cpf = field.value.replace(/\.|-/g, "");

    if(repeatedNumbers(cpf) || invalidFirstDigit(cpf) || invalidSecondDigit(cpf)) {
        field.setCustomValidity('CPF inválido');
    }
}

function repeatedNumbers(cpf) {
    const repeated = /0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}/.test(cpf);
    // esse método retorna true se a string tiver 11 ou mais caracteres repetidos


    return repeated;
}

function invalidFirstDigit(cpf) {
    let soma = 0;
    let mult = 10;

    for(let i = 0; i < 9; i++) {
        soma += cpf[i] * mult;
        mult--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[9];
}

function invalidSecondDigit(cpf) {
    let soma = 0;
    let mult = 11;

    for(let i = 0; i < 10; i++) {
        soma += cpf[i] * mult;
        mult--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];
}