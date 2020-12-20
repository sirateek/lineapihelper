const lah = require("../dist/index");

lah.init({
  ChannelAccessToken: "ChannelAccessToken",
  ChannelSecret: "ChannelSecret"
})

lah.MessageApi.push("UserId", [{
  type: "text",
  text: "Hello From LineApiHelper 0.2.0!"
}]
).then((res) => {
  console.log(res.statusCode)
  console.log(res.responseBody)
}).catch((e) => {
  console.log("Error")
  console.log(e.statusCode)
  console.log(e.responseBody)
})

