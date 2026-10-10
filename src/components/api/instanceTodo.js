import axios from "axios";

const ApiTodo = axios.create({
  baseURL: import.meta.env.VITE_API_TODO,
  timeout: 5000,
});

export {ApiTodo}
