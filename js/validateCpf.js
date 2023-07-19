export default function isValidCpf(field) {
    const cpf = field.value.replace(/\.|-/g, "");

    if(repeatedNumbers(cpf)) {
        console.log("CPF inválido");
        return false;
    }
}

function repeatedNumbers(cpf) {
    const repeated = /0{11}|1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}/.test(cpf);
    // esse método retorna true se a string tiver 11 ou mais caracteres repetidos


    return repeated;
}