import {
  LineApiCredential,
  LineApiCredentialConfig,
} from "./LineApiCredential/LineApiCredential";

class LineApiHelper {
  #Credential: LineApiCredential = new LineApiCredential({});

  public init(
    CredentialConfig: LineApiCredentialConfig,
    OverrideConfig: boolean = false
  ) {
    if (!OverrideConfig && this.#Credential.isHasChannelAccessToken()) {
      throw new Error(
        "Duplicate initilization has been occurred. If this is your purpuse, Please set the `OverrideConfig` property to `true`"
      );
    }
    this.#Credential = new LineApiCredential(CredentialConfig);
  }
}

export = new LineApiHelper();
