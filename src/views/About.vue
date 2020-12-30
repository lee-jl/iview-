<template>
    <div class="about">
      <Modal
          :value="title1"
          title="Common Modal dialog box title"
           @on-ok="ok"
           @on-cancel="cancel"
         >
          <p>Content of dialog</p>
          <p>Content of dialog</p>
          <p>Content of dialog</p>
      </Modal>
    </div>
</template>
<script>
    export default {
        props: {
            title1: {
                type: Boolean,
                required: true
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
                this.$emit('changeValue', !this.title1)
            },
            cancel () {
                this.$Message.info('Clicked cancel');
                this.$emit('changeValue', !this.title1)
            }
        }
    }
</script>
