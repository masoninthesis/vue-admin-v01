<template>
  <div class="card">
    <div class="card-header flex-c-c">
      <div class="">List of Tasks</div>
    </div>
    <div class="card-body">
      <ul class="list-group">

        <li class="list-group-item flex-s-b" v-for="item in tasks">
          <div class="flex-c-c">
            <i class="mdi mdi-drag-vertical mr-3"></i>
            <i class="mdi mdi-check mr-3"></i>
            {{ item.task }}
          </div>
          <div class="flex-c-c">
            <span class="badge badge-medium">{{ priority }}</span>
            <small class="ml-2 text-muted">{{ dueDate }}</small>
          </div>
        </li>
        <li class="new-task list-group-item">
          <div class="flex-s-b w-100">
            <i class="mdi mdi-plus mr-3"></i>
            <input class="form-control" type="text" placeholder="Write new task here.." value="">
          </div>
          <!-- <button class="btn btn-accent ml-3" name="button"><i class="mdi mdi-plus mr-1"></i> Add</button> -->
        </li>

        <!-- <li class="list-group-item flex-s-b">
          <div class="flex-c-c">
            <i class="mdi mdi-check mr-3"></i>
            Complete Item Card
          </div>
          <div class="flex-c-c">
            <span class="badge badge-high">High</span>
            <small class="ml-2 text-muted">Due in 2 days</small>
          </div>
        </li> -->
        <!-- <li class="list-group-item flex-s-b">
          <div class="flex-c-c">
            <i class="mdi mdi-check mr-3"></i>
            Break Into Components
          </div>
          <div class="flex-c-c">
            <span class="badge badge-medium">Medium</span>
            <small class="ml-2 text-muted">Due in 2 days</small>
          </div>
        </li> -->
        <!-- <li class="list-group-item flex-s-b is-active">
          <div class="flex-c-c">
            <i class="mdi mdi-check mr-3"></i>
            Style and Fixup Sidebar
          </div>
          <div class="flex-c-c">
            <span class="badge badge-high">High</span>
            <small class="ml-2 text-muted">Due in 2 days</small>
          </div>
        </li> -->

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        priority: 'Medium',
        dueDate: 'Due in 2 days',
        tasks: [
          { task: 'Pass data between components' },
          { task: 'Branch Repository' },
          { task: 'Cleanup for Prototype Demo' }
        ]
      }
    }
  }
</script>
