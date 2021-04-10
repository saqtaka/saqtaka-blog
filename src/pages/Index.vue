<template>
  <Layout :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- WordPress List posts -->
    <div class="posts">
      <v-container>
        <!-- <v-row>
          <v-col>
            <div class="content">
              <h2>注目記事</h2>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="edge in $page.posts.edges" :key="edge.node.id" cols="6" sm="4" md="3">
            <PostCard3 :post="edge.node"/>
          </v-col>
        </v-row> -->
        <v-row>
          <v-col>
            <div class="content">
              <h2>最新記事</h2>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id" cols="6" sm="4" md="3">
            <PostCard2 :post="edge.node"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="content">
      <Pager :info="$page.allWordPressPost.pageInfo"/>
    </div>
    <!-- Markdown List posts -->
    <!-- <div class="content">
      <h2>注目記事</h2>
    </div> -->
    <!-- <div class="posts">
      <PostCard3 v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div> -->

    <!-- <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul> -->
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 12) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date
        path
        excerpt
      }
    }
  },
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
import { Pager } from 'gridsome'
// import Post from '~/components/Post.vue'
import Author from '~/components/Author.vue'
import PostCard2 from '~/components/PostCard2.vue'
import PostCard3 from '~/components/PostCard3.vue'

export default {
  components: {
    Pager,
    // Post,
    Author,
    PostCard2,
    PostCard3
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
  nav {
    a {
      padding: 10px;
      margin: 5px;
      background-color: var(--bg-content-color);
    }
  }

  .content {
    margin: 0 auto;
    max-width: var(--content-width);
  }
</style>
 