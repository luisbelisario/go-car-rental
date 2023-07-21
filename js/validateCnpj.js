export default function isValidCnpj(field) {
    let cnpj = field.value;
    cnpj = cnpj.replace("-", "");
    cnpj = cnpj.replace("/", "");
    cnpj = cnpj.replace(".", "");
    cnpj = cnpj.replace(".", "");

    if(repeatedNumbers(cnpj) || invalidFirstDigit(cnpj) || invalidSecondDigit(cnpj)) {
        field.setCustomValidity('CNPJ inválido');
    }
}

function repeatedNumbers(cnpj) {
    const repeated = /0{14}|1{14}|2{14}|3{14}|4{14}|5{14}|6{14}|7{14}|8{14}|9{14}/.test(cnpj);
    // esse método retorna true se a string tiver 11 ou mais caracteres repetidos

    return repeated;
}

function invalidFirstDigit(cnpj) {
    let soma1 = 0;
    let soma2 = 0;
    let mult1 = 5;
    let mult2 = 9;
    
    const cnpjFirstPart = cnpj.substring(0, 4);
    const cnpjSecondPart = cnpj.substring(4, 12);
    
    for(let i = 0; i < 4; i++) {
        soma1 += cnpjFirstPart[i] * mult1;
        mult1--;
    }

    for(let i = 0; i < 8; i++) {
        soma2 += cnpjSecondPart[i] * mult2;
        mult2--;
    }

    let verificador = (soma1 + soma2) % 11;
    if(verificador < 2) {
        verificador = 0;
    } else {
        verificador = 11 - verificador;
    }

    return verificador != cnpj[12];

}

function invalidSecondDigit(cnpj) {
    let soma1 = 0;
    let soma2 = 0;
    let mult1 = 6;
    let mult2 = 9;
    
    const cnpjFirstPart = cnpj.substring(0, 5);
    const cnpjSecondPart = cnpj.substring(5, 13);

    for(let i = 0; i < 5; i++) {
        soma1 += cnpjFirstPart[i] * mult1;
        mult1--;
    }

    for(let i = 0; i < 8; i++) {
        soma2 += cnpjSecondPart[i] * mult2;
        mult2--;
    }

    let verificador = (soma1 + soma2) % 11;
    if(verificador < 2) {
        verificador = 0;
    } else {
        verificador = 11 - verificador;
    }

    return verificador != cnpj[13];
}