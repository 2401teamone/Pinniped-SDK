/**
 * A class for interacting with your Pinniped backend database
 */
export default class Data {
  static PATH = "/api/tables";

  /**
   * @param {string} baseUrl - The base URL of the Pinniped server
   * @param {function} sendRequest - A function for sending requests to the server
   * @property {string} url - The base URL concatenated with the data path
   * @property {function} sendRequest - A function for sending requests to the server
   * @memberof Data
   */
  constructor(baseUrl, sendRequest) {
    this.url = `${baseUrl}${Data.PATH}`;
    this.sendRequest = sendRequest;
  }

  /**
   * Retrieves all rows from a table
   * @param {string} tableId - The ID of the table
   * @param {number} pageNum - The page number of the results
   * @param {number} limit - The maximum number of results per page
   * @returns {Promise} - A promise that resolves with the response from the server
   */
  getAll(tableId, pageNum, limit) {
    return this.sendRequest("GET", `/${tableId}/rows`);
  }

  /**
   * Retrieves a single row from a table
   * @param {string} tableId - The ID of the table
   * @param {string} rowId - The ID of the row
   * @returns {Promise} - A promise that resolves with the response from the server
   */
  getOne(tableId, rowId) {
    return this.sendRequest("GET", `/${tableId}/rows/${rowId}`);
  }

  /**
   * Creates a new row in a table
   * @param {string} tableId - The ID of the table
   * @param {object} data - The data for the new row
   * @returns {Promise} - A promise that resolves with the response from the server
   */
  createOne(tableId, data) {
    return this.sendRequest("POST", `/${tableId}/rows`, data);
  }

  /**
   * Updates a row in a table
   * @param {string} tableId - The ID of the table
   * @param {string} rowId - The ID of the row
   * @param {object} data - The updated data for the row
   * @returns {Promise} - A promise that resolves with the response from the server
   */
  updateOne(tableId, rowId, data) {
    return this.sendRequest("PATCH", `/${tableId}/rows/${rowId}`, data);
  }

  /**
   * Deletes a row from a table
   * @param {string} tableId - The ID of the table
   * @param {string} rowId - The ID of the row
   * @returns {Promise} - A promise that resolves with the response from the server
   */
  deleteOne(tableId, rowId) {
    return this.sendRequest("DELETE", `/${tableId}/rows/${rowId}`);
  }
}
