async function loadDashboard() {
  const profile = await apiRequest("/user/profile");
  const balance = await apiRequest("/user/balance");
  const tx = await apiRequest("/user/transactions");

  document.getElementById("name").innerText = profile.name;
  document.getElementById("balance").innerText = `₦${balance.amount}`;
  document.getElementById("account").innerText = profile.accountNumber;

  const list = document.getElementById("transactions");
  list.innerHTML = tx.slice(0,5).map(t => `
    <div class="card">
      <p>${t.type} - ₦${t.amount}</p>
    </div>
  `).join("");
}

loadDashboard();