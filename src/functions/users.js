import axios from "axios";

export function getUsers(options) {
    return axios.get("http://127.0.0.1:3000/users", options).then(res => res.data);
}