tbody = document.querySelector('tbody');

transactions = new Array();

function clearFields() {
    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
}

document.querySelector('.form').addEventListener('submit', function (event) {

    event.preventDefault();

    transaction = new Negociacao(
        new Date(document.querySelector('#data').value),
        document.querySelector('#quantidade').value,
        document.querySelector('#valor').value);

    transactions.push(transaction);

    tbody.appendChild(transaction.tr);

    clearFields();
});