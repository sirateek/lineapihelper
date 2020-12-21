import { LineApiCredential, RequestHeader } from "../LineApiCredential/LineApiCredential";
import { LineApi, RequestMethod } from "./LineApi";
export class MessageApi extends LineApi {
  constructor(ApiCredential: LineApiCredential) {
    super(ApiCredential);
  }

  reply(replyToken: string, messages: Array<Object>, Header?: RequestHeader | undefined) {
    return this.sendRequest(
      this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/message/reply",
      RequestMethod.POST,
      Header,
      {
        "replyToken": replyToken,
        "messages": messages
      }
    );
  }

  push(to: string, messages: Array<Object>, Header?: RequestHeader | undefined) {
    return this.sendRequest(
      this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/message/push",
      RequestMethod.POST,
      Header,
      {
        "to": to,
        "messages": messages
      }
    );
  }
}

