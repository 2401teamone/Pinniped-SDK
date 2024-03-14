export default class Auth {
  static baseUrl = "/auth";

  constructor(sendRequest) {
    this.sendRequest = sendRequest;
  }

  register(username, password) {
    return this.sendRequest("POST", `${Auth.baseUrl}/register`, null, {
      username,
      password,
    });
  }

  login(username, password) {
    return this.sendRequest("POST", `${Auth.baseUrl}/login`, null, {
      username,
      password,
    });
  }

  logout() {
    return this.sendRequest("POST", `${Auth.baseUrl}/logout`, null, null);
  }
}
