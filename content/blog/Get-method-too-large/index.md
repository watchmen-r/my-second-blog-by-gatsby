---
title: Met header is too large when using GET method with the long parameter.
date: "2023-11-21T22:40:32.169Z"
description: Unfortunately, there is a few valuable info for new Java in Japanese. So sometimes I confused how to write the Java considering what is the modern writing. So not to confuse, I will write this article.
featuredImage: ./server.jpg
---

I met the 400 Bad request when using GET method with a long query parameter. Not to forget it, note this with other articles.

# The occurrence
When retrieving data from String boot project by another spring boot project. I met the occurrence suddernly. At first I suspect the long URL has long query parameter affects it. Looks like each browser has their own constraints about the lenght of an URL.  
This is a interesting article about that.
https://qiita.com/nwtgck/items/e83473dc63386d2da3e5

As for the Spring boot, there is a constraints of HTTP header and the long length of URL related to it.

# Solution

Some articles said when use GET method when retrieving data with long query parameters, we should avoid using GET method and use POST method instead.  

But I want to comply the practice of API design. And I found the solution to continue using GET method with long query parameters in Spring Boot.

In property file of Spring boot, we set 'server.max-http-header-size' with enough long length. Actually this default value is '8192'

```property
// set 64kb
server.max-http-header-size=65536
```

These ones are useful articles.
https://thewebspark.com/2017/12/06/tomcat-request-header-too-large-resolved/

https://www.baeldung.com/spring-boot-max-http-header-size
