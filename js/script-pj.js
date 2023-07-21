import isValidCnpj from "/js/validateCnpj.js";
const formFields = document.querySelectorAll("[required]");

formFields.forEach((field) => {
    field.addEventListener("blur", () => verifyField(field));
    field.addEventListener("invalid", e => e.preventDefault());
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
    cnpj: {
        valueMissing: 'O campo CNPJ não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CNPJ válido.",
        customError: "O CNPJ digitado é inválido.",
        tooShort: "O campo CNPJ não tem caracteres suficientes."
    },
    terms: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verifyField(field) {
    let message = "";
    field.setCustomValidity('');
    if (field.name == "cnpj" && field.value.length >= 14) {
        isValidCnpj(field);
    }

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