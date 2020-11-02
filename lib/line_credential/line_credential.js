class LineCredential {
  #ChannelAccessToken;
  #ChannelSecret;

  /**
   * LineCredential is used to pass the LINE API's credential
   * in lineapihelper
   * @param {String} ChannelAccessToken
   * @param {String} ChannelSecret
   */
  constructor(ChannelAccessToken, ChannelSecret) {
    if (
      typeof ChannelAccessToken !== "string" ||
      typeof ChannelAccessToken === ""
    ) {
      throw new TypeError(
        "ChannelAccessToken's value must be a string and can't be an empty value."
      );
    }
    this.#ChannelAccessToken = ChannelAccessToken;
    this.#ChannelSecret = ChannelSecret || null;
  }

  /**
   * get_channel_access_token is used to get the ChannelAccessToken
   * from LineCredential instance
   */
  get_channel_access_token() {
    return this.#ChannelAccessToken;
  }
}

module.exports = LineCredential;
