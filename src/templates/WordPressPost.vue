<template>
  <Layout>
    <div class="post-title">
      <h1 v-html="$page.wordPressPost.title"/>
    </div>
    <!-- <img
      v-if="$page.wordPressPost.featuredMedia"
      :src="$page.wordPressPost.featuredMedia.sourceUrl"
      :width="$page.wordPressPost.featuredMedia.mediaDetails.width"
      :alt="$page.wordPressPost.featuredMedia.altText"
    /> -->
    <AdRemenu />
    <div class="post content-box">
      <div class="post__header">
      </div>

      <div class="post__content" v-html="$page.wordPressPost.content"/>
      <div class="post__footer">
        <template v-if="$page.wordPressPost.categories.length">
          <h4>Posted in</h4>
          <ul class="list categories">
            <li v-for="category in $page.wordPressPost.categories" :key="category.id" >
              <g-link :to="category.path">{{ category.title }}</g-link>
            </li>
          </ul>
        </template>
        <template v-if="$page.wordPressPost.tags.length">
          <h4>Tags</h4>
          <ul class="list tags">
            <li v-for="tag in $page.wordPressPost.tags" :key="tag.id" >
              <g-link :to="tag.path">{{ tag.title }}</g-link>
            </li>
          </ul>
        </template>
      </div>
    </div>
    <AdRemenu />
    <Author class="post-author" />
  </Layout>
</template>

<page-query>
query WordPressPost ($id: ID!) {
  wordPressPost(id: $id) {
    title
    content
    categories {
      id
      title
      path
    }
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
import AdRemenu from '~/components/AdRemenu.vue'

export default {
  components: {
    Author,
    AdRemenu
  },
  metaInfo () {
    return {
      title: this.$page.wordPressPost.title
    }
  }
}
</script>

<style lang="scss">
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

  .post-author {
    margin-top: calc(var(--space) / 2);
  }
  ul.list {
    list-style: none;
    padding: 0;
  }
  ul.list li {
    display: inline-block;
    margin-right: 0.25em;
  }
  ul.list.tags li a {
    padding: 0.25em 0.5em;
    // background-color: lightgray;
  }
  ul.list.categories li:after {
    content: ',';
    display: inline-block;
  }
  ul.list li:last-child:after {
    content: '';
  }
</style>
