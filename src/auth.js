/**
 * A class for managing user authentication
 */
export default class Auth {
  static PATH = "/api/auth";

  /**
   * @param {function} sendRequest - A function for sending requests to the server
   * @property {string} url - The base URL concatenated with the authentication path
   * @property {function} sendRequest - A function for sending requests to the server
   */
  constructor({ url, sendRequest, axios }) {
    this.url = `${url}${Auth.PATH}`;
    this.sendRequest = sendRequest;
    this.axios = axios;
  }

  /**
   * Retrieves the current user session
   * @returns {Promise} - A promise that resolves with the user session
   */
  session() {
    return this.sendRequest("GET", "/");
  }

  /**
   * Registers a new user
   * @param {string} username - The username of the new user
   * @param {string} password - The password of the new user
   * @returns {Promise} - A promise that resolves with the response from the server
   */
  register(username, password) {
    return this.sendRequest("POST", "/register", {
      username,
      password,
    });
  }

  /**
   * Logs in a user
   * @param {string} username - The username of the user
   * @param {string} password - The password of the user
   * @returns {Promise} - A promise that resolves with the response from the server
   */
  login(username, password) {
    return this.sendRequest("POST", "/login", {
      username,
      password,
    });
  }

  /**
   * Logs out the current user
   * @returns {Promise} - A promise that resolves with the response from the server
   * @memberof Auth
   */
  logout() {
    return this.sendRequest("POST", "/logout");
  }
}
