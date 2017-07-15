<template>
  <div class="content has-text-centered">

    <h1 class="is-title is-bold">Vue Tasks</h1>

    <p>
      <strong>{{ description }}</strong>
    </p>

    <p>Supports Vue 2.0 Bootstrap 4 (alpha6), and Bulma 0.3!</p>
  </div>
</template>

<script>
export default {

  data () {
    return this.$store.state.pkg
  }

}
</script>

<style lang="scss" scoped>
.is-title {
  text-transform: capitalize;
}
</style>
