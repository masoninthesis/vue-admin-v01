<template>
  <div class="card">
    <div class="card-header flex-s-b">
      <div class="flex-c-c">
        <i class="mdi mdi-check mr-3"></i>
      </div>
      <div class="">Complete Item Card</div>
      <button type="button" class="close" @click="show2b = !show2b"><i class="mdi mdi-close"></i></button>
    </div>
    <div class="card-block">
      <div class="flex-s-b pl-3">
        <div class="team flex-c-c">
          <div class="assigned">ML</div>
          <div class="assigned">JG</div>
        </div>
        <datepicker :inputClass="{ test: true }" :config="{ wrap: true, disable: [ { from: '2016-07-06', to: '2016-07-09' }, '2016-07-24' ], minDate: 'today' }" readonly>
          <a class="button" data-toggle><i class="mdi mdi-calendar"></i></a>
          <a class="button" data-clear><i class="mdi mdi-close"></i></a>
        </datepicker>
      </div>
      <div class="comment-group">
        <!-- <div class="comment checklist">
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
        </div> -->
        <div class="comment">
          <div class="flex-s-b">
            <div class="flex-c-c">
              <i class="mdi mdi-comment-outline mr-3"></i>
              <span>Bullet Colors</span>
            </div>
            <small class="text-muted">June 4th, 2017 <em>at</em> 6:44pm</small>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
              <span>Mason Lawlor was assigned</span>
            </div>
            <small class="text-muted">June 5th, 2017 <em>at</em> 5:23pm</small>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label class="sr-only" for="commentsTextarea">Comments</label>
        <textarea placeholder="Leave a comment here.." class="form-control" id="commentsTextarea" rows="5"></textarea>
        <div class="flex-s-b mt-4">
          <div class="add flex-c-c">
            <button class="btn btn-primary mr-2" name="button">Submit</button>
            <i class="mdi mdi-attachment"></i>
            <i class="mdi mdi-account-plus"></i>
          </div>
          <div class="btn-group priority flex-c-c" data-toggle="buttons">
            <label class="btn btn-sm btn-secondary">
              <input type="radio" name="options" id="option1" autocomplete="off" checked> Low
            </label>
            <label class="btn btn-sm btn-secondary">
              <input type="radio" name="options" id="option2" autocomplete="off"> Medium
            </label>
            <label class="btn btn-sm btn-secondary active">
              <input type="radio" name="options" id="option3" autocomplete="off"> High
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <small class="text-muted mx-auto"><em>Created June 1st, 2017</em></small>
    </div>
  </div>
</template>

<script>
  import Datepicker from 'vue-bulma-datepicker'

  export default {
    components: {
      Datepicker
    },
    data () {
      return {
        value: '2016-12-12'
      }
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
      }
    },
    watch: {
      value (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  }
</script>
