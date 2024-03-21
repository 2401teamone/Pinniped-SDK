/**
 * A class for managing user authentication
 */
export default class Auth {
  static PATH = "/api/auth";

  /**
   * @param {object} - Instance of the Pinniped SDK
   * @property {string} url - The base URL concatenated with the Auth PATH
   * @property {function} sendRequest - A function for sending requests to the server
   * @property {AxiosInstance} axiosClient - An instance of the Axios client
   */
  constructor({ url, sendRequest, axiosClient }) {
    this.url = `${url}${Auth.PATH}`;
    this.sendRequest = sendRequest;
    this.axiosClient = axiosClient;
  }

  /**
   * Retrieves the current user session
   * @returns {Promise} - A promise that resolves with the user session
   */
  getUser() {
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
