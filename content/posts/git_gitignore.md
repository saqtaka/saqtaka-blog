---
title: ".gitignoreを使ってgitに含めないファイルを設定する"
date: 2021-04-19
published: true
slag: 'gitignore'
category: 'git'
tags: ['Git']
series: false
cover_image: ./images/sixteen-miles-out-lthWC8oevDg-unsplash_2.jpg
canonical_url: false
description: ""
---
# .gitignoreを使ってgitに含めないファイルを設定する
ログやキャッシュなど、Gitのリポジトリに含めたくないファイルは`.gitignore`を設定するとGitで管理する対象から外すことができます。

## やり方
`.gitignore`の設定のしかたはプロジェクトのルートディレクトリに`.gitignore`という名前のファイルを作ります。

ファイル内に除外したいファイル名を書いていきます。

```
*.log
.cache
.DS_Store
src/.temp
node_modules
dist
.env
.env.*
```

ディレクトリ名や正規表現なんかも使えます。

## 注意事項
既にgitに含めてしまったファイルは後から`.gitignore`で指定して除外しようとしてもきできません。


## さいごに
GitHub公式に各言語やIDEごとのテンプレートがあるので便利です。

[github/gitignore | GitHub](http://github.com/github/gitignore)

