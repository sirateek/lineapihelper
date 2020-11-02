const lah = require("..");
var a = new lah.LineCredential("Test", "123");
console.log(a.get_channel_access_token());
