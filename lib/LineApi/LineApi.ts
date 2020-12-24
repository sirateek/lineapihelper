import {
  LineApiCredential,
  RequestHeader,
} from "../LineApiCredential/LineApiCredential";
import axios, { AxiosResponse } from "axios";

export class LineApi {
  #Credential: LineApiCredential = new LineApiCredential({});
  #ApiPrefix: ApiPrefixUrl = {
    DEFAULT_API_PREFIX: "api.line.me",
    DATA_API_PREFIX: "api-data.line.me",
  };

  constructor(ApiCredential: LineApiCredential) {
    this.#Credential = ApiCredential;
  }

  sendRequest(config: sendRequestConfig) {
    let requestHeader: Object;
    try {
      requestHeader = this.#Credential.generate_request_header();
    } catch (e) {
      if (typeof config.header === "undefined") {
        throw e;
      }
    }
    return new Promise<ApiResponse>(async (resolve, reject) => {
      try {
        const requestResult = await axios({
          url: "https://" + config.uri,
          method: config.method,
          headers: config.header || requestHeader,
          data: JSON.stringify(config.body || {}),
        });
        resolve(
          new ApiResponse(
            requestResult.status,
            requestResult.data,
            requestResult
          )
        );
      } catch (e) {
        reject(new ApiResponse(e.response.status, e.response.data, e.response));
      }
    });
  }

  get ApiPrefix() {
    return this.#ApiPrefix;
  }
}

export class ApiResponse {
  #statusCode: number | undefined;
  #responseBody: Object | undefined;
  #rawResponse: AxiosResponse | undefined;

  constructor(
    statusCode: number,
    responseBody: Object,
    rawResponse: AxiosResponse
  ) {
    this.#statusCode = statusCode;
    this.#responseBody = responseBody;
    this.#rawResponse = rawResponse;
  }

  get statusCode() {
    return this.#statusCode;
  }

  get responseBody() {
    return this.#responseBody;
  }

  get rawResponse() {
    return this.#rawResponse;
  }
}

export enum RequestMethod {
  POST = "POST",
  GET = "GET",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface sendRequestConfig {
  uri: string;
  method: RequestMethod;
  header?: RequestHeader;
  body?: Object;
}

interface ApiPrefixUrl {
  DEFAULT_API_PREFIX: String;
  DATA_API_PREFIX: String;
}
