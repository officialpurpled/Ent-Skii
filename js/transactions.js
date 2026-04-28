// entity-bank/
// │
// ├── index.html (login)
// ├── signup.html
// ├── dashboard.html
// ├── transactions.html
// ├── transfer.html
// ├── airtime.html
// ├── data.html
// ├── deposit.html
// ├── profile.html
// ├── edit-profile.html
// │
// ├── css/
// │   ├── styles.css
// │
// ├── js/
// │   ├── api.js
// │   ├── auth.js
// │   ├── dashboard.js
// │   ├── transfer.js
// │   ├── transactions.js
// │   ├── utils.js
// │
// └── components/
//     ├── navbar.js
//     ├── modal.js
//     ├── card.js

async function loadTransactions(){
  const tx = await apiRequest("/user/transactions");

  const list = document.getElementById("txList");

  list.innerHTML = tx.map(t => `
    <div class="card" onclick="viewTx('${t.id}')">
      <p>${t.type} - ₦${t.amount}</p>
    </div>
  `).join("");
}