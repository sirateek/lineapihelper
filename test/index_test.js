const lah = require("../lib/index");

lah.init("ChannelAccessToken");
lah.messageApi
  .push("U1234", [{ type: "text", text: "Hello!" }])
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("Error");
    console.log(e);
  });
