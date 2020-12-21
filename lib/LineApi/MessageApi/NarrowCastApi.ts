import { LineApiCredential, RequestHeader } from "../../LineApiCredential/LineApiCredential";
import { LineApi, RequestMethod } from "../LineApi"

export class NarrowCastApi extends LineApi {
    #NarrowCastApiAudience = new NarrowCastAudience(new LineApiCredential({}))
    constructor(ApiCredential: LineApiCredential) {
        super(ApiCredential)
        this.#NarrowCastApiAudience = new NarrowCastAudience(ApiCredential)
    }

    send(messages: Array<Object>, recipient?: Object, filter?: Object, limit?: Object, notificationDisabled: boolean = false, Header?: RequestHeader | undefined) {
        return this.sendRequest(
            this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/message/narrowcast",
            RequestMethod.POST,
            Header,
            {
              "messages": messages,
              "recipient": recipient || null,
              "filter": filter || null,
              "limit": limit || null,
              "notificationDisabled": notificationDisabled
            }
          )
    }

    getStatus(requestId: string, Header?: RequestHeader | undefined) {
        return this.sendRequest(
            this.ApiPrefix.DEFAULT_API_PREFIX + `/v2/bot/message/progress/narrowcast?requestId=${requestId}`,
            RequestMethod.GET,
            Header
        )
    }

    get audience() {
        return this.#NarrowCastApiAudience
    }
}

class NarrowCastAudience extends LineApi {
    constructor(ApiCredential: LineApiCredential) {
        super(ApiCredential)
    }

    /**
     * 
     * @param config The configuration for calling the audience create API
     * @param Header Optional. In case that you want to specified your own request header
     * Call the audience create by JSON API
     * More info https://developers.line.biz/en/reference/messaging-api/#create-upload-audience-group
     */
    createAudienceByJson(config: createAudienceConfig,Header?: RequestHeader | undefined) {
        return this.sendRequest(
            this.ApiPrefix.DEFAULT_API_PREFIX + "/v2/bot/audienceGroup/upload",
            RequestMethod.POST,
            Header,
            config
        )
    }

    /**
     * 
     * @param config The configuration for calling the audience list get API
     * @param Header Optional. In case that you want to specified your own request header
     * Call the audience list get API
     * More info https://developers.line.biz/en/reference/messaging-api/#get-audience-groups
     */
    getList(config: getListConfig, Header?: RequestHeader | undefined) {
        let extensionUrl: string = `/v2/bot/audienceGroup/list?`
        for (const [key, value] of Object.entries(config)) {
            if (typeof value !== "undefined") {
                extensionUrl += `${key}=${value || null}&`
            }
        }

        return this.sendRequest(
            this.ApiPrefix.DEFAULT_API_PREFIX + extensionUrl,
            RequestMethod.GET,
            Header
        )
    }
}

export interface getListConfig {
    page: number,
    description?: string,
    status?: string,
    size?: number,
    includesExternalPublicGroups?: boolean,
    createRoute?: string
}

export interface createAudienceConfig {
    description: string,
    isIfaAudience?: boolean,
    uploadDescription: string,
    audiences: Array<string>
}