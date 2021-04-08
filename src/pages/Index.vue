<template>
  <Layout>
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- WordPress List posts -->
    <h2>最新記事</h2>
    <div class="posts">
      <PostCard v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id" :post="edge.node"/>
    </div>
    <Pager :info="$page.allWordPressPost.pageInfo"/>

    <!-- Markdown List posts -->
    <h2>注目記事</h2>
    <div class="posts">
      <PostCard v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

    <!-- <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul> -->
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
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

<script>
import { Pager } from 'gridsome'
// import Post from '~/components/Post.vue'
import Author from '~/components/Author.vue'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    Pager,
    // Post,
    Author,
    PostCard
  },
  metaInfo: {
    title: 'Welcome to my blog :)'
  }
}
</script>

<style lang="scss">
  nav {
    a {
      padding: 10px;
      margin: 5px;
      background-color: #0f2d44;
    }
  }
</style>