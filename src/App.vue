<template>
  <div>
    <input v-model="message" type="text" />
    <h2 :class="$style.app">{{ message }}</h2>
    <h3>Some Other Message!!</h3>
  </div>
</template>

<script>
console.log('from line 10 in App.js')
export default {
  data() {
    return {
      message: 'Hello Universe',
    }
  },
  created() {
    console.log(this.$style.app)
  },
}
</script>

<style src="ress/ress.css"></style>

<style lang="scss" module>
.app {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: blue;
}
</style>
