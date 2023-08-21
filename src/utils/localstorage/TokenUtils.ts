export function setToken(value: string) {
  localStorage.setItem("token", value);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function removeLocalSToken() {
  return localStorage.removeItem("token");
}