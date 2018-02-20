<template>
  <div
    class="signin">
    This is SignIn view
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      posts: [],
      isLoading: false,
      fetchError: null
    }
  },
  watch: {
    '$route': function () {
      console.log('asd')
      var self = this
      self.isLoading = true
      self.fetchData().then(function () {
        self.isLoading = false
      })
    }
  }
}
</script>

<style lang="scss">
.signin{
  margin: 0 auto;
  max-width: 62.4375em;
}

</style>
