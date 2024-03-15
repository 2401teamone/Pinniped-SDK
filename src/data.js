export default class Data {
  static baseUrl = "/tables";

  constructor(sendRequest) {
    this.sendRequest = sendRequest;
  }

  getAll(tableId, pageNum, limit) {
    return this.sendRequest("GET", `${Data.baseUrl}/${tableId}/rows`);
  }

  // getAllWhere(tableId, queryObj) {
  //   return this.sendRequest(
  //     "GET",
  //     `${Data.baseUrl}/${tableId}/rows`,
  //     null,
  //     queryObj
  //   );
  // }

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

  deleteOne(tableId, rowId) {
    return this.sendRequest(
      "DELETE",
      `${Data.baseUrl}/${tableId}/rows/${rowId}`
    );
  }
}
