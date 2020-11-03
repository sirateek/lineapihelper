const LineCredential = require("../../line_credential/line_credential");
const axios = require("axios").default;

class MessageApi {
  #LineCredentalObj = new LineCredential();
  #ApiPrefix = require("../api_endpoint/line_api_prefix");
  #ApiEndpointPath = require("../api_endpoint/line_api_endpoint_path");

  constructor(LineCredentialObj) {
    if (
      !(LineCredentialObj instanceof LineCredential) &&
      typeof LineCredentialObj !== "undefined"
    ) {
      throw new Error(
        "`LineCredentialObj` muse be the instance of `LineCredential`"
      );
    }
    if (typeof LineCredentialObj !== "undefined") {
      this.#LineCredentalObj = LineCredentialObj;
    }
  }

  #SendRequest = (method, url, header, body) => {
    return axios({
      method: method,
      url: url,
      headers: header,
      data: JSON.stringify(body),
    });
  };

  /**
   * reply funcion is used to call the reply Api
   * @param {string} replyToken
   * A token that use to reply the message back to the user.
   * * Can be recieved from the Webhook Events.
   * @param {Array} messages_payload
   * An instance of Array that contain the LINE's message payload.
   * * Note: Up to 5 messages payload (Due to the limitaion from LINE APIs)
   * * Follow this link for more information: https://developers.line.biz/en/docs/messaging-api/message-types/
   * @param {LineCredential} LineCredential
   * An instance of LineCredential
   * * Note: This param is an optional for those who want to momentary change the LINE API's credential.
   */
  reply(replyToken, messages_payload, LineCredential) {
    if (typeof replyToken !== "string") {
      throw new Error(
        "`replyToken` param must be a string only (Recieved: " +
          typeof replyToken +
          ")"
      );
    }
    if (!Array.isArray(messages_payload)) {
      throw new Error(
        "`messages_payload` must be an array only (Recieved: " +
          typeof messages_payload +
          ")"
      );
    }
    var LineCredentialObj = LineCredential || this.#LineCredentalObj;
    const api_spec = this.#ApiEndpointPath.message_api_reply();
    const api_url = this.#ApiPrefix.default_prefix() + api_spec.get_path();
    const request_header = LineCredentialObj.generate_request_header(
      "application/json"
    );
    var request_body = {};
    request_body["replyToken"] = replyToken;
    request_body["messages"] = messages_payload;
    return this.#SendRequest(
      api_spec.get_method(),
      api_url,
      request_header,
      request_body
    );
  }

  /**
   * push funcion is used to call the push Api
   * @param {string} to
   * A userId to send the message to.
   * * Note: userId is uniquely generated per `provider` and can't be used across those providers.
   * * Can be recieved from the Webhook Events, LINE Developers Console, LINE Login, LIFF.
   * * More information: https://developers.line.biz/en/reference/messaging-api/#source-user
   * @param {Array} messages_payload
   * An instance of Array that contain the LINE's message payload.
   * * Note: Up to 5 messages payload (Due to the limitaion from LINE APIs)
   * * Follow this link for more information: https://developers.line.biz/en/docs/messaging-api/message-types/
   * @param {LineCredential} LineCredential
   * An instance of LineCredential
   * * Note: This param is an optional for those who want to momentary change the LINE API's credential.
   */
  push(to, messages_payload, LineCredential) {
    if (typeof to !== "string") {
      throw new Error(
        "`to` param must be a string only (Recieved: " + typeof replyToken + ")"
      );
    }
    if (!Array.isArray(messages_payload)) {
      throw new Error(
        "`messages_payload` must be an array only (Recieved: " +
          typeof messages_payload +
          ")"
      );
    }
    var LineCredentialObj = LineCredential || this.#LineCredentalObj;
    const api_spec = this.#ApiEndpointPath.message_api_push();
    const api_url = this.#ApiPrefix.default_prefix() + api_spec.get_path();
    const request_header = LineCredentialObj.generate_request_header(
      "application/json"
    );
    var request_body = {};
    request_body["to"] = to;
    request_body["messages"] = messages_payload;
    return this.#SendRequest(
      api_spec.get_method(),
      api_url,
      request_header,
      request_body
    );
  }
}

module.exports = MessageApi;
