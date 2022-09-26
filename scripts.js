const Modal = {
    open() {
        // Abrir modal
        // Adicionar a class active no modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')

    },
    close() {
        // Fechar modal
        // Remover a class active no modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2022',
    },
    {
        id: 2,
        description: 'Website',
        amount: 50000,
        date: '23/01/2022',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2022',
    },
]


// preciso somar as entradas
// somar as saídas
// remover das entradas o valor das saídas
// assim, terei o total

const Transaction = {
    incomes(){
        // somar as entradas
    },
    expenses(){
        // somar as saídas
    },
    total(){
        // total = (entradas - saídas)
    }
}

// substituir os dados do HTML com os dados do JS

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),


    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
        DOM.transactionsContainer.appendChild(tr)
        
    },

    innerHTMLTransaction(transaction){
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        ` 
        return html

    }
}

DOM.addTransaction(transactions[0])
