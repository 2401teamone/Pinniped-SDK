import axios from "axios";
import Auth from "./auth.js";
import Data from "./data.js";

/**
 * The main class for the Pinniped SDK
 */
class Pinniped {
  /**
   * Initializes the Pinniped SDK with the provided base URL
   * @param {string} baseURL - The base URL of the Pinniped server
   * @returns {Pinniped} - An instance of the Pinniped SDK
   */
  static initialize(baseURL) {
    return new Pinniped(baseURL);
  }

  /**
   * @param {string} baseURL - The base URL of the Pinniped server
   * @property {string} url - The base URL of the Pinniped server
   * @property {Auth} auth - An instance of the Auth class for handling authentication requests
   * @property {Data} db - An instance of the Data class for handling database requests
   * @property {function} sendRequest - A function for sending requests to the server
   */
  constructor(baseURL) {
    this.url = baseURL;
    this.axios = axios.create({ withCredentials: true });
    this.auth = new Auth(this);
    this.db = new Data(this);
    console.log("Pinniped SDK initialized");
  }

  /**
   * Sends a request to the Pinniped server
   * @param {string} method - The HTTP method of the request
   * @param {string} path - The path of the request
   * @param {object} body - The body of the request
   * @param {object} queryString - The query string of the request
   * @returns {Promise} - A promise that resolves with the response from the server
   */
  sendRequest(method, path, body, queryString) {
    const request = {
      method,
      url: `${this.url}${path}`,
      params: queryString,
    };

    if (body) request.data = body;

    if (["POST", "PATCH", "PUT"].includes(method)) {
      request.headers = {
        "Content-Type": "application/json",
      };
    }

    return this.axios(request);
  }
}

export default Pinniped.initialize;
