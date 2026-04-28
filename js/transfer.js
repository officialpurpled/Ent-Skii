// STEP 1: VERIFY ACCOUNT
async function verifyAccount(accountNumber){
  const res = await apiRequest("/user/get-receiverName", "POST", {
    accountNumber
  });

  document.getElementById("receiverName").innerText = res.name;
}

// FINAL STEP: TRANSFER
async function sendMoney(data){
  const res = await apiRequest("/user/transfer", "POST", data);

  if(res.success){
    alert("Transfer Successful");
    window.location.href = "dashboard.html";
  } else {
    alert(res.message);
  }
}