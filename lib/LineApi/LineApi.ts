import { LineApiCredential } from "../LineApiCredential/LineApiCredential";
import axios from "axios";

export class LineApi {
  #Credential: LineApiCredential | null = null;
  ApiPrefix: ApiPrefixUrl = {
    DEFAULT_API_PREFIX: "api.line.me",
    DATA_API_PREFIX: "api-data.line.me",
  };
  constructor(ApiCredential: LineApiCredential | undefined) {
    this.#Credential = ApiCredential || null;
  }

  sendRequest(url: string, header: HeaderObject, body: Object) {
    if (this.#Credential == null) {
      throw new Error(
        "There is no API Credential. (You may need to call `.init()` to init API Credential)"
      );
    }
    return axios({
      url: "https://" + url,
      method: "POST",
      headers: header,
      data: JSON.stringify(body),
    });
  }
}

interface ApiPrefixUrl {
  DEFAULT_API_PREFIX: String;
  DATA_API_PREFIX: String;
}

export interface HeaderObject {
  Authorization: String;
  "Content-Type": String;
}
