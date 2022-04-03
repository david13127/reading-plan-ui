<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Button label="点击" @click="showMessage()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const HelloWorld = defineComponent({
  props: {
    msg: String
  },
  methods: {
    showMessage () {
      this.$toast.add({
        severity: 'success',
        summary: 'Success Message',
        detail: 'success',
        life: 3000
      })
    }
  }
})
export default HelloWorld

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
