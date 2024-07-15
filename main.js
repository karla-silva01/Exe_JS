const form = document.getElementById('form-cont');
const nome = [];
const numero = [];


let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotalNumeros();
    });

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (numero.includes(inputTelefone.value)) {
        alert(`O numero: ${inputTelefone.value} ja foi inserido!!`)
    } else {
        nome.push(inputNome.value);
        numero.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td class='td-color'>${inputTelefone.value}</td>`;
        linha += `</tr>`;


        linhas += linha;

    }

    inputNome.value = '';
    inputTelefone.value = '';

}

function totalInput() {
    return nome.length
}

function atualizaTotalNumeros() {
    const total = totalInput();
    document.getElementById('totalNumeros').innerHTML = total;
}

function atualizaTabela() {
    const corpoTable = document.querySelector('tbody');
    corpoTable.innerHTML = linhas;
}