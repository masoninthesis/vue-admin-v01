<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item hidden-md-up" @click="toggleSidebar({opened: !sidebar.opened})">
            <i class="fa fa-bars" aria-hidden="true" v-show="!sidebar.hidden"></i>
          </a>
        </div>
        <div class="nav-center">
          <a class="nav-item hero-brand" href="/">
            <img src="~assets/logo.svg" :alt="pkginfo.description">
            <!-- <tooltip :label="'v' + pkginfo.version" placement="right" type="success" size="small" :no-animate="true" :always="true" :rounded="true"> -->
              <div class="hidden-sm-down">
                <span class="vue">Vue</span><strong class="admin">Tasks</strong>
              </div>
            <!-- </tooltip> -->
          </a>
        </div>
        <div class="nav-right is-flex">
          <div class="flex-c-c">
            <i class="mdi mdi-account-circle"></i>
            <router-link v-if="!$auth.check()" to="/login" class="nav-item">Login</router-link>
            <a v-if="$auth.check()" @click="logout" class="nav-item">Logout</a>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import Tooltip from 'vue-bulma-tooltip'
import { mapGetters, mapActions } from 'vuex'

export default {

  components: {
    Tooltip
  },

  props: {
    show: Boolean
  },

  computed: mapGetters({
    pkginfo: 'pkg',
    sidebar: 'sidebar'
  }),

  methods: {
    ...mapActions([
      'toggleSidebar'
    ]),
    logout () {
      this.$auth.logout({
        redirect: 'Home',
        makeRequest: false
        // params: {},
        // success: function () {},
        // error: function () {},
        // etc...
      })
    }
  }
}
</script>

<style lang="scss">
  @import '~bulma/sass/utilities/variables';
  @import '../../assets/styles/common/variables';

  .app-navbar {
    background-color: $brand-primary;
    position: fixed;
    min-width: 100%;
    z-index: 1024;

    a {
      color: white;
    }

    .container {
      margin: auto 10px;
    }

    .nav-right {
      align-items: stretch;
      align-items: stretch;
      flex: 1;
      justify-content: flex-end;
      overflow: hidden;
      overflow-x: auto;
      white-space: nowrap;
    }
  }

  .hero-brand {
    .vue {
      margin-left: 10px;
      color: #36AC70;
    }
    .admin {
      color: white;
    }
  }
</style>
