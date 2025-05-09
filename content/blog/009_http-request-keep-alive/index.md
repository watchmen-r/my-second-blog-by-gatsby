---
title: About keep-alive
date: "2025-5-6T21:26:32.169Z"
description: I just found an issue with HTTP requests when a request takes a long time, it gets interrupted even though I set a timeout in the HTTP client library (like Axios). I want to document the solution and explain what ‘keep-alive’ is.
featuredImage: ./laptop.png
---

Recently, I was confused about http request which took for a long time. Even though the target backend output log which means returned a response, client could not receive it.  
Seems the connection would be interrupted at TCP level if the target backend had not returned response for a while.

[The mechanism of TCP keep-alive / http keep-alive](https://milestone-of-se.nesuke.com/nw-basic/as-nw-engineer/keepalive-tcp-http/)

# e.g. NAT gateway in AWS
As for the NAT Gateway in AWS, the connection will be interrupted if a request remains idle for more than 350 seconds. 
[trouble shooting](https://repost.aws/ja/knowledge-center/vpc-troubleshoot-nat-gateway-connection)

#### P.S. NLB
Looks like NLB in aws also had **TCP idle timeout** and it might be able to be changed by setting.  
[Introducing TCP idle timeout](https://aws.amazon.com/jp/blogs/news/introducing-nlb-tcp-configurable-idle-timeout/)


# How to set keep alive in axios
I think there are some method to set keep-alive explicitly. In this blog, let's take axios library which is in Javascript/Typescript as an example.

```TypeScript
const axios = require('axios');
const https = require('https');

// Create a custom HTTPS agent with keep-alive enabled.
const agent = new https.Agent({
  keepAlive: true,
  keepAliveMsecs: 30000, // Send keep-alive probes every 30 seconds.
  timeout: 600000, // Setting idle-socket timeout. Default socket timeout would be 2 minutes.
});

// Configure Axios to use the custom agent and set a timeout.
axios.get('https://example.com', {
  httpsAgent: agent,
  timeout: 600000, // Set request timeout to 10 minutes (adjust as needed).
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  // Error process
});
```
