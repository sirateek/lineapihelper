export class LineApiCredential {
  #ChannelAccessToken: string | undefined = undefined;
  #ChannelSecret: string | undefined = undefined;
  /**
   *
   * @param CredentialConfig
   * The CredentialConfig is consist of the ChannelAccessToken and ChannelSecret
   * for the LINE APIs authorization.
   */
  constructor(CredentialConfig: LineApiCredentialConfig) {
    this.#isStringOrUndefind(
      "ChannelAccessToken",
      CredentialConfig.ChannelAccessToken
    );
    this.#isStringOrUndefind("ChannelSecret", CredentialConfig.ChannelSecret);
    this.#ChannelAccessToken = CredentialConfig.ChannelAccessToken;
    this.#ChannelSecret = CredentialConfig.ChannelSecret;
  }

  #isStringOrUndefind = (propertyName: string, value: any) => {
    if (typeof value !== "string" && typeof value !== "undefined") {
      throw new TypeError(
        "The `" +
          propertyName +
          "` must be the string only (Recieved " +
          typeof value +
          "[" +
          value +
          "])"
      );
    }
  };

  public generate_request_header(): RequestHeader {
    if (typeof this.#ChannelAccessToken !== "string") {
      throw new Error(`Invalid API Credential. (You may need to call '.init()' to init API Credential or the credential is incorrectly passed) (Got: ChannelAccessToken: ${typeof this.#ChannelAccessToken})`)
    }
    return {
      Authorization: "Bearer " + this.#ChannelAccessToken,
      "Content-Type": "application/json",
    };
  }
  /**
   * IsHasChannelAccessToken is used to check if the `ChannelAccessToken` has the value (Not null)
   */
  public isHasChannelAccessToken(): boolean {
    if (typeof this.#ChannelAccessToken === "string") {
      return true;
    }
    return false;
  }
}

export interface RequestHeader {
  Authorization: string;
  "Content-Type": string;
}

export interface LineApiCredentialConfig {
  ChannelAccessToken?: string;
  ChannelSecret?: string;
}
