import { client } from "./api-client";

const localStorageKey = '__auth_provider_token__'

async function getToken() {
    return localStorage.getItem(localStorageKey)
}

function handleUserResponse({ user }) {
    localStorageKey.setItem(localStorageKey, user.token)
    return user
}

function login({ username, password }) {
    return client('login', { username, password }).then(handleUserResponse);
}

function register({ username, password }) {
    return client('register', { username, password }).then(handleUserResponse);
}

async function logout() {
    localStorage.removeItem(localStorageKey);
}

export { getToken, login, register, logout, localStorageKey };