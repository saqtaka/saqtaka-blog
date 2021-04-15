<template>
  <Layout2>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
      </h1>

      <PostMeta :post="$page.post" />

    </div>

    <v-container>
      <v-row>
        <!-- <v-col
          cols="12"
          md="3"
        >
          <AdRemenu />
        </v-col> -->
        <v-col
          cols="12"
          md="12"
        >

          <div class="post content-box">
            <div class="post__header">
              <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image" />
            </div>

            <div class="post__content" v-html="$page.post.content" />

            <div class="post__footer">
              <PostTags :post="$page.post" />
            </div>
          </div>

          <div class="post-comments">
            <!-- Add comment widgets here -->
          </div>
        </v-col>
        <!-- <v-col
          cols="12"
          md="3"
        >
          <AdRemenu />
        </v-col> -->
      </v-row>
    </v-container>
    <!-- <Author class="post-author" /> -->
  </Layout2>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'
import AdRemenu from '~/components/AdRemenu.vue'
import Layout2 from '~/layouts/Default2.vue'

export default {
  components: {
    Author,
    PostMeta,
    PostTags,
    AdRemenu,
    Layout2
  },
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        },
        {
          name: 'twitter:card',
          content: "summary_large_image"
        },
        {
          name: 'twitter:site',
          content: this.$static.metadata.twitterName
        },
        {
          name: 'twitter:creator',
          content: this.$static.metadata.twitterName
        },
        {
          name: 'og:url',
          content: this.$static.metadata.siteUrl + this.$page.post.path
        },
        {
          name: 'og:title',
          content: this.$page.post.title
        },
        {
          name: 'og:description',
          content: this.$page.post.description
        },
        {
          name: 'og:image',
          content: this.$static.metadata.siteUrl + this.$page.post.cover_image.src
        },
      ]
    }
  }
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "D. MMMM YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteUrl
    twitterName
  }
}
</static-query>
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

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
