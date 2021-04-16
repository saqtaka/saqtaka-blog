<template>
  <Layout2 :show-logo="false">
    <!-- WordPress List posts -->
    <div class="posts">
      <v-container>
        <v-row>
          <v-col v-for="edge in $page.posts.edges" :key="edge.node.id" cols="12" sm="6" md="4">
            <div>
              <PostCard4 :post="edge.node"/>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </Layout2>
</template>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "YYYY/MM/DD")
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
import PostCard4 from '~/components/PostCard4.vue'
import Layout2 from '~/layouts/Default2.vue'

export default {
  components: {
    Layout2,
    PostCard4
  },
  created: function () {
    console.log(this.$page)
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

<style lang="scss">
</style>
 