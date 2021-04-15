<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <Author class="ma-4" />
      <v-divider />
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar
      app
      color="white"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title scr="/">saqtaka blog</v-toolbar-title>

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
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'mdi-view-dashboard', to: '/' }
      ],
    }
  }
}
</script>
