---
title: How to write Java 17.
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

In old version, we have to use 'Collectors.toList()' to generate a list from stream like this.

```Java
// old version
List<String> list = someList.stream().collect(Collectors.tolist());
```

But in Java17, we don't need to use 'Collectors.toList' and we can generate only use 'toList()' like this.

```Java
// new version
var list = someList.stream().toList();
```

## Text block
In old version, to write sentences using new line, we have to write like this. It is inconvinience compared to other programing languages.

```Java
// old version
String s = "blabla \n"
        + "new line1 \n"
        + "new line2";
```

But in Java17, we can write like this. It is called 'Text Block'.
```Java
// new version
String s = 
    """
    blabla
        new line1 with an indent
        new line2 with an indent
    """
```

