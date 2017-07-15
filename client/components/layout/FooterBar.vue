<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>Tasks by <i class="mdi mdi-rocket"></i>AMZtracker</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@import '~bulma/sass/utilities/mixins';

.footer {
  margin-left: 180px;

  @include mobile() {
    margin-left: 0;
  }

  .social a {
    border-bottom: none !important;
  }

  .fa.fa-heart {
    color: red;
  }
}
</style>
