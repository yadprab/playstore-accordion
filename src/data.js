const apps = [
  {
    id: 1,
    image:
      "https://pbs.twimg.com/profile_images/1300834212912803840/-V1Rz461.jpg",
    name: "payTm",
    title: "paytm-UPI,money-transfer and others",
    text:
      "WHAT'S NEW 1. Here is the coolest new home page experience.. You are going to love it' 2. Also, the best money transfer experience, directly from your bank account, now on your Paytm App. Enjoy the cool new interface that makes it the simplest and quickest. ",
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/originals/7a/ec/a5/7aeca525afa2209807c15da821b2f2c6.png",
    name: "spotify",
    title: "spotify listen to your favorite music and podcasts",
    text:
      "WHAT'S NEW 1. Here is the coolest new home page experience.. You are going to love it' 2. Also, the best money transfer experience, directly from your bank account, now on your Paytm App. Enjoy the cool new interface that makes it the simplest and quickest. ",
  },
  {
    id: 3,
    image:"data:image/png;base64,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",
    name: "chrome",
    title: "google chrome fast and secure browser",
    text:
      "WHAT'S NEW 1. Here is the coolest new home page experience.. You are going to love it' 2. Also, the best money transfer experience, directly from your bank account, now on your Paytm App. Enjoy the cool new interface that makes it the simplest and quickest. ",
  },
  {
    id: 4,
    image: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c545.png",
    name: "youtube",
    title: "youtube",
    text:
      "WHAT'S NEW 1. Here is the coolest new home page experience.. You are going to love it' 2. Also, the best money transfer experience, directly from your bank account, now on your Paytm App. Enjoy the cool new interface that makes it the simplest and quickest. ",
  },
  {
    id: 5,
    image:
      "https://pbs.twimg.com/profile_images/1300834212912803840/-V1Rz461.jpg",
    name: "payTm",
    title: "paytm-UPI,money-transfer and others",
    text:
      "WHAT'S NEW 1. Here is the coolest new home page experience.. You are going to love it' 2. Also, the best money transfer experience, directly from your bank account, now on your Paytm App. Enjoy the cool new interface that makes it the simplest and quickest. ",
  },
];

export{
    apps
}