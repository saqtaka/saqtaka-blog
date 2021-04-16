<template>
   <div class="post-meta">
      {{ post.date }}
      <!-- <template v-if="post.timeToRead">
        <strong>{{ post.timeToRead }} min read.</strong>
      </template> -->
    </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: ['post']
  // data () {
  //   return {
  //     displayDate: null
  //   }
  // },
  // created () {
  //   const dayjsDate = dayjs(new Date(this.post.date))
  //   this.displayDate = dayjsDate.format('YYYY/MM/DD')
  //   console.log(this.post.date)
  // }
}
</script>

<style lang="scss">
.post-meta {
  font-size: .8em;
  opacity: .8;
}
</style>