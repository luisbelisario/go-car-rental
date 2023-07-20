import isValidCpf from "/js/validateCpf.js";
import isValidAge from "/js/validateAge.js";
const formFields = document.querySelectorAll("[required]");

formFields.forEach((field) => {
    field.addEventListener("blur", () => verifyField(field));
})

function verifyField(field) {
    if (field.name == "cpf" && field.value.length >= 11) {
        isValidCpf(field);
    }
    
    if (field.name === "data-nasc" && field.value != "") {
        isValidAge(field);
    }
}