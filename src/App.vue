<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center title">
        Emoji Commit
      </div>

      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>mdi-translate</v-icon>
            <span class="subtitle-1 text-capitalize font-weight-light hidden-sm-and-down">{{
              currentLang.name
            }}</span>
            <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="lang in langs" :key="lang.name" @click="changeLang(lang)">
            <v-list-item-title>{{ lang.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn href="https://github.com/GFwer/fawen-emoji" target="_blank" text>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

const list = [
  { name: 'English', value: 'en' },
  { name: '简体中文', value: 'zh_CN' }
];
export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    currentLang: list[0],
    langs: list
  }),
  computed: {
    getLangName() {
      return '123';
    }
  },
  methods: {
    changeLang(item) {
      this.currentLang = item;
      this.$i18n.locale = item.value;
    }
  }
};
</script>
