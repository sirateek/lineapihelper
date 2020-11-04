class ApiEndpointInfomation {
  #method = null;
  #path = null;

  /**
   * ApiEndpointInformation is used to pass the API Endpoint spec.
   * @param {string} method
   * The method to send the request to this API
   * @param {string} path
   * The path to the API's endpoint
   *
   */
  constructor(method, path) {
    this.#method = method;
    this.#path = path;
  }
  /**
   * getter function for method. It is used to get the method spec.
   */
  get method() {
    return this.#method;
  }
  /**
   * getter function for path. is used to get the path to the API's endpoint.
   */
  get path() {
    return this.#path;
  }
}

module.exports = ApiEndpointInfomation;
