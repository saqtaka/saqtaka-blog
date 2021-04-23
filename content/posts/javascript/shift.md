---
title: javascriptのshiftメソッドをわかりやすく説明する
date: 2021-04-23
published: true
slag: 'shift'
category: 'javascript'
tags: ['javascript']
series: false
cover_image: ../images/maria-vojtovicova-_HsNZhNDVOw-unsplash_2.jpg
canonical_url: false
description: ""
---
# javascriptのshiftメソッドをわかりやすく説明する
## はじめに
javascriptのshiftメソッドについて噛み砕いて説明します。

## shiftメソッドとは何か
`shift`はjavascriptのメソッドです。
どのようなメソッドかというと、

* 配列から最初の要素を削除する
* 削除して要素を戻り値として返す

という特徴があります。

## shiftメソッドの書き方
shiftメソッドは下のように書きます。

```
[配列].shift()
```


## shiftは配列の最初を削除する

配列とはひとまとまりのデータを一つの変数に格納するためのデータの型です。

```js
const fruits = ['apple', 'banana', 'pear', 'melon', 'watermelon'];

```
のような感じで表現します。

shiftメソッドは最初の要素を削除します。

例えば、下のようなコードがあったとします。


```js
const fruits = ['apple', 'banana', 'pear', 'melon', 'watermelon'];

console.log('shiftメソッド実行前')
console.log(fruits);

fruits.shift();

console.log('shiftメソッド実行後')
console.log(fruits);

```
実行すると、

```js
> "shiftメソッド実行前"
> Array ["apple", "banana", "pear", "melon", "watermelon"]
> "shiftメソッド実行後"
> Array ["banana", "pear", "melon", "watermelon"]
```
このように値が返ってくると思います。

`"apple"`が減っていますね。

## shiftの戻り値について
戻り値とは、メソッドが実行された後に返される値のことです。

例えば、

```js
const fruits = ['apple', 'banana', 'pear', 'melon', 'watermelon'];

const returnValue = fruits.shift();

console.log(returnValue);
```

のような感じで書きます。
例ではshiftメソッドの戻り値を`returnValue`に入れて、出力しています。

一番最初に追加した`"apple"`が出力されると思います。


## shiftの使い道
配列をループで回しながらデータを取り出すときに使うことができます。


```js
const fruits = ['apple', 'banana', 'pear', 'melon', 'watermelon'];

while( (i = fruits.shift()) !== undefined ) {
    console.log(i);
}
```
結果はこのようになると思います。

```js
> "apple"
> "banana"
> "pear"
> "melon"
> "watermelon"
```

## さいごに
何もデータが入ってない、空の配列にshiftメソッドを実行しても`undefined`になってしまうので注意してください。
