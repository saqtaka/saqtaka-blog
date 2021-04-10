<template>
  <div>
    <p class="content ma-2">作ったアプリの宣伝</p>
    <div class="post content-box link-box">
      <a href="https://remenu.app/ja/?utm_source=saqtaka&utm_medium=blog&utm_campaign=ad_post"></a>
      <div class="post__header">
        <g-image alt="Cover image" src="~/assets/images/remenu.jpg" />
      </div>
      <h2 class="post__content">Remenu | 習慣を管理できるTODOアプリ</h2>
      <p>習慣化できる確率が大きく上がる、if thenプランで習慣を管理できるWebアプリを作りました。</p>
    </div>
  </div>
</template>

<style lang="scss">
.link-box {
  position: relative;

  a {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  a:hover {
    box-shadow: 0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important;
  }
}

.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}

.content {
  margin: 0 auto;
  max-width: var(--content-width);
}
</style>