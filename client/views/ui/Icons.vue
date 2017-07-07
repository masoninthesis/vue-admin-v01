<template>
  <!-- <div class="tile is-ancestor">
    <div class="tile is-parent is-6">
      <article class="tile is-child box">
        <h1 class="title">Font Awesome</h1>
        <h3 class="subtitle">
          <a href="http://fontawesome.io/examples/">More Examples</a>
        </h3>
        <div class="content">
          <p>
            <i class="fa fa-camera-retro"></i>
          </p>
          <p>
            <i class="fa fa-camera-retro fa-lg"></i> fa-lg
          </p>
          <p>
            <i class="fa fa-camera-retro fa-2x"></i> fa-2x
          </p>
          <p>
            <i class="fa fa-camera-retro fa-3x"></i> fa-3x
          </p>
          <p>
            <i class="fa fa-camera-retro fa-4x"></i> fa-4x
          </p>
          <p>
            <i class="fa fa-camera-retro fa-5x"></i> fa-5x
          </p>
        </div>
      </article>
    </div>

    <div class="tile is-parent is-6">
      <article class="tile is-child box">
        <h1 class="title">Material Design Icons</h1>
        <h3 class="subtitle">
          <a href="https://materialdesignicons.com">More Examples</a>
        </h3>
        <div class="content">
          <p>
            <i class="mdi mdi-face"></i>
          </p>
          <p>
            <i class="mdi mdi-face mdi-18px"></i> mdi-18px
          </p>
          <p>
            <i class="mdi mdi-face mdi-24px"></i> mdi-24px
          </p>
          <p>
            <i class="mdi mdi-face mdi-36px"></i> mdi-36px
          </p>
          <p>
            <i class="mdi mdi-face mdi-48px"></i> mdi-48px
          </p>
        </div>
      </article>
    </div>
  </div> -->

  <div class="col-sm-9" id="icons">
    <div class="row tile is-ancestor">
      <transition name="slide" type="animation">
          <div class="col-sm" v-show="show2a">
            <div class="card p-4">
              <!-- <Component2a></Component2a> --> Component2a
              <button class="btn btn-secondary my-3" @click="show2b = !show2b">Show Component 2b</button>
              <button class="btn btn-secondary my-3" @click="show2b = !show2b">Show Component 2b</button>
              <button class="btn btn-secondary my-3" @click="show2b = !show2b">Show Component 2b</button>
              <button class="btn btn-secondary my-3" @click="show2b = !show2b">Show Component 2b</button>
              <button class="btn btn-secondary my-3" @click="show2b = !show2b">Show Component 2b</button>
              <button class="btn btn-secondary my-3" @click="show2b = !show2b">Show Component 2b</button>
              <button class="btn btn-secondary my-3" @click="show2b = !show2b">Show Component 2b</button>
              <button class="btn btn-secondary my-3" @click="show2b = !show2b">Show Component 2b</button>
            </div>
          </div>
      </transition>

      <transition name="slide" type="animation">
          <div class="col-sm" v-show="show2b">
            <div class="card p-4">
              <!-- <Component2b></Component2b> -->Component2b
              <button class="btn btn-primary my-3" @click="show2b = !show2b">Close Component 2b</button>
              <textarea name="name" rows="8" cols="80"></textarea>
            </div>
          </div>
      </transition>
    </div>
  </div>


</template>

<script>
  // import Component2a from './Component2a.vue';
  // import Component2b from './Component2b.vue';

  export default {
    data () {
      return {
        show2a: true,
        show2b: false
      }
    }
    // methods: {
    //
    // },
    // components: {
    //   Component2a,
    //   Component2b
    // }
  }
</script>

<style lang="scss">
$mdi-font-path: '~mdi/fonts/';
@import "~mdi/scss/materialdesignicons.scss";

.slide-enter {
      opacity: 0;
  }

  .slide-enter-active {
      animation: slide-in .5s ease-out forwards;
      transition: all .5s;
  }

  .slide-leave {

  }

  .slide-leave-active {
      animation: slide-out .5s ease-out forwards;
      transition: all .5s;
      opacity: 0;
      /*position: absolute;*/
  }

  .slide-move {
      transition: all .5s;
  }

  @keyframes slide-in {
      from {
          transform: translateX(20px);
      }
      to {
          transform: translateX(0);
      }
  }

  @keyframes slide-out {
      from {
          transform: translateX(0);
      }
      to {
          transform: translateX(20px);
      }
  }
</style>
