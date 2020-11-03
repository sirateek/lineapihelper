class LineCredential {
  #ChannelAccessToken = null;
  #ChannelSecret = null;

  /**
   * LineCredential is used to pass the LINE API's credential
   * in lineapihelper
   * @param {string} ChannelAccessToken
   * The Channel Access Token that will be used to authenticate with LINE APIs
   * * Can be retrieve from LINE Developers Console or ChannelAccessToken API
   * * LINE Developers Console: https://developers.line.biz/console
   * @param {string} ChannelSecret
   * The Channel Secret that will be used to verify if the request was sent from LINE Server.
   * * Can be retrieve from LINE Developers Console
   * * LINE Developers Console: https://developers.line.biz/console
   */
  constructor(ChannelAccessToken, ChannelSecret) {
    if (
      typeof ChannelAccessToken !== "undefined" &&
      (typeof ChannelAccessToken !== "string" || ChannelAccessToken === "")
    ) {
      throw new TypeError(
        "ChannelAccessToken's value must be a string and can't be an empty value."
      );
    }
    this.#ChannelAccessToken = ChannelAccessToken || null;
    this.#ChannelSecret = ChannelSecret || null;
  }

  /**
   * get_channel_access_token is used to get the specified ChannelAccessToken
   * from LineCredential instance
   */
  get_channel_access_token() {
    return this.#ChannelAccessToken;
  }

  /**
   * get_channel_secret is used to get the specified ChannelSecret
   * Note: This is nullable value
   */
  get_channel_secret() {
    return this.#ChannelSecret;
  }

  /**
   * generate_request_header is used to generate the request header required in
   * sending request to LINE APIs
   * @param {string} content_type
   */
  generate_request_header(content_type) {
    if (this.#ChannelAccessToken === null) {
      throw new Error(
        "No `ChannelAccessToken` found in the `LineCredential` instance. (You may need to call `init()` before using this command)"
      );
    }

    return {
      Authorization: "Bearer " + this.#ChannelAccessToken,
      "Content-Type": content_type,
    };
  }
}

module.exports = LineCredential;
