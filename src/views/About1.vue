<template>
    <div class="about1">
      <Modal
          v-model="title2"
          title="Common Modal dialog box title"
           footer-hide
         >
          <p>Content of dialog</p>
          <p>Content of dialog</p>
          <p>Content of dialog</p>
      </Modal>
    </div>
</template>

<script>
    export default {
        name: 'about1',
        data () {
            return {
                title2: false
            }
        },
        props: {
            value: {
                type: Boolean,
                default: false,
                require: true
            }
        },
        watch: {
            value: {
                handler (n) {
                    this.title2 = n
                },
                immediate: true
            },
            title2 (n) {
                this.$emit('input', n)
            }
        }
    }
</script>
