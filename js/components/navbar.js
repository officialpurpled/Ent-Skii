function renderNav(){
  document.body.insertAdjacentHTML("beforeend", `
    <div class="nav">
      <a href="dashboard.html">Home</a>
      <a href="transactions.html">Tx</a>
      <a href="transfer.html">Actions</a>
      <a href="profile.html">Profile</a>
    </div>
  `);
}