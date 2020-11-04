const ApiEndpointInfomation = require("./api_endpoint_infomation_construct");
class ApiEndpointPath {
  /**
   * message_api_reply return the ApiEndpointPath for the reply Api
   * * /v2/bot/message/reply
   */
  message_api_reply() {
    return new ApiEndpointInfomation("POST", "/v2/bot/message/reply");
  }

  /**
   * message_api_push return the ApiEndpointPath for the push Api
   * * /v2/bot/message/push
   */
  message_api_push() {
    return new ApiEndpointInfomation("POST", "/v2/bot/message/push");
  }

  /**
   * message_api_multicast return the ApiEndpointPath for the multicast Api
   * * /v2/bot/message/push
   */
  message_api_multicast() {
    return new ApiEndpointInfomation("POST", "/v2/bot/message/multicast");
  }

  /**
   * message_api_multicast return the ApiEndpointPath for the multicast Api
   * * /v2/bot/message/broadcast
   */
  message_api_broadcast() {
    return new ApiEndpointInfomation("POST", "/v2/bot/message/broadcast");
  }
}

module.exports = new ApiEndpointPath();
