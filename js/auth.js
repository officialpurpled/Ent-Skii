// SIGNUP STEP 2 SUBMIT
async function createAccount(data) {
  const res = await apiRequest("/auth/create-account", "POST", data);

  if(res.success){
    alert(`Account Created: ${res.accountNumber}`);
    window.location.href = "index.html";
  } else {
    alert(res.message);
  }
}

// LOGIN
async function login(accountNumber, password) {
  const res = await apiRequest("/auth/login", "POST", {
    accountNumber,
    password
  });

  if(res.token){
    localStorage.setItem("token", res.token);
    window.location.href = "dashboard.html";
  } else {
    alert(res.message);
  }
}