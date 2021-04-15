<template>
  <v-app>
    <v-navigation-drawer app>
      <Author class="ma-4" />
    </v-navigation-drawer>

    <v-app-bar
      app
      color="white"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>saqtaka blog</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
    </v-app-bar>

      <v-main><!-- アプリケーションに適切なgutterを提供します -->
    <!-- <v-sheet id="scrolling-techniques-7" class="overflow-y-auto" max-height="600"> -->
        <v-container fluid><!-- vue-routerを使用している場合 -->
          <!-- <router-view></router-view> -->
          <slot />
        </v-container>
    <!-- </v-sheet> -->
      </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Author from '~/components/Author.vue'

export default {
  components: {
    Author
  },
}
</script>
