const BASE_URL = "http://localhost:3060/api/v1";

const getToken = () => localStorage.getItem("token");

async function apiRequest(endpoint, method="GET", body=null) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    body: body ? JSON.stringify(body) : null
  });

  return res.json();
}