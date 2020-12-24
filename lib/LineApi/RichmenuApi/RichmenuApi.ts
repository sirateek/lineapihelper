import {
  LineApiCredential,
  RequestHeader,
} from "../../LineApiCredential/LineApiCredential";
import { LineApi, RequestMethod } from "../LineApi";

export class RichmenuApi extends LineApi {
  constructor(ApiCredential: LineApiCredential) {
    super(ApiCredential);
  }

  /**
   *
   * @param richMenuConfig The Richmenu Config Object Payload. Can be generated from `LINE Bot Designer`. More info https://developers.line.biz/en/services/bot-designer/
   * @param Header Optional. In case that you want to specified your own request header
   * Call create new richmenu API
   * More info https://developers.line.biz/en/reference/messaging-api/#create-rich-menu
   */
  createRichmenu(richMenuConfig: Object, Header?: RequestHeader | undefined) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/richmenu",
      method: RequestMethod.POST,
      header: Header,
      body: richMenuConfig,
    });
  }
}
