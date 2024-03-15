export default class Auth {
  static baseUrl = "/auth";

  constructor(sendRequest) {
    this.sendRequest = sendRequest;
  }

  session() {
    return this.sendRequest("GET", `${Auth.baseUrl}/`);
  }

  register(username, password) {
    return this.sendRequest("POST", `${Auth.baseUrl}/register`, {
      username,
      password,
    });
  }

  login(username, password) {
    return this.sendRequest("POST", `${Auth.baseUrl}/login`, {
      username,
      password,
    });
  }

  logout() {
    return this.sendRequest("POST", `${Auth.baseUrl}/logout`, null, null);
  }
}
