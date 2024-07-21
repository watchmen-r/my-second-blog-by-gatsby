---
title: About keytool, openssl, cacert.
date: "2015-05-28T22:40:32.169Z"
description: When using the maven to install libraries, I met some problems to set Java. This solution is very interesting for me so that I note this.
featuredImage: ./java.jpg
---

To install libraries using the maven, perhaps we have to install a client certification in the cacert which is in the Java using keytool command and openssl.

## prerequisite knowledge 

- openssl
  - This is a open source command line tool that is commonly used to generate private keys. In this case, we use it to get the certification.
- keytool
  - This is used to install a client certification in cacert, which is located in the Java.

## Why do we use these commands
We have to install SSL certification to JDK to install libraries from local repo using the maven(or maybe gradle). Java has 'cacert' and we install SSL certification using openssl and keytool command.

The command to get a ssl certification is like this.
```command
openssl s_client -showcerts -connect [repo URL]
```

The detail of the openssl is this link.  
[openssl](https://www.tohoho-web.com/ex/openssl.html)

If we access the repo site using chrome. We can get the SSL certification from the key mark which is left side of the URL.

The command to install the certification to the 'cacert' is like this.
```command
keytool -importcert -keystore [the path of the cacert in JDK] -file [the path of the SSL certification] -storepass changeit -alias [alias name]
```
