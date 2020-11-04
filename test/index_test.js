const lah = require("../lib/index");

lah.init("ChannelAccessToken", "ChannelSecret");

console.log(lah);
lah.messageApi.reply("Test", [{ type: "text", text: "Hello" }]);
