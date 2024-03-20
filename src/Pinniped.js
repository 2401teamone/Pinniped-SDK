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
   * @property {AxiosInstance} axiosClient - An instance of the Axios client
   * @property {Data} db - An instance of the Data class for handling database requests
   * @property {function} sendRequest - A function for sending requests to the server
   */
  constructor(baseURL) {
    this.url = baseURL;
    this.axiosClient = axios.create({
      withCredentials: true,
      headers: { Accept: "application/json" },
    });
    this.auth = new Auth(this);
    this.db = new Data(this);
    console.log("Pinniped SDK initialized");
  }

  /**
   * Sends a request to the Pinniped server
   * @param {string} method - The HTTP method of the request
   * @param {string} path - The path of the request
   * @param {object} [body] - The body of the request - optional
   * @param {object} [queryObj] - An object with key-value pairs for the query string - optional
   * @returns {Promise} - A promise that resolves with the response from the server
   */
  sendRequest(method, path, body, queryObj) {
    const request = {
      method,
      url: `${this.url}${path}`,
    };

    if (body) request.data = body;
    if (queryObj) request.params = new URLSearchParams(queryObj);
    if (["POST", "PATCH", "PUT"].includes(method)) {
      request.headers = {
        "Content-Type": "application/json",
      };
    }

    return this.axiosClient(request);
  }
}

export default Pinniped.initialize;
