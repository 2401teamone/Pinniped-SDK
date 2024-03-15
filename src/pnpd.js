import axios from "axios";
import Auth from "./auth";
import Data from "./data";

export default class pnpd {
  constructor(url, apiKey) {
    this.url = url;
    this.apiKey = apiKey;
    this.sendRequest = this.initSendRequest();
    this.auth = new Auth(this.sendRequest);
    this.data = new Data(this.sendRequest);

    console.log("Pinniped SDK initialized");
  }

  initSendRequest() {
    return async (method, path, body, queryString) => {
      const request = {
        method,
        url: `${this.url}/api${path}`,
        headers: {
          "X-API-KEY": this.apiKey,
        },
        params: queryString,
        withCredentials: true, // Include cookies in requests
      };
      if (body) {
        request.data = body;
      }

      const response = await axios(request);
      console.log(response);
      return response;
    };
  }

  logDetails() {
    console.log(`URL: ${this.url}`);
    console.log(`API Key: ${this.apiKey}`);
  }
}
