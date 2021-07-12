---
title: javascriptのunshiftメソッドをわかりやすく説明する
date: 2021-07-12
published: true
slag: 'unshift'
category: 'javascript'
tags: ['javascript']
series: false
cover_image: ../images/maria-vojtovicova-_HsNZhNDVOw-unsplash_3.jpg
canonical_url: false
description: ""
---
# javascriptのunshiftメソッドをわかりやすく説明する
## はじめに
javascriptのunshiftメソッドについて噛み砕いて説明します。

## unshiftメソッドとは何か
`unshift`はjavascriptのメソッドです。
どのようなメソッドかというと、

* 配列の最初に要素を追加する
* 追加した後の配列の長さを返す

という特徴があります。

## unshiftメソッドの書き方
unshiftメソッドは下のように書きます。

```
[配列].unshift([追加したい値1], [追加したい値1])
```


## unshiftは配列の最初に追加する

配列とはひとまとまりのデータを一つの変数に格納するためのデータの型です。

```js
const fruits = ['apple', 'banana', 'pear', 'melon', 'watermelon'];

```
のような感じで表現します。

unshiftメソッドは配列の最初に要素を追加します。

例えば、下のようなコードがあったとします。


```js
const fruits = ['apple', 'banana', 'pear'];

console.log('unshiftメソッド実行前')
console.log(fruits);

fruits.unshift('watermelon', 'melon');

console.log('unshiftメソッド実行後')
console.log(fruits);

```
実行すると、

```js
> "unshiftメソッド実行前"
> Array ["apple", "banana", "pear"]
> "unshiftメソッド実行後"
> Array ["watermelon", "melon", "apple", "banana", "pear"]
```
このように値が返ってくると思います。

`"watermelon"`と`"melon"`が増えていますね。

## unshiftの戻り値について
戻り値とは、メソッドが実行された後に返される値のことです。

例えば、

```js
const fruits = ['apple', 'banana', 'pear'];

const returnValue = fruits.unshift('watermelon', 'melon');

console.log(returnValue);
```

のような感じで書きます。
例ではunshiftメソッドの戻り値を`returnValue`に入れて、出力しています。

要素を追加した後の要素数である`5`が出力されると思います。

```
> 5
```
## unshiftの使い道
配列に値を追加する時に使うことができます。

## さいごに
引数を設定しなくてもエラーにはなりませんが、配列には何も追加されません。

```js
const fruits = ['apple', 'banana', 'pear'];

const returnValue = fruits.unshift();

console.log(returnValue);
```

```
> 3
```