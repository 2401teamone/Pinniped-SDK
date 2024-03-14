export default class Data {
  static baseUrl = "/tables";

  constructor(sendRequest) {
    this.sendRequest = sendRequest;
  }

  async getAll(tableId, queryString) {
    return await this.sendRequest(
      "GET",
      `${Data.baseUrl}/${tableId}/rows`,
      queryString
    );
  }
}
