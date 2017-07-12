<template>

  <div class="" id="icons">
    <div class="row tile is-ancestor">
      <transition name="slide" type="animation">
          <div id="item-list" class="col-sm" v-show="show2a">
            <div class="card">
              <div class="card-header flex-s-b">
              <!-- <Component2a></Component2a> -->
              <span>Component2a</span>
              <i class="mdi mdi-plus"></i>
              </div>
              <ul class="list-group">
                <li class="list-group-item flex-s-b is-active" @click="show2b = !show2b">
                  <div class="flex-c-c">
                    <i class="mdi mdi-check mr-3"></i>
                    Complete Item Card
                  </div>
                  <div class="flex-c-c">
                    <span class="badge badge-default">Unicorn smasher</span>
                    <!-- <i class="mdi mdi-brightness-1 danger ml-3"></i> -->
                    <small class="ml-2 text-muted">Due in 2 days</small>
                  </div>
                </li>
                <li class="list-group-item flex-s-b" @click="show2b = !show2b">
                  <div class="flex-c-c">
                    <i class="mdi mdi-check mr-3"></i>
                    Break Into Components
                  </div>
                  <div class="flex-c-c">
                    <span class="badge badge-default">AMZ Tracker</span>
                    <!-- <i class="mdi mdi-brightness-1 success ml-3"></i> -->
                    <small class="ml-2 text-muted">Due in 2 days</small>
                  </div>
                </li>
                <li class="list-group-item flex-s-b" @click="show2b = !show2b">
                  <div class="flex-c-c">
                    <i class="mdi mdi-check mr-3"></i>
                    Style and Fixup Sidebar
                  </div>
                  <div class="flex-c-c">
                    <span class="badge badge-default">AMZ Tracker</span>
                    <!-- <i class="mdi mdi-brightness-1 warning ml-3"></i> -->
                    <small class="ml-2 text-muted">Due in 2 days</small>
                  </div>
                </li>
                <li class="list-group-item flex-s-b" @click="show2b = !show2b">
                  <div class="flex-c-c">
                    <i class="mdi mdi-check mr-3"></i>
                    Branch Repository
                  </div>
                  <div class="flex-c-c">
                    <span class="badge badge-default">AMZ Tracker</span>
                    <!-- <i class="mdi mdi-brightness-1 danger ml-3"></i> -->
                    <small class="ml-2 text-muted">Due in 2 days</small>
                  </div>
                </li>
                <li class="list-group-item flex-s-b" @click="show2b = !show2b">
                  <div class="flex-c-c">
                    <i class="mdi mdi-check mr-3"></i>
                    Cleanup for Prototype Demo
                  </div>
                  <div class="flex-c-c">
                    <span class="badge badge-default">Unicorn Smasher</span>
                    <!-- <i class="mdi mdi-brightness-1 warning ml-3"></i> -->
                    <small class="ml-2 text-muted">Due in 2 days</small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
      </transition>

      <transition name="slide" type="animation">
          <div id="item" class="col-sm" v-show="show2b">
            <div class="card">
              <div class="card-header flex-s-b">
                <div class="flex-c-c">
                  <i class="mdi mdi-check mr-3"></i>

                </div>
                <div class="">Component2b</div>
                <button type="button" class="close" @click="show2b = !show2b"><i class="mdi mdi-close"></i></button>
              </div>
              <div class="card-block">
                <div class="flex-s-b pl-3">
                  <div class="team">
                    <div class="assigned">ML</div>
                  </div>
                  <datepicker :inputClass="{ test: true }" :config="{ wrap: true, disable: [ { from: '2016-07-06', to: '2016-07-09' }, '2016-07-24' ], minDate: 'today' }" readonly>
                    <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
                    <a class="button" data-clear><i class="fa fa-close"></i></a>
                  </datepicker>
                </div>
                <div class="comment-group">
                  <div class="comment checklist">
                    <div class="flex-s-b">
                      <div class="flex-c-c">
                        <i class="mdi mdi-check-all mr-3"></i>
                        <span>Checklist</span>
                      </div>
                      <small class="text-muted">June 4th, 2017 <em>at</em> 6:44pm</small>
                    </div>
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="m-4 checklist-items">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked>
                          Check me out
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked>
                          Check me out
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked>
                          Check me out
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input" checked>
                          Check me out
                        </label>
                      </div>
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input">
                          Check me out
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="comment">
                    <div class="flex-s-b">
                      <div class="flex-c-c">
                        <i class="mdi mdi-comment-outline mr-3"></i>
                        <span>Bullet Colors</span>
                      </div>
                      <small class="text-muted">June 4th, 2017 <em>at</em> 6:44pm</small>
                    </div>
                    <p>Comment goes here..</p>
                  </div>
                  <div class="comment">
                    <div class="flex-s-b">
                      <div class="flex-c-c">
                        <i class="mdi mdi-attachment mr-3"></i>
                        <span>Attach files</span>
                      </div>
                      <small class="text-muted">June 5th, 2017 <em>at</em> 10:12am</small>
                    </div>
                    <div class="placeholder-img flex-c-c mute">img.png</div>
                  </div>
                  <div class="comment">
                    <div class="flex-s-b">
                      <div class="flex-c-c">
                        <i class="mdi mdi-account-convert mr-3"></i>
                        <span>Assign People</span>
                      </div>
                      <small class="text-muted">June 5th, 2017 <em>at</em> 5:23pm</small>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="sr-only" for="commentsTextarea">Comments</label>
                  <textarea palceholder="Write a comment.." class="form-control" id="commentsTextarea" rows="5"></textarea>
                  <button class="btn btn-primary btn-md mt-5" name="button">Submit</button>
                </div>
              </div>
              <div class="card-footer">
                <small class="text-muted mx-auto"><em>Created June 1st, 2017</em></small>
              </div>
            </div>
          </div>
      </transition>
    </div>
  </div>


</template>

<script>
  // import Component2a from './Component2a.vue';
  // import Component2b from './Component2b.vue';
  import Datepicker from 'vue-bulma-datepicker'

  export default {
    components: {
      Datepicker
    },
    data () {
      return {
        show2a: true,
        show2b: false,
        value: '2016-12-12'
      }
    },
    mounted () {
      const { checkIn, checkOut } = this.$refs
      checkIn.datepicker.set('onChange', (selectedDates, dateStr, instance) => {
        checkOut.datepicker.set('minDate', selectedDates[0].fp_incr(1))
      })

      checkOut.datepicker.set('onChange', (selectedDates, dateStr, instance) => {
        checkIn.datepicker.set('maxDate', dateStr)
      })
    },
    computed: {
      today () {
        return new Date()
      },
      maxDate () {
        let d = new Date()
        d.setDate(32)
        return d
      },
      placeholder () {
        return `minDate: today, maxDate: ${this.maxDate.getFullYear()}-${this.maxDate.getMonth() + 1}-${this.maxDate.getDate()}`
      },
      // https://github.com/chmln/flatpickr/blob/gh-pages/src/flatpickr.l10n.zh.js
      l10n () {
        return {
          firstDayOfWeek: 1,
          weekdays: {
            shorthand: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            longhand: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
          },
          months: {
            shorthand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            longhand: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
          }
        }
      }
    },
    watch: {
      value (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
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
