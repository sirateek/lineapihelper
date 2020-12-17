export class LineApiCredential {
  #ChannelAccessToken: string | null = null;
  #ChannelSecret: string | null = null;
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
    this.#ChannelAccessToken = CredentialConfig.ChannelAccessToken || null;
    this.#ChannelSecret = CredentialConfig.ChannelSecret || null;
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
    return {
      Authorization: "Bearer " + this.#ChannelAccessToken,
      "Content-Type": "application/json",
    };
  }
  /**
   * IsHasChannelAccessToken is used to check if the `ChannelAccessToken` has the value (Not null)
   */
  public isHasChannelAccessToken(): boolean {
    if (this.#ChannelAccessToken !== null) {
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
