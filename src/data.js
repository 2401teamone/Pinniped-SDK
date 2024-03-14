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

  createOne(tableId, data) {
    return this.sendRequest("POST", `${Data.baseUrl}/${tableId}/rows`, data);
  }

  updateOne(tableId, rowId, data) {
    return this.sendRequest(
      "PATCH",
      `${Data.baseUrl}/${tableId}/rows/${rowId}`,
      data
    );
  }
}
