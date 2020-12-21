import { LineApiCredential, RequestHeader } from "../LineApiCredential/LineApiCredential";
import { LineApi, RequestMethod } from "./LineApi";
export class MessageApi extends LineApi {
  constructor(ApiCredential: LineApiCredential) {
    super(ApiCredential);
  }

  /**
   * 
   * @param replyToken The replyToken from incomming request
   * @param messages The list of the message object. More infomation https://developers.line.biz/en/docs/messaging-api/message-types/
   * @param Header Optional. In case that you want to specified your own request header
   * Call reply API
   */
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

  /**
   * 
   * @param to The target userId that you want to send the messages to
   * @param messages The list of the message object. More infomation https://developers.line.biz/en/docs/messaging-api/message-types/
   * @param Header Optional. In case that you want to specified your own request header
   * Call push API
   */
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

