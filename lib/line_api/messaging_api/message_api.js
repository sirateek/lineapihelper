const LineCredential = require("../../line_credential/line_credential");

class MessageApi {
  #LineCredentalObj = new LineCredential();
  #ApiPrefix = require("../api_endpoint/line_api_prefix");
  #ApiEndpointPath = require("../api_endpoint/line_api_endpoint_path");
  #axios = require("axios").default;
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
  /**
   *
   * @param {object} api
   * An object in JSON format to specify the api to send request to
   * * {api_name: "value"}
   * @param {any} target_reach
   * An target_reach value from the caller function that specify the target of the message
   * @param {Array} messages_payload
   * An instance of Array that contain the LINE's message payload.
   * * Note: Up to 5 messages payload (Due to the limitaion from LINE APIs)
   * * Follow this link for more information: https://developers.line.biz/en/docs/messaging-api/message-types/
   * @param {LineCredential} LineCredentialObj
   * * An instance of LineCredential
   * * Note: This param is an optional for those who want to momentary change the LINE API's credential.
   */
  #RequestCore = (api, target_reach, messages_payload, LineCredentialObj) => {
    LineCredentialObj = LineCredentialObj || this.#LineCredentalObj;
    if (!Array.isArray(messages_payload)) {
      throw new Error(
        "`messages_payload` must be an array only (Recieved: " +
          typeof messages_payload +
          ")"
      );
    }
    if (!(LineCredentialObj instanceof LineCredential)) {
      throw new Error(
        "`LineCredential` param must be the instance of LineCredential only (Recieved: " +
          typeof LineCredentialObj +
          ")"
      );
    }
    var api_spec = null;
    const request_header = LineCredentialObj.generate_request_header(
      "application/json"
    );
    var request_body = {};
    switch (api.api_name) {
      case "REPLY":
        api_spec = this.#ApiEndpointPath.message_api_reply();
        request_body["replyToken"] = target_reach;
        break;
      case "PUSH":
        api_spec = this.#ApiEndpointPath.message_api_push();
        request_body["to"] = target_reach;
        break;
      case "MULTICAST":
        api_spec = this.#ApiEndpointPath.message_api_multicast();
        request_body["to"] = target_reach;
        break;
      case "BROADCAST":
        api_spec = this.#ApiEndpointPath.message_api_broadcast();
        break;
      default:
        throw new Error(
          "The API you want to send the request to was not found. (Recieved: " +
            JSON.stringify(api) +
            ")"
        );
    }
    request_body["messages"] = messages_payload;
    const api_url = this.#ApiPrefix.default_prefix() + api_spec.path;
    const api_method = api_spec.method;
    return this.#axios({
      method: api_method,
      url: api_url,
      headers: request_header,
      data: JSON.stringify(request_body),
    });
  };

  /**
   * reply funcion is used to call the reply Api
   * * Reference: https://developers.line.biz/en/reference/messaging-api/#send-reply-message
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
    return this.#RequestCore(
      { api_name: "REPLY" },
      replyToken,
      messages_payload,
      LineCredential
    );
  }

  /**
   * push funcion is used to call the push Api
   * * Reference: https://developers.line.biz/en/reference/messaging-api/#send-push-message
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
        "`to` param must be a string only (Recieved: " + typeof to + ")"
      );
    }
    return this.#RequestCore(
      { api_name: "PUSH" },
      to,
      messages_payload,
      LineCredential
    );
  }

  /**
   * multicast funcion is used to call the multicast Api
   * * Reference: https://developers.line.biz/en/reference/messaging-api/#send-multicast-message
   * @param {Array} to
   * An array of userIds to send the message to.
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
  multicast(to, messages_payload, LineCredential) {
    if (!Array.isArray(to)) {
      throw new Error(
        "`to` param must be an Array only (Recieved: " + typeof to + ")"
      );
    }
    return this.#RequestCore(
      { api_name: "MULTICAST" },
      to,
      messages_payload,
      LineCredential
    );
  }

  /**
   * broadcast funcion is used to call the broadcast Api
   * * Reference: https://developers.line.biz/en/reference/messaging-api/#send-broadcast-message
   * @param {Array} messages_payload
   * An instance of Array that contain the LINE's message payload.
   * * Note: Up to 5 messages payload (Due to the limitaion from LINE APIs)
   * * Follow this link for more information: https://developers.line.biz/en/docs/messaging-api/message-types/
   * @param {LineCredential} LineCredential
   * An instance of LineCredential
   * * Note: This param is an optional for those who want to momentary change the LINE API's credential.
   */
  broadcast(messages_payload, LineCredential) {
    return this.#RequestCore(
      { api_name: "BROADCAST" },
      null,
      messages_payload,
      LineCredential
    );
  }
}

module.exports = MessageApi;
