const LineCredential = require("./line_credential/line_credential");
const MessageApi = require("./line_api/messaging_api/message_api");

class LineApiHelper {
  #LineApiCredential = null;
  #messageApi = new MessageApi();

  /**
   * init() function is used to initialize the LineApiHelper instance
   *
   * * Note: You must first call this method before calling any methods in lah package!.
   *
   * @param {string} ChannelAccessToken
   * The Channel Access Token that will be used to authenticate with LINE APIs
   * * Can be retrieve from LINE Developers Console or ChannelAccessToken API
   * * LINE Developers Console: https://developers.line.biz/console
   * @param {string} ChannelSecret
   * The Channel Secret that will be used to verify if the request was sent from LINE Server.
   * * Can be retrieve from LINE Developers Console
   * * LINE Developers Console: https://developers.line.biz/console
   * @param {boolean} override
   * The params to prevent the double-initialization
   */
  init(ChannelAccessToken, ChannelSecret, override = false) {
    if (this.#LineApiCredential !== null && override === false) {
      throw new Error(
        "You have already initialized the lineapihelper. If you want to update the credentials, Please set the `override` params to true"
      );
    }
    this.#LineApiCredential = new LineCredential(
      ChannelAccessToken,
      ChannelSecret
    );
    this.#messageApi = new MessageApi(this.#LineApiCredential);
  }

  /**
   * The property that will be called to use method in `messageApi` instance
   */
  get messageApi() {
    return this.#messageApi;
  }
}

module.exports = new LineApiHelper();
