<template>
<div style="background-color: #f9f9ff">
    <app-nav></app-nav>
  <div style="padding-top:40px; padding-bottom: 40px;">
            <div style="background-color: #f9f9ff">
                    <vue-event-calendar  class="act-wrapper shadow rounded-3 bg-white" @day-changed="handleDayChanged"
                          @month-changed="handleMonthChanged" :events="demoEvents">
                    </vue-event-calendar>
            </div>
  </div>
     <app-footer></app-footer>
</div>
</template>

<script>
import AppFooter from './AppFooter.vue';
import AppNav from './AppNav.vue';


export default {
    components:{
        AppFooter,
        AppNav
    },
    data () {
    return {
      demoEvents: [
        {
            date: '2021/07/30', // Required
            title: 'Foo', // Required
            color:"#f29543"
        }, 
        {
        date: '2021/07/31',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }]
    }
  },
  methods:{
   /*   handleDayChanged (data) {
      this.demoEvents.push({
          data:data.date,
          title:"added",
          desc:"desc"
      })
     },*/
    handleMonthChanged (data) {
      alert('month-changed', data)
    },
  }
};
</script>

<style scoped>

</style>
