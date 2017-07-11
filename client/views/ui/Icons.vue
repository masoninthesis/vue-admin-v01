<template>

  <div class="" id="icons">
    <div class="row tile is-ancestor">
      <transition name="slide" type="animation">
          <div id="item-list" class="col-sm" v-show="show2a">
            <div class="card">
              <div class="card-header flex-s-b">
              <!-- <Component2a></Component2a> --> Component2a
              </div>
              <ul class="list-group">
                <li class="list-group-item flex-s-b is-active" @click="show2b = !show2b">
                  <div class="flex-c-c">
                    <i class="mdi mdi-check mr-3"></i>
                    List item #1
                  </div>
                  <div class="flex-c-c">
                    <span class="badge badge-default">Unicorn smasher</span>
                    <i class="mdi mdi-brightness-1 ml-3"></i>
                  </div>
                </li>
                <li class="list-group-item flex-s-b" @click="show2b = !show2b">
                  <div class="flex-c-c">
                    <i class="mdi mdi-check mr-3"></i>
                    List item #2
                  </div>
                  <div class="flex-c-c">
                    <span class="badge badge-default">AMZ Tracker</span>
                    <i class="mdi mdi-brightness-1 ml-3"></i>
                  </div>
                </li>
                <li class="list-group-item flex-s-b" @click="show2b = !show2b">
                  <div class="flex-c-c">
                    <i class="mdi mdi-check mr-3"></i>
                    List item #3
                  </div>
                  <div class="flex-c-c">
                    <span class="badge badge-default">Unicorn Smasher</span>
                    <i class="mdi mdi-brightness-1 ml-3"></i>
                  </div>
                </li>
              </ul>
              <!-- <table class="table is-striped">
                <thead>
                  <tr>
                    <th>th 1</th>
                    <th>th 2</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>td 1</td>
                    <td>td 2</td>
                  </tr>
                </tbody>
              </table> -->
            </div>
          </div>
      </transition>

      <transition name="slide" type="animation">
          <div id="item" class="col-sm" v-show="show2b">
            <div class="card">
              <div class="card-header flex-s-b">
                <div class="flex-c-c">
                  <i class="fa fa-check mr-3"></i>
                  <div class="">Component2b</div>
                </div>
                <div class="flex-c-c">
                  <i class="mdi mdi-brightness-1 mr-3"></i>
                  <button type="button" class="close" @click="show2b = !show2b"><span>&times;</span></button>
                </div>
              </div>
              <div class="card-block">
                <datepicker :inputClass="{ test: true }" :config="{ wrap: true, disable: [ { from: '2016-07-06', to: '2016-07-09' }, '2016-07-24' ], minDate: 'today' }" readonly>
                  <a class="button" data-toggle><i class="fa fa-calendar"></i></a>
                  <a class="button" data-clear><i class="fa fa-close"></i></a>
                </datepicker>
                <span class="row comment">Example comments go here</span>
                <span class="row comment">Example comments go here</span>
                <span class="row comment">Example comments go here</span>
                <div class="form-group">
                  <label class="sr-only" for="commentsTextarea">Comments</label>
                  <textarea class="form-control" id="commentsTextarea" rows="5"></textarea>
                </div>
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
