import isValidCpf from "/js/validateCpf.js";
import isValidAge from "/js/validateAge.js";
const formFields = document.querySelectorAll("[required]");

formFields.forEach((field) => {
    field.addEventListener("blur", () => verifyField(field));
    field.addEventListener("invalid", e => e.preventDefault());
    // essa linha evita a msg padrão do html em erro de preenchimento do form
})

const errorsTypes = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const messages = {
    name: {
        valueMissing: "O campo nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo CPF não tem caractéres suficientes."
    },
    birthday: {
        valueMissing: 'O campo data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    terms: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verifyField(field) {
    let message = "";
    field.setCustomValidity('');
    if (field.name == "cpf" && field.value.length >= 11) {
        isValidCpf(field);
    }
    
    if (field.name == "birthday" && field.value != "") {
        isValidAge(field);
    }

    console.log(field.validity);

    errorsTypes.forEach(error => {
        if (field.validity[error]) {
            message = messages[field.name][error];
        }
    })

    const msgErro = field.parentNode.querySelector('.msg-erro');
    const inputValidator = field.checkValidity();

    if (!inputValidator) {
        msgErro.textContent = message;
    } else {
        msgErro.textContent = "";
    }

}