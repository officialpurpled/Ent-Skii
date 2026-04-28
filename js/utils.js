// AIRTIME
await apiRequest("/user/airtime", "POST", {
  network,
  phone,
  amount,
  password
});

// DATA
await apiRequest("/user/data", "POST", {
  network,
  phone,
  plan,
  amount,
  password
});