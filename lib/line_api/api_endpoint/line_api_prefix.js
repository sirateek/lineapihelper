class LineApiPrefix {
  /**
   * default_prefix return the default api prefix
   * * https://api.line.me
   */
  default_prefix() {
    return "https://api.line.me";
  }

  /**
   * data_prefix return the data api prefix
   * * https://api-data.line.me
   */
  data_prefix() {
    return "https://api-data.line.me";
  }
}

module.exports = new LineApiPrefix();
