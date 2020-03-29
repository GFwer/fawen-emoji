<template>
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
          label="Select an Emoji"
          @change="selectChange"
        ></v-select>
      </v-col>
      <v-col cols="12">
        <v-text-field
          ref="input"
          label="Input message"
          :value="inputValue"
          :error="isInputError"
          @change="inputChange"
          @keyup.enter="clickCopy"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn color="primary" block @click="clickCopy">Copy</v-btn>
      </v-col>
    </v-row>
    <v-snackbar top v-model="snackbar" :color="snackbarColor" timeout="2000">{{
      snackbarMsg
    }}</v-snackbar>
  </v-container>
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
    getText: item => item.emoji + item.code,
    selectChange(value) {
      this.isSelectError = false;
      this.selectValue = value;
      this.$refs.input.focus();
    },
    triggerSnackbar(type) {
      this.snackbarColor = type === 'success' ? 'green' : 'red';
      this.isSelectError = type === 'error';
      this.snackbar = true;
      this.snackbarMsg = type === 'success' ? 'Copied!' : 'Emoji must be select!';
    },
    inputChange(value) {
      this.inputValue = value;
    },
    clickCopy() {
      // console.log(`${this.selectValue} ${this.inputValue}`);
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
    }
  }
};
</script>
