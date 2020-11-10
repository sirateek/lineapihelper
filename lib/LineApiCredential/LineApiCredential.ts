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
    this.#ChannelAccessToken = CredentialConfig.ChannelAccessToken || null;
    this.#ChannelSecret = CredentialConfig.ChannelSecret || null;
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

export interface LineApiCredentialConfig {
  ChannelAccessToken?: string;
  ChannelSecret?: string;
}
