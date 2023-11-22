---
title: About keytool, openssl, cacert.
date: "2023-11-22T22:40:32.169Z"
description: Unfortunately, there is a few valuable info for new Java in Japanese. So sometimes I confused how to write the Java considering what is the modern writing. So not to confuse, I will write this article.
---

Unfortunately, there is a few valuable info for new Java in Japanese. So sometimes I confused how to write the Java considering what is the modern writing. So not to confuse, I will write this article.

## Create a list

In old version, we have to instantiate a list and add value, or generate list from an array.
This is an example of old writing.
```Java
// old version
List<String> list = Arrays.asList("aaa", "bbb");
```

In Java17, we can create list like this.
```Java
// new version
var list = List.of("aaa", "bbb");
```

## Create a list from stream
TBD