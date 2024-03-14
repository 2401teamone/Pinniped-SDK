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
    return async (method, path, queryString, body) => {
      const request = {
        method,
        url: `${this.url}/api${path}`,
        headers: {
          "X-API-KEY": this.apiKey,
        },
        params: queryString,
      };
      if (body) {
        request.data = body;
      }

      return await axios(request);
    };
  }

  logDetails() {
    console.log(`URL: ${this.url}`);
    console.log(`API Key: ${this.apiKey}`);
  }
}
