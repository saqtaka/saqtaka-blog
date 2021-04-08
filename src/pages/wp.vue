<template>
  <Layout>
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard v-for="edge in $page.allWordPressPost.edges" :key="edge.node.id" :post="edge.node"/>
    </div>

    <!-- <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul> -->
    <Pager :info="$page.allWordPressPost.pageInfo"/>
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