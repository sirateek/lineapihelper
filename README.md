# lineapihelper( Messaging API )
LINE API Helper ( Messaging API ) for LINE Developer

## Getting Started
This Helper of LINE Messaging API will help you to develop the chatbot easier. With only one dependency, You will have tools that will help you to do the command like reply, push, multicast, broadcast, etc. or do the request decode to get the userId, event type, replyToken, etc.

### Installing
LINE API Helper is an npm package. You can simply install it by using this command.
```
$ npm i lineapihelper
```

### Example Code
This is the example code using LINE API Helper hosted by Firebase Cloud Functions.
```
exports.LINEAPIHelper = functions.https.onRequest((req, res) => {
  const lah = require("lineapihelper");
  lah.setrequest(req);
  lah.cat("Your channel access token");
  var payload = [
    {
      type: "text",
      text: "Hello from lineapihelper",
    }
  ]
  return lah.reply(lah.replyToken(), payload).then((response) => {
    console.log(response)
    return res.status(200).send();
  }).catch((e) => {
    console.log(e)
    return res.status(500).send();
  })
})
```
### For more information, Please go to the [package reference wiki](https://github.com/sirateek/lineapihelper/wiki/Package-Reference) to see the package documentation

### Dependency Structure
LINE API Helper use these dependencies in background to handle the command.
* [request](https://www.npmjs.com/package/request)
* [request-promise](https://www.npmjs.com/package/request-promise)
* **crypto**

### LINE API Reference
* [Messaging API Reference](https://developers.line.biz/en/reference/messaging-api/)
* [LINE Developer](https://developers.line.biz)

### Develop with ♡ by Siratee K.
