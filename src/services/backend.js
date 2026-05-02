// src/services/backend.js

const API_URL = process.env.REACT_APP_API_BASE || 'http://localhost:10000/api';

export async function askFruitGuru(prompt) {
  const res = await fetch(`${API_URL}/fruitguru`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) {
    throw new Error('Error en la API');
  }

  const data = await res.json();

  return data.result; // 👈 IMPORTANTE
}
