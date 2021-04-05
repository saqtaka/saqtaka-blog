---
title: 習慣とタスクを同時に管理できるWebアプリを作りました
date: 2021-03-30
published: true
slag: 'developed_remenu'
category: 'Nuxt'
tags: ['Nuxt']
series: false
cover_image: ./images/chris-unger-KL5lzjszXp8-unsplash.jpg
canonical_url: false
description: "習慣とタスクを同時に管理できるremenuというWebアプリを作ったので紹介です。このアプリの特徴は大きく2つあります。* 習慣とTODOを同時に管理 * if thenプランで習慣を管理"
---
# 習慣とタスクを同時に管理できるWebアプリを作りました

こんにちは。サクたかです。
[remenu](https://remenu.app/ja)という、習慣とタスクを同時に管理できるWebアプリを作ったので紹介です。

## サービス紹介
このアプリの特徴は大きく2つあります。

* 習慣とTODOを同時に管理
* if thenプランで習慣を管理

世の中には習慣トラッカーアプリと、TODOアプリが別々に存在しています。このアプリなら習慣とTODOを一つにまとめることができます。

もう一つ、「if thenプラン」という、習慣化を大きく助ける方法を使って習慣を設定することが出来るようにしました。

__if thenプランについて詳しくは[こちらの記事](https://memo.portability.info/post/psychology/if-them-plans/)に書きました。__

## なんで作ったのか
このアプリを作ろうと思った理由の出発点は自分用です。

* 習慣とTODOを同時に管理
* if thenプランで習慣を管理

どちらもの機能も欲しかったけど、既にあるアプリの中には見つけることができなかったので自分で作ることにしました。

## 使った技術とサービス
* Nuxt
* Vuetify 
* Firebase
* AWS SES
* AWS Cloudfront
* Heroku
* Google analytics
* Sentry
* Microsoft Clarity

はじめ、Vueのシングルページアプリケーションとして作っていました。でも初期表示の遅さがどうしても解消出来ず。。Nuxtのssrに切り替えました。

切り替えたらだいぶ早くなったのでよかったです。

## ホスティング先を探す
SPAで作ってた時はFirebase Hostingにデプロイしてましたが、Nuxtにしてからデプロイ先を考え直すことにしました。(Firebase Hostingにもデプロイ出来そうだったけど少しトリッキーなやり方っぽい)

それからHerokuのホビープランを試してみました。HernkuはGithubと連携したらコミットしてPushするたけで自動的にビルドしてくれます。便利すぎ。

Herokuでも大分初期表示早くなったのですが、lighthouseで測定すると、サーバーの応答が2秒かかってて少し遅いよってでてしまいました。

これはHerokuがアメリカのサーバーでデプロイされていることが原因みたいだったので、CDNサービスでAWSのCloudfrontを使ったらバッチリ解消されました。ついでにHerokuでやり辛かったルートドメインもCloudfrontで設定しました。

## 開発スタイル
仕事から帰ってきてから少しずつ開発していきました。SPA時代の最初のコミットが2020年7月1日なので、9ヶ月くらいかかった計算になります。

途中モチベーションを保つのが大変な時期もありました。そんな時は素直に別のプロジェクトのコードを書いてました。

そんな風にできるのが個人開発のいい所だと思います。

## 今後追加したい機能
### 国際化対応
i18nのプラグインを使って途中まで英語の対訳をつくっていたのですが、途中でまず日本語版を完成させようという考えに変わったので。

### 習慣の定着率を表示
わかりやすくこの習慣は何パーセント習慣化出来ていますみたいなカタチで表示させたいです。

### 習慣カタログページ
習慣を実行するタイミングと内容を選んでいけば、簡単にif thenプラン対応の習慣を作れるジェネレーター機能を作りたいです。

## 最後に
自分は元々毎日、コードを書くのが習慣になっていたのですがこのアプリの開発を通して更に習慣化できました。

ぜひ使ってみてください。


[remenu](https://remenu.app/ja)

これからも少しずつ改良していきます。
