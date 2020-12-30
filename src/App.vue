<template>
  <div class="app">
    我是app首页
    <Button type="primary" @click="btn">Display dialog box</Button>
    <About @changeValue="changeValue" :title1="isShow"></About>

    <Button @click="showModal = true">Display dialog box</Button>
    <About1 v-model="showModal"></About1>
  </div>
</template>

<script>
import About from '@/views/About.vue'
import About1 from '@/views/About1.vue'
export default {
  data () {
    return {
      isShow: false,
      showModal: false
    }
  },
  methods: {
    btn () {
      this.isShow = true
      console.log('0000')
    },
    changeValue (value) {
      console.log(value)
      this.isShow = value
    }
  },
  components: {
    About,
    About1
  }
}
</script>

<style>

</style>
