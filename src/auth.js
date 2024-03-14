export default class Auth {
  static baseUrl = "/auth";

  constructor(sendRequest) {
    this.sendRequest = sendRequest;
  }

  async login(username, password) {
    return await this.sendRequest("POST", `${Auth.baseUrl}/login`, null, {
      username,
      password,
    });
  }
}
