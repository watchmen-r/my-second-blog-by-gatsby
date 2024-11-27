---
title: WebRTC summary
date: "2024-11-27T22:40:32.169Z"
description: Now I am studying the WebRTC to incorporate it to my shooter game. But looks like there are a lot of problems to introduce to game without any paid. So to remember it, I want to summarize the knowledge of it.
featuredImage: ./webrtc.png
---

Now I am studying the WebRTC to incorporate it to my shooter game. But looks like there are a lot of problems to introduce to game without any paid. So to remember it, I want to summarize the knowledge of it.

# Overview
This is a overview image of WebRTC.  

![Alt Text](./webrtc-summary.png "summary image")

### Signaling server
To exchange the information of connect, client uses the signaling server and exchange the connection info. 

### STUN server
This teaches the client's IP address from the perspective of external network.

### TURN server
Actually, if we want to apply the pure P2P connection. This would not be needed. But sometimes this turn server would be needed when the client uses the firewall and so on. Maintaining this server would be so expensive since this passes the request each other anytime.


# How to implement it.
There are many libraries for JavaScript. And PeerJS is one of the most popular one.  

[PeerJS](https://github.com/peers/peerjs)

Surprisingly, this library provides us the free signaling server.
[PeerJS PeerServer](https://peerjs.com/peerserver)

We also can build own signaling server using PeerServer library.
[PeerJS-server](https://github.com/peers/peerjs-server)

I think we can use STUN server freely since there are so many services in the internet. But as for TURN server, it would be very difficult since this server passes the correspond each other via itself and prices of networking would be so high. (And this situation is very tough for me since I want to develop my services as much as freely...)

As for TURN server, there are also many libraries to build it. Coturn is one of the famous one.  
[coturn](https://github.com/coturn/coturn)



```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon-32x32.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page title</title>
</head>
```

So if we want to add animation, we have to change this title tag using JavaScript.

# Code
As for my portfolio page, my animation code is like this.

```JavaScript
const titles = ["⭐️", "W", "e", "l", "c", "o", "m", "e", "‼️", "⭐️"];

let titleIndex = 0;
let cur = '';
setInterval(() => {
  cur = titleIndex == 0 ? "" : cur + titles[titleIndex - 1];
  document.title = cur + "✈︎";
  titleIndex = (titleIndex + 1) % (titles.length + 1);
}, 500);
```

In this code, I changed the title each 500ms. Finally, I could add animation like this.

![Alt Text](./beginning.png "beginning image")

![Alt Text](./ending.png "ending image")