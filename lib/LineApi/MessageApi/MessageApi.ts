import {
  LineApiCredential,
  RequestHeader,
} from "../../LineApiCredential/LineApiCredential";
import { LineApi, RequestMethod } from "../LineApi";
import { NarrowCastApi } from "./NarrowCastApi";
export class MessageApi extends LineApi {
  #NarrowCastApi = new NarrowCastApi(new LineApiCredential({}));
  constructor(ApiCredential: LineApiCredential) {
    super(ApiCredential);
    this.#NarrowCastApi = new NarrowCastApi(ApiCredential);
  }

  /**
   *
   * @param replyToken The replyToken from incomming request
   * @param messages The list of the message object. More infomation https://developers.line.biz/en/docs/messaging-api/message-types/
   * @param notificationDisabled Disable the notification for the recipient. Default is set to false
   * @param Header Optional. In case that you want to specified your own request header
   * Call Reply API
   */
  reply(
    replyToken: string,
    messages: Array<Object>,
    notificationDisabled: boolean = false,
    Header?: RequestHeader | undefined
  ) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/message/reply",
      method: RequestMethod.POST,
      header: Header,
      body: {
        replyToken: replyToken,
        messages: messages,
        notificationDisabled: notificationDisabled,
      },
    });
  }

  /**
   *
   * @param to The target userId that you want to send the messages to
   * @param messages The list of the message object. More infomation https://developers.line.biz/en/docs/messaging-api/message-types/
   * @param notificationDisabled Disable the notification for the recipient. Default is set to false
   * @param Header Optional. In case that you want to specified your own request header
   * Call Push API
   */
  push(
    to: string,
    messages: Array<Object>,
    notificationDisabled: boolean = false,
    Header?: RequestHeader | undefined
  ) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/message/push",
      method: RequestMethod.POST,
      header: Header,
      body: {
        to: to,
        messages: messages,
        notificationDisabled: notificationDisabled,
      },
    });
  }

  /**
   *
   * @param to The list of the target userId that you want to send message to
   * @param messages The list of the message object. More infomation https://developers.line.biz/en/docs/messaging-api/message-types/
   * @param notificationDisabled Disable the notification for the recipient. Default is set to false
   * @param Header Optional. In case that you want to specified your own request header
   * Call Multicast API
   */
  multicast(
    to: Array<string>,
    messages: Array<Object>,
    notificationDisabled: boolean = false,
    Header?: RequestHeader | undefined
  ) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/message/multicast",
      method: RequestMethod.POST,
      header: Header,
      body: {
        to: to,
        messages: messages,
        notificationDisabled: notificationDisabled,
      },
    });
  }

  get narrowcast() {
    return this.#NarrowCastApi;
  }

  /**
   *
   * @param messages The list of the message object. More infomation https://developers.line.biz/en/docs/messaging-api/message-types/
   * @param notificationDisabled Disable the notification for the recipient. Default is set to false
   * @param Header Optional. In case that you want to specified your own request header
   * Call Broadcast API
   */
  broadcast(
    messages: Array<Object>,
    notificationDisabled: boolean = false,
    Header?: RequestHeader | undefined
  ) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/message/broadcast",
      method: RequestMethod.POST,
      header: Header,
      body: {
        messages: messages,
        notificationDisabled: notificationDisabled,
      },
    });
  }
}
