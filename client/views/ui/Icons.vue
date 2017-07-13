<template>
  <div class="" id="icons">
    <div class="row tile is-ancestor">
      <transition name="slide" type="animation">
          <div id="task-list" class="col-sm" v-if="show2a" @click="show2b = !show2b">
            <tasklist></tasklist>
          </div>
      </transition>

      <transition name="slide" type="animation">
          <div id="task" class="col-sm" v-if="show2b">
            <task></task>
          </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import Tasklist from '../../components/layout/Tasklist'
  import Task from '../../components/layout/Task'

  export default {
    components: {
      Tasklist,
      Task
    },
    data () {
      return {
        show2a: true,
        show2b: false
      }
    }
  }
</script>
