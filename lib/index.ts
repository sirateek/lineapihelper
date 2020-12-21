import { MessageApi } from "./LineApi/MessageApi";
import {
  LineApiCredential,
  LineApiCredentialConfig,
} from "./LineApiCredential/LineApiCredential";

class LineApiHelper {
  #Credential: LineApiCredential = new LineApiCredential({});
  #MessageApi: MessageApi = new MessageApi(this.#Credential)

  public init(
    CredentialConfig: LineApiCredentialConfig,
    OverrideConfig: boolean = false
  ) {
    if (!OverrideConfig && this.#Credential.isHasChannelAccessToken()) {
      throw new Error(
        "Duplicate initilization has been occurred. If this is your intention, Please set the `OverrideConfig` property to `true`"
      );
    }
    this.#Credential = new LineApiCredential(CredentialConfig);
    this.#MessageApi = new MessageApi(this.#Credential)
  }

  get MessageApi() {
    return this.#MessageApi
  }
}

export = new LineApiHelper();
