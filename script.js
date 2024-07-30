document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('transaction-form');
    const transactionList = document.getElementById('transaction-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const type = document.getElementById('type').value;
        const name = document.getElementById('name').value;
        const amount = document.getElementById('amount').value;

        if (type && name && amount) {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${type}</td>
                <td>${name}</td>
                <td>$${amount}</td>
                <td><button class="delete-btn">Delete</button></td>
            `;

            transactionList.appendChild(row);
            form.reset();
            row.querySelector('.delete-btn').addEventListener('click', () => {
                row.remove();
            });
        }
    });
});
