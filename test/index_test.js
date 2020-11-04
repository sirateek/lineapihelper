const lah = require("../lib/index");

lah.init("ChannelAccessToken", "ChannelSecret");

lah.messageApi.reply("Test", [{ type: "text", text: "Hello" }]);
