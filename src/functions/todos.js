import { baseApi } from "./base";

export function getTodos(options) {
    return baseApi.get("todos", options).then(res => res.data);
}

export function getUserTodos(userId, options) {
    return baseApi.get(`todos?userId=${userId}`, options).then(res => res.data);
}

