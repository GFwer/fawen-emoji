<template>
  <div>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-select
            ref="select"
            item-value="code"
            :items="emojiList"
            :value="selectValue"
            :item-text="getText"
            :error="isSelectError"
            :label="$t('input.select')"
            @change="selectChange"
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-text-field
            ref="input"
            :label="$t('input.input')"
            :value="inputValue"
            :error="isInputError"
            @change="inputChange"
            @keyup.enter="clickCopy"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn color="primary" block @click="clickCopy">{{ $t('input.copy') }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar top v-model="snackbar" :color="snackbarColor" :timeout="2000">
      {{ snackbarColor === 'red' ? '😓' : '🎉' }}
      {{ snackbarMsg }}</v-snackbar
    >
    <v-container>
      <span class="title">Emoji List</span>
      <v-row>
        <v-expansion-panels multiple>
          <v-col
            cols="12"
            md="4"
            sm="6"
            xs="12"
            v-for="(item, index) in emojiList"
            :key="item.code"
          >
            <v-expansion-panel>
              <v-expansion-panel-header class="card" @click="panelClick(index)">
                <div class="emoji-container">
                  <div class="emoji">
                    {{ item.emoji }}
                  </div>
                  <div class="emoji-description subtitle-1">
                    <div class="emoji-code">{{ item.name }}</div>
                    <v-scroll-y-reverse-transition leave-absolute hide-on-leave>
                      <div class="emoji-content" v-if="!item.open">
                        {{ $t(`${item.name}.description`) }}
                      </div>
                    </v-scroll-y-reverse-transition>
                  </div>
                </div>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ $t(`${item.name}.description`) }}
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-btn icon color="blue" @click="setEmoji(item.code)" v-on="on">
                      <v-icon>mdi-sticker-emoji</v-icon>
                    </v-btn>
                  </template>
                  <span>{{ $t('input.add') }}</span>
                </v-tooltip>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-col>
        </v-expansion-panels>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import emojiList from './emoji';

export default {
  name: 'HelloWorld',

  data: () => ({
    emojiList,
    selectValue: '',
    inputValue: '',
    snackbar: false,
    snackbarMsg: '',
    snackbarColor: '',
    isInputError: false,
    isSelectError: false
  }),
  methods: {
    getText: item => item.emoji + item.name,
    selectChange(value) {
      this.isSelectError = false;
      this.selectValue = value;
      this.$refs.input.focus();
    },
    triggerSnackbar(type) {
      const isSuccess = type === 'success';
      this.snackbarColor = isSuccess ? 'green' : 'red';
      this.isSelectError = !isSuccess;
      this.snackbar = true;
      this.snackbarMsg = isSuccess ? this.$t('input.success') : this.$t('input.error');
    },
    inputChange(value) {
      this.inputValue = value;
    },
    clickCopy() {
      if (!this.selectValue) {
        // this.$toast
        this.triggerSnackbar('error');
        this.$refs.select.focus();
        return;
      }
      this.$copyText(`${this.selectValue} ${this.inputValue}`).then(
        this.triggerSnackbar('success'),
        () => {}
      );
    },
    panelClick(index) {
      const item = this.emojiList[index];
      this.$set(this.emojiList, index, { ...item, open: !item.open });
    },
    setEmoji(code) {
      this.selectValue = code;
      this.$vuetify.goTo(this.$refs.input, { duration: 300, offset: 100 });
      setTimeout(() => {
        this.$refs.input.focus();
      }, 300);
    }
  }
};
</script>

<style lang="less">
.card {
  padding: 14px 16px;
}
.emoji-container {
  display: flex;
  align-items: center;
  width: calc(100% - 24px);
}
.emoji {
  padding-right: 8px;
  font-size: 28px;
}
.emoji-description {
  display: flex;
  flex-direction: column;
  width: calc(100% - 38px);
  line-height: 1.2 !important;
}
// .emoji-code {
// }
.emoji-content {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
