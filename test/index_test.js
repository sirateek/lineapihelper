const lah = require("../lib/index");

lah.init(
  "mMs7vcuIp5/2CcBkPFt9xwRdxtvKIzauXAUqJWRVrjLZNIl07pRCGcjvxM6bMRnemrGZwgUZvqSnZdy9nXpHE+fFbYW9C0ltux+m/7cUHLxsWqxwKX22dW2R5f+9WGQMDRma2eBubr3MYVLYSJHmwwdB04t89/1O/w1cDnyilFU="
);
lah.messageApi
  .push("U1efbc797c7174dd636c047f5ca8eba42", [{ type: "text", text: "Hello!" }])
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("Error");
    console.log(e);
  });
