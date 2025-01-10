import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

// Log para verificar a URL da API
console.log("Base URL da API:", process.env.NEXT_PUBLIC_API);
