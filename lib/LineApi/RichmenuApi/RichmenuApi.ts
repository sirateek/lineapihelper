import {
  LineApiCredential,
  RequestHeader,
} from "../../LineApiCredential/LineApiCredential";
import { LineApi, RequestMethod } from "../LineApi";

export class RichmenuApi extends LineApi {
  constructor(ApiCredential: LineApiCredential) {
    super(ApiCredential);
  }

  /**
   *
   * @param richMenuConfig The Richmenu Config Object Payload. Can be generated from `LINE Bot Designer`. More info https://developers.line.biz/en/services/bot-designer/
   * @param Header Optional. In case that you want to specified your own request header
   *
   * Call create new Richmenu API
   *
   * More info https://developers.line.biz/en/reference/messaging-api/#create-rich-menu
   */
  createRichmenu(richMenuConfig: Object, Header?: RequestHeader | undefined) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/richmenu",
      method: RequestMethod.POST,
      header: Header,
      body: richMenuConfig,
    });
  }

  /**
   *
   * @param Header Optional. In case that you want to specified your own request header
   *
   * Call Get Richmenu List API
   *
   * More info https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-list
   */
  getRichmenuList(Header?: RequestHeader | undefined) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/richmenu/list",
      method: RequestMethod.GET,
      header: Header,
    });
  }

  /**
   *
   * @param richmenuId The ID of Richmenu you want to get info.
   * @param Header Optional. In case that you want to specified your own request header
   *
   * Call Get Richmenu API
   *
   * More info https://developers.line.biz/en/reference/messaging-api/#get-rich-menu
   */
  getRichmenu(richmenuId: string, Header?: RequestHeader | undefined) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + `/v2/bot/richmenu/${richmenuId}`,
      method: RequestMethod.GET,
      header: Header,
    });
  }

  /**
   *
   * @param richmenuId The ID of Richmenu you want to delete
   * @param Header Optional. In case that you want to specified your own request header
   *
   * Call Delete Richmenu API
   *
   * More info https://developers.line.biz/en/reference/messaging-api/#delete-rich-menu
   */
  deleteRichmenu(richmenuId: string, Header?: RequestHeader | undefined) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + `/v2/bot/richmenu/${richmenuId}`,
      method: RequestMethod.DELETE,
      header: Header,
    });
  }

  /**
   *
   * @param richmenuId The ID of Richmenu you want to set it as default Richmenu
   * @param Header Optional. In case that you want to specified your own request header
   *
   * Call Set Default Richmenu API
   *
   * More Info https://developers.line.biz/en/reference/messaging-api/#set-default-rich-menu
   */
  setDefaultRichmenu(richmenuId: string, Header?: RequestHeader | undefined) {
    return this.sendRequest({
      uri:
        this.ApiPrefix.DEFAULT_API_PREFIX +
        `/v2/bot/user/all/richmenu/${richmenuId}`,
      method: RequestMethod.POST,
      header: Header,
    });
  }

  /**
   *
   * @param Header Optional. In case that you want to specified your own request header
   *
   * Call Get Default Richmenu Id API
   *
   * More Info https://developers.line.biz/en/reference/messaging-api/#get-default-rich-menu-id
   */
  getDefaultRichmenuId(Header?: RequestHeader | undefined) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/user/all/richmenu",
      method: RequestMethod.GET,
      header: Header,
    });
  }

  /**
   *
   * @param Header Optional. In case that you want to specified your own request header
   *
   * Call Cancel Default Richmenu API
   *
   * More Info https://developers.line.biz/en/reference/messaging-api/#cancel-default-rich-menu
   */
  cancelDefaultRichmenu(Header?: RequestHeader | undefined) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/user/all/richmenu",
      method: RequestMethod.DELETE,
      header: Header,
    });
  }

  /**
   *
   * @param userId The ID of the user that you want the link
   * @param richmenuId The ID of the Richmenu that you want to link
   * @param Header Optional. In case that you want to specified your own request header
   *
   * Call Link Richmenu To User API
   *
   * More Info https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-user
   */
  linkRichmenuToUser(
    userId: string,
    richmenuId: string,
    Header?: RequestHeader | undefined
  ) {
    return this.sendRequest({
      uri:
        this.ApiPrefix.DEFAULT_API_PREFIX +
        `/v2/bot/user/${userId}/richmenu/${richmenuId}`,
      method: RequestMethod.POST,
      header: Header,
    });
  }

  /**
   *
   * @param userIds The Array of userId that you want to link
   * @param richmenuId The ID of the Richmenu that you want to link
   * @param Header Optional. In case that you want to specified your own request header
   *
   * Call Link Richmenu to Multiple Users API
   *
   * More Info https://developers.line.biz/en/reference/messaging-api/#link-rich-menu-to-users
   */
  linkRichmenuToMultipleUsers(
    userIds: Array<string>,
    richmenuId: string,
    Header?: RequestHeader | undefined
  ) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/richmenu/bulk/link",
      method: RequestMethod.POST,
      header: Header,
      body: {
        richMenuId: richmenuId,
        userIds: userIds,
      },
    });
  }

  /**
   *
   * @param userIds The ID of the user that you want to get richmenu
   * @param Header Optional. In case that you want to specified your own request header
   *
   * Call Get Richmenu ID from user API
   *
   * More Info https://developers.line.biz/en/reference/messaging-api/#get-rich-menu-id-of-user
   */
  getRichmenuIdOfUser(userId: string, Header?: RequestHeader | undefined) {
    return this.sendRequest({
      uri:
        this.ApiPrefix.DEFAULT_API_PREFIX + `/v2/bot/user/${userId}/richmenu`,
      method: RequestMethod.GET,
      header: Header,
    });
  }

  /**
   *
   * @param userIds The ID of the user that you want to unlink richmenu
   * @param Header Optional. In case that you want to specified your own request header
   *
   * Call Unlink Richmenu from user API
   *
   * More Info https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-user
   */
  unlinkRichmenuFromUser(userId: string, Header?: RequestHeader | undefined) {
    return this.sendRequest({
      uri:
        this.ApiPrefix.DEFAULT_API_PREFIX + `/v2/bot/user/${userId}/richmenu`,
      method: RequestMethod.DELETE,
      header: Header,
    });
  }

  /**
   *
   * @param userIds The ID of the user that you want to unlink richmenu
   * @param Header Optional. In case that you want to specified your own request header
   *
   * Call Unlink Richmenus from Multiple users API
   *
   * More Info https://developers.line.biz/en/reference/messaging-api/#unlink-rich-menu-from-users
   */
  unlinkRichmenusFromMultipleUsers(
    userIds: Array<string>,
    Header?: RequestHeader | undefined
  ) {
    return this.sendRequest({
      uri: this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/richmenu/bulk/unlink",
      method: RequestMethod.POST,
      header: Header,
      body: {
        userIds: userIds,
      },
    });
  }
}
