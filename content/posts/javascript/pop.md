---
title: javascriptのpopメソッドをわかりやすく説明する
date: 2021-04-22
published: true
slag: 'pop'
category: 'javascript'
tags: ['javascript']
series: false
cover_image: ../images/maria-vojtovicova-_HsNZhNDVOw-unsplash.jpg
canonical_url: false
description: ""
---
# javascriptのpopメソッドをわかりやすく説明する
## はじめに
javascriptのpopメソッドについて噛み砕いて説明します。

## popメソッドとは何か
`pop`はjavascriptのメソッドです。
どのようなメソッドかというと、

* 配列から最後の要素を削除する
* 削除して要素を戻り値として返す

という特徴があります。

## popメソッドの書き方
popメソッドは下のように書きます。

```
[配列].pop()
```


## popは配列の最後を削除する

配列とはひとまとまりのデータを一つの変数に格納するためのデータの型です。

```js
const fruits = ['apple', 'banana', 'pear', 'melon', 'watermelon'];

```
のような感じで表現します。

popメソッドは最後の要素を削除します。

例えば、下のようなコードがあったとします。


```js
const fruits = ['apple', 'banana', 'pear', 'melon', 'watermelon'];

console.log('popメソッド実行前')
console.log(fruits);

fruits.pop();

console.log('popメソッド実行後')
console.log(fruits);

```
実行すると、

```js
> "popメソッド実行前"
> Array ["apple", "banana", "pear", "melon", "watermelon"]
> "popメソッド実行後"
> Array ["apple", "banana", "pear", "melon"]
```
このように値が返ってくると思います。

`"watermelon"`が減っていますね。

## popの戻り値について
戻り値とは、メソッドが実行された後に返される値のことです。

例えば、

```js
const fruits = ['apple', 'banana', 'pear', 'melon', 'watermelon'];

const returnValue = fruits.pop();

console.log(returnValue);
```

のような感じで書きます。
例ではpopメソッドの戻り値を`returnValue`に入れて、出力しています。

一番最後に追加した`"watermelon"`が出力されると思います。

## さいごに
何もデータが入ってない、空の配列にpopメソッドを実行しても`undefined`になってしまうので注意してください。
