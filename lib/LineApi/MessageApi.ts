import { LineApiCredential } from "../LineApiCredential/LineApiCredential";
import { LineApi } from "./LineApi";
export class MessageApi extends LineApi {
  constructor(ApiCredential: LineApiCredential | undefined) {
    super(ApiCredential);
  }

  reply(replyToken: string, messages: Array<String>) {
    this.sendRequest(
      this.ApiPrefix.DEFAULT_API_PREFIX + "/reply",
      { Authorization: "", "Content-Type": "" },
      {}
    );
  }
}
