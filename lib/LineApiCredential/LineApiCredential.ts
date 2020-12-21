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
    this.#ChannelAccessToken = CredentialConfig.ChannelAccessToken;
    this.#ChannelSecret = CredentialConfig.ChannelSecret;
  }


  public generate_request_header(): RequestHeader {
    if (typeof this.#ChannelAccessToken !== "string") {
      throw new Error(`Invalid API Credential. (You may need to call '.init()' to init API Credential or the credential is incorrectly passed) (Got: ChannelAccessToken: ${this.#ChannelAccessToken}[${typeof this.#ChannelAccessToken}])`)
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
