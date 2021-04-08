<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

    <LinkWordPressPost />

  </Layout>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    twitterName
  }
}
</static-query>

<script>
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'
import LinkWordPressPost from '~/components/LinkWordPressPost.vue'

export default {
  components: {
    Author,
    PostCard,
    LinkWordPressPost
  },
  metaInfo () {
    return {
      title: 'トップページ',
      meta: [
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
          content: this.$static.metadata.siteUrl
        },
        {
          name: 'og:title',
          content: this.$static.metadata.siteName
        },
        {
          name: 'og:description',
          content: this.$static.metadata.siteDescription
        },
        {
          name: 'og:image',
          content: this.$static.metadata.siteUrl + '/og_image.png'
        },
      ]
    }
  }
}
</script>
