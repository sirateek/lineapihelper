import { expect } from "chai";
import lah from "../lib/index";
import { ApiResponse } from "../lib/LineApi/LineApi";
require('dotenv').config();

describe('MesageApiTest', function() {
    it('test-reply-wh-init', function() {
      // Test using without initialization. `.init()`
      // Expect the Error no API Credential to be thrown
      expect(
        () => lah.MessageApi.reply("Test", [])
      ).to.throw(Error)
    }); 

    it('test-push', async function() {
      lah.init({
        ChannelAccessToken: process.env.CHANNELACCESSTOKEN,
        ChannelSecret: process.env.CHANNELSECRET,
      })
      const pushResult = await lah.MessageApi.push(process.env.USERID || "?", 
      [
        {
          type: "text",
          text: `Test From LAH 0.2.0 (${process.env.LAHRUNTESTFROM})`
        }
      ])
      expect(pushResult.statusCode).to.equal(200)
      expect(JSON.stringify(pushResult.responseBody)).to.equal('{}')
    }); 
});