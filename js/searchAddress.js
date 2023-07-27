export default async function searchAddress(field) {
    const msgErro = field.parentNode.querySelector('.msg-erro');
    msgErro.textContent = '';
    try {
        var address = await fetch(`https://viacep.com.br/ws/${field.value}/json/`);
        var addressJson = await address.json();
        if (addressJson.erro) {
            msgErro = 'CEP inexistente';
            return;
        } else {
            var logradouro = document.getElementById('logradouro');
            var bairro = document.getElementById('bairro');
            var cidade = document.getElementById('cidade');
            var estado = document.getElementById('estado');

            logradouro.value = addressJson.logradouro;
            bairro.value = addressJson.bairro;
            cidade.value = addressJson.localidade;
            estado.value = addressJson.uf;

            return;
        }
    } catch (error) {
        if(field.value == "") {
            msgErro.textContent = 'O campo CEP não pode estar vazio';
        } else {
            msgErro.textContent = 'CEP inválido';
        }
    }
}