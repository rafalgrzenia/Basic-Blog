import axios from "axios";

export function getTodos(options) {
    return axios.get("http://127.0.0.1:3000/todos", options).then(res => res.data);
}

