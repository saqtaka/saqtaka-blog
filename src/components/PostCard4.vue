<template>
  <div>
    <v-card elevation="0" :to="post.path" class="pa-1">
      <div class="post-card">
        <v-img v-if="post.cover_image" class="post-card__image" :src="post.cover_image" />
        <!-- <v-sheet class="ma-3" :height="100"> -->

        <!-- </v-sheet> -->

        <div class="ma-2 pb-3" >
          <div class="text-body-2">{{ post.title }}</div>
          <div class="d-flex flex-row align-end">
            <PostMeta class="mr-2" :post="post" />
            <PostTags :post="post" />
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
// import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import PostMeta from '~/components/PostMeta'

export default {
  components: {
    PostMeta,
    PostTags
  },
  props: ['post']
}
</script>

<style lang="scss">
.post-card {
  // margin-bottom: var(--space);
  // position: relative;

  // &__header {
  //   margin-left: calc(var(--space) * -1);
  //   margin-right: calc(var(--space) * -1);
  //   margin-bottom: calc(var(--space) / 2);
  //   margin-top: calc(var(--space) * -1);
  //   overflow: hidden;
  //   border-radius: var(--radius) var(--radius) 0 0;

  //   &:empty {
  //     display: none;
  //   }
  // }

  &__image {
    // min-width: 100%;
    border-radius: 15px;

    // &:hover {
    //   transform: translateY(-5px);
    //   box-shadow: 1px 10px 30px 0 rgba(0,0,0,.1);
    // } 
  }

  // &__title {
  //   margin-top: 0;
  // }

  // &__tags {
  //   z-index: 1;
  //   position: relative;
  // }

  // &__link {
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   opacity: 0.0;
  //   overflow: hidden;
  //   text-indent: -9999px;
  //   z-index: 0;
  // }
}
</style>
