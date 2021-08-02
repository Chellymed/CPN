<template>
  <div>
    <app-nav></app-nav>
    <div
      class="row "
      style="background-color: #F7F7FF; border-bottom-right-radius: 30%; margin-right: 0px;margin-left: 0px;"
    >
      <div class="col" style="padding-top: -100px">
        <img
          :src="require('../assets/image.png')"
          alt=""
          height="750"
          style="background-color: #F7F7FF;  padding-top: -150px"/>
      </div>
      <div
        class="col"
        style=" background-color: #F7F7FF; margin-top: 70px; border-bottom-right-radius: 30%;">
        <tr></tr>
        <tr></tr>
        <h1 style="color: #21075e; font-weight: 700; font-size: 80px">
          TPE-PME
        </h1>
        <tr></tr>
        <h1 style="color: #21075e; font-weight: 700; font-size: 40px">
          Vos subvention numérique
        </h1>
        <h1 style="color: #21075e; font-weight: 700; font-size: 40px">
          sans conditions
        </h1>
        <tr></tr>
        <div style="display: flex;" >
          <div class="search-container" style="font-size: 40px;  background-color: #F7F7FF">
            <input
              style="background-color: #F7F7FF"
              type="text"
              name="search"
              placeholder="Quel est le type de subvention souhaitez vous"
              class="search-input"
            />
            <a href="#" class="search-btn">
              <i class="fas fa-search" style="color: #21075e"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center" style="margin-right: 0">
      <div class="col-lg-4">
        <div class="row">
          <a style="color: #21075e; font-weight: 300; font-size: 25px"
            >Notre succés</a
          >
        </div>
        <div class="row">
          <a style="color: #21075e; font-weight: 400; font-size: 25px"
            >Peut importe votre secteur d'activité</a
          >
        </div>

        <div class="row">
          <a style="color: #21075e; font-weight: 400; font-size: 25px"
            >nous vous offrons une subvention.</a
          >
        </div>
      </div>

      <div class="col-md-2">
        <div class="row">
          <a style="font-weight: 500; padding-top: 15px; font-size: 40px"
            >562+</a
          >
        </div>

        <div class="row">
          <a style="color: #21075e; font-weight: 500; font-size: 25px"
            >Entreprises</a
          >
        </div>
      </div>
      <div class="col-md-2">
        <h1 style="font-weight: 500; padding-top: 15px; font-size: 40px">
          10K+
        </h1>
        <a style="color: #21075e; font-weight: 500; font-size: 25px"
          >Subvention</a
        >
      </div>
      <div class="col-md-2">
        <h1 style="font-weight: 500; padding-top: 15px; font-size: 40px">
          200K+
        </h1>
        <a style="color: #21075e; font-weight: 500; font-size: 25px"
          >Adhérents</a
        >
      </div>
      <div class="row">
        <a
          style="
            padding-top: 50px;
            color: #21075e;
            font-weight: 500;
            font-size: 35px;
            padding-left: 150px;
          "
          >Choisir ma région</a
        >
      </div>
      <div class="row justify-content-md-center">
        <img
          src="../assets/imagesFr.jpg"
          alt=""
          width="150"
          height="450"
          style="width: 600px"
        />
      </div>
      <div class="row justify-content-md-center" style="padding-top: 80px">
        <img src="" alt="" height="8" style="width: 1230px" />
      </div>

      <div class="row" style="padding-top: 50px">
        <a
          style="
            color: #21075e;
            font-weight: 500;
            font-size: 35px;
            padding-left: 150px;
          "
          >Actualité</a
        >
      </div>

      <div class="row" style="padding-top: 40px; padding-left: 200px">
        <img
          src="../assets/and.jpg"
          alt=""
          style="width: 400px; height: 250px"
        />
        <img
          src="../assets/image4.jpg"
          alt=""
          style="width: 400px; height: 250px"
        />
        <img
          src="../assets/imagebureau.jpg"
          alt=""
          style="width: 400px; height: 250px"
        />
         <a  href="/Actualite" style="font-size: 20px; color: black;   text-decoration: none;"> Lire plus ...</a>
      </div> 
      <div  class="row"  style="padding-left: 1100px">
      </div>
      <div class="row" style="padding-top: 50px">
        <a
          style="
            color: #21075e;
            font-weight: 500;
            font-size: 35px;
            padding-left: 150px;
          ">Nous proposons</a>
      </div>

      <div class="row" style="padding-top: 25px">
        <a
          style="
            color: #21075e;
            font-weight: 150;
            font-size: 25px;
            padding-left: 150px;
          "
          >peut importe votre secteur d'activité nous vous offrons une
          subvention</a
        >
      </div>
      <div class="row" style="padding-left: 150px">
        <div
          class="col"
          style="background-color: #e5e5e5; margin-top: 70px"
        ></div>
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

    }
};
</script>

<style>
#background {
  background-color: #e5e5e5;
}

.search-container {
  background: #e5e5e5;
  height: 30px;
  padding: 10px 20px;
  display: flex;
  border: rgba(10, 46, 253, 0.842);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.8s;
}

.search-container:hover > .search-input {
  width: 400px;
}
.search-container .search-input {
  background: transparent;
  border: none;
  outline: none;
  width: 0px;
  font-weight: 500;
  font-size: 16px;
  transition: 0.8s;
}

.search-container .search-btn .fas {
  color: #000000;
}

@keyframes hoverShake {
  0% {
    transform: skew(0deg, 0deg);
  }
  25% {
    transform: skew(5deg, 5deg);
  }
  75% {
    transform: skew(-5deg, -5deg);
  }
  100% {
    transform: skew(0deg, 0deg);
  }
}

</style>
