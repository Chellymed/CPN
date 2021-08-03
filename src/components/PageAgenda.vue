<template>
  <div style="background-color: #F7F7FF">
        <app-nav></app-nav>
        <nav-bar-vertical></nav-bar-vertical>
    <div class="row">
      <div class="col-md-6 text-center" >
        <div class="row justify-content-center">
          <div class="col-md-12">
            <h4 style="color: #21075e; font-size: 60px; text-align: center; padding-top:150px" >Choisissez votre <br> rendez-vous </h4>
          </div>
          <div class="col-md-4">
            <a
              class="nav-link active"
              style="
                text-align: center;
                color: white;
                background-color: Red;
                border-radius: 30px;
              "
              href="/Agenda">
              rendez-vous
              </a>
          </div>
        </div>
      </div>
      <div  class="col-md-5 text-center" style="padding-top:90px; padding-buttom:180px" >
          <img  src="../assets/Group.png" class="img-fluid" style="padding-buttom:180px" alt="Responsive image">
      </div>
    </div>
    <div style="padding-top:100px">
    <app-footer></app-footer>
    </div>
  </div> 
</template>

<script>
import AppFooter from './AppFooter.vue';
import AppNav from './AppNav.vue';
import NavBarVertical from "./NavBarVertical.vue";


export default {
    components:{
        AppFooter,
        AppNav,
        NavBarVertical
    }
};
</script>

<style >

</style>
