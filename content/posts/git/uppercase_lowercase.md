---
title: "Gitリポジトリの大文字小文字問題"
date: 2021-04-19
published: true
slag: 'uppercase_lowercase'
category: 'git'
tags: ['Git']
series: false
cover_image: ../images/sixteen-miles-out-lthWC8oevDg-unsplash_3.jpg
canonical_url: false
description: ""
---
# Gitリポジトリの大文字小文字問題
ファイル名の頭文字を大文字から小文字に変えるような時に役に立ちます。

## 【Step1】gitで大文字と小文字の違いを認識するようにする
gitで大文字と小文字の違いを認識するようにする。
```bash
git config core.ignorecase false
```

## 【Step2】ファイル整理
大文字と小文字の違いが認識されるようになる。
ここでいったんコミットするなどして整理する。

## 【Step3】設定をもとに戻す

```bash
git config core.ignorecase true
```

## core.ignoreCaseって何?

```
git config --help
```

ヘルプで調べてみました。
大文字小文字の差を吸収してくれるパラメータ見たいですね。

```
       core.ignoreCase
           Internal variable which enables various workarounds to enable Git to work better on filesystems that are not case sensitive, like APFS, HFS+, FAT,
           NTFS, etc. For example, if a directory listing finds "makefile" when Git expects "Makefile", Git will assume it is really the same file, and continue
           to remember it as "Makefile".

           The default is false, except git-clone(1) or git-init(1) will probe and set core.ignoreCase true if appropriate when the repository is created.

           Git relies on the proper configuration of this variable for your operating and file system. Modifying this value may result in unexpected behavior.
```

DeepLで調べてみました。

```
           APFS、HFS+、FAT、NTFSなど、大文字小文字を区別しないファイルシステム上でGitがうまく動作するようにするための様々な回避策を可能にする内部変数です。
           NTFSなど。たとえば、Gitが "Makefile "を期待しているときにディレクトリ・リストで "makefile "を見つけた場合、Gitはそれが実際には同じファイルであると仮定して、それを "Makefile "として記憶し続けます。
           Makefile" として記憶し続けます。

           デフォルトは false です。ただし、git-clone(1) や git-init(1) はリポジトリの作成時に core.ignoreCase を調べて必要に応じて true に設定します。

           Git は、OS やファイルシステムに応じたこの変数の適切な設定を信頼しています。この値を変更すると、予期しない動作をする可能性があります。

www.DeepL.com/Translator（無料版）で翻訳しました。
```