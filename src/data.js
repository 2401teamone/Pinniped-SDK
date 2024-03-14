export default class Data {
  static baseUrl = "/tables";

  constructor(sendRequest) {
    this.sendRequest = sendRequest;
  }

  getAll(tableId, pageNo, limit) {
    return this.sendRequest("GET", `${Data.baseUrl}/${tableId}/rows`);
  }

  getOne(tableId, rowId) {
    return this.sendRequest("GET", `${Data.baseUrl}/${tableId}/rows/${rowId}`);
  }
}
