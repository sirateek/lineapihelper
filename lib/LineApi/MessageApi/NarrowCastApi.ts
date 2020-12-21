import { request } from "http";
import { LineApiCredential, RequestHeader } from "../../LineApiCredential/LineApiCredential";
import { LineApi, RequestMethod } from "../LineApi"

export class NarrowCastApi extends LineApi {
    constructor(ApiCredential: LineApiCredential) {
        super(ApiCredential)
    }

    send(messages: Array<Object>, recipient: Object, filter: Object, limit: Object, notificationDisabled: boolean = false, Header?: RequestHeader | undefined) {
        return this.sendRequest(
            this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/message/narrowcast",
            RequestMethod.POST,
            Header,
            {
              "messages": messages,
              "recipient": recipient,
              "filter": filter,
              "limit": limit,
              "notificationDisabled": notificationDisabled
            }
          )
    }

    getStatus(requestId: string, Header?: RequestHeader | undefined) {
        return this.sendRequest(
            this.ApiPrefix.DEFAULT_API_PREFIX + `/v2/bot/message/progress/narrowcast?requestId=${requestId}`,
            RequestMethod.GET,
            Header
        )
    }
}


