<template>
  <div style="background-color: #f9f9ff">
    <app-nav></app-nav>
    <div class="container p-4">
      <div class="row justify-content-center">
        <div class="col-md-12">
          <div class="row mb-3 justify-content-center">
            <div class="col-auto">
              <h1 style="font-weight: bold; color: rgb(33, 7, 94)" class="m-0">
                Actualité
              </h1>
            </div>
          </div>
          <div class="row mb-5 g-4 justify-content-center">
            <div class="col-md-4 col-lg-4 col-xl-4">
              <div
                style="overflow: hidden"
                class="act-wrapper shadow rounded-3 bg-white"
              >
                <div style="min-height: 270px;" class="act-img">
                  <img
                    style="width: 100%; object-fit:cover"
                    src="https://bubblemeeting.net/blog/wp-content/uploads/2020/07/people-meeting-brainstorming-blueprint-design-P47QQG6.jpg"
                    alt=""
                  />
                </div>
                <div class="act-content p-2">
                  <div class="act-title">
                    <h5>
                      Numériser votre entreprise n'a jamais été aussi simple !
                    </h5>
                  </div>
                  <div class="act-desc">
                    <p class="m-0">
                      Nous sommes depuis quelques années rentré dans l'ére du
                      digital...
                    </p>
                  </div>
                  <div class="act-button d-flex flex-row justify-content-end">
                    <button style="border: none; background: transparent">
                      Lire la suite..
                    </button>
                  </div>
                  <span style="border-left: 2px solid black; padding-left: 10px"
                    >25 Février</span
                  >
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4">
              <div
                style="overflow: hidden"
                class="act-wrapper shadow rounded-3 bg-white"
              >
                <div class="act-content p-2">
                  <div class="act-title">
                    <h5>
                      Numériser votre entreprise n'a jamais été aussi simple !
                    </h5>
                  </div>
                  <div class="act-desc">
                    <p class="m-0">
                      Nous sommes depuis quelques années rentré dans l'ére du
                      digital...
                    </p>
                  </div>
                  <div class="act-button d-flex flex-row justify-content-end">
                    <button style="border: none; background: transparent">
                      Lire la suite..
                    </button>
                  </div>
                  <span style="border-left: 2px solid black; padding-left: 10px"
                    >25 Février</span
                  >
                </div>
                <div style="min-height: 270px;" class="act-img">
                  <img
                    style="width: 100%; object-fit:cover"
                    src="https://bubblemeeting.net/blog/wp-content/uploads/2020/07/people-meeting-brainstorming-blueprint-design-P47QQG6.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4 col-lg-4 col-xl-4">
              <div
                style="overflow: hidden"
                class="act-wrapper rounded-3 shadow bg-white"
              >
                <div style="min-height: 270px;" class="act-img">
                  <img
                    style="width: 100%; object-fit:cover"
                    src="https://bubblemeeting.net/blog/wp-content/uploads/2020/07/people-meeting-brainstorming-blueprint-design-P47QQG6.jpg"
                    alt=""
                  />
                </div>
                <div class="act-content p-2">
                  <div class="act-title">
                    <h5>
                      Numériser votre entreprise n'a jamais été aussi simple !
                    </h5>
                  </div>
                  <div class="act-desc">
                    <p class="m-0">
                      Nous sommes depuis quelques années rentré dans l'ére du
                      digital...
                    </p>
                  </div>
                  <div class="act-button d-flex flex-row justify-content-end">
                    <button style="border: none; background: transparent">
                      Lire la suite..
                    </button>
                  </div>
                  <span style="border-left: 2px solid black; padding-left: 10px"
                    >25 Février</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mb-5">
            <div class="col-md-12">
              <div class="row justify-content-start">
                <div class="col-auto">
                  <h4 style="font-weight: 700" class="m-0">Autre actualité</h4>
                </div>
                <div class="col-auto">
                  <div class="button-wrapper">
                    <button class="btn btn-left"></button>
                    <button class="btn btn-right"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <hooper style="height: 150px" :infiniteScroll="true" :itemsToShow="2.25">
                <slide>
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img class="rounded-3" style="max-height: 150px; width:100%; object-fit:cover" src="../assets/image4.jpg" alt="">
                        </div>
                        <div class="col-md-7 px-2">
                            <h3 style="font-size:18px">Des SLA pour protéger les apps réseau avec des composent open-source</h3>
                            <p style="font-size:14px;line-height:20px;margin:0">A bien des égards, l'arrivée permanente de logiciels open-source (Open Software, OSS) dans les services IT des entreprises est une formidable aubaine</p>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img class="rounded-3" style="max-height: 150px; width:100%; object-fit:cover" src="../assets/imagebureau.jpg" alt="">
                        </div>
                        <div class="col-md-7 px-2">
                            <h3 style="font-size:18px">Des SLA pour protéger les apps réseau avec des composent open-source</h3>
                            <p style="font-size:14px;line-height:20px;margin:0">A bien des égards, l'arrivée permanente de logiciels open-source (Open Software, OSS) dans les services IT des entreprises est une formidable aubaine</p>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img class="rounded-3" style="max-height: 150px; width:100%; object-fit:cover" src="https://bubblemeeting.net/blog/wp-content/uploads/2020/07/people-meeting-brainstorming-blueprint-design-P47QQG6.jpg" alt="">
                        </div>
                        <div class="col-md-7 px-2">
                            <h3 style="font-size:18px">Des SLA pour protéger les apps réseau avec des composent open-source</h3>
                            <p style="font-size:14px;line-height:20px;margin:0">A bien des égards, l'arrivée permanente de logiciels open-source (Open Software, OSS) dans les services IT des entreprises est une formidable aubaine</p>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img class="rounded-3" style="max-height: 150px; width:100%; object-fit:cover" src="https://bubblemeeting.net/blog/wp-content/uploads/2020/07/people-meeting-brainstorming-blueprint-design-P47QQG6.jpg" alt="">
                        </div>
                        <div class="col-md-7 px-2">
                            <h3 style="font-size:18px">Des SLA pour protéger les apps réseau avec des composent open-source</h3>
                            <p style="font-size:14px;line-height:20px;margin:0">A bien des égards, l'arrivée permanente de logiciels open-source (Open Software, OSS) dans les services IT des entreprises est une formidable aubaine</p>
                        </div>
                    </div>
                </slide>
                <slide>
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img class="rounded-3" style="max-height: 150px; width:100%; object-fit:cover" src="https://bubblemeeting.net/blog/wp-content/uploads/2020/07/people-meeting-brainstorming-blueprint-design-P47QQG6.jpg" alt="">
                        </div>
                        <div class="col-md-7 px-2">
                            <h3 style="font-size:18px">Des SLA pour protéger les apps réseau avec des composent open-source</h3>
                            <p style="font-size:14px;line-height:20px;margin:0">A bien des égards, l'arrivée permanente de logiciels open-source (Open Software, OSS) dans les services IT des entreprises est une formidable aubaine</p>
                        </div>
                    </div>
                </slide>
              </hooper>
            </div>
          </div>
        </div>
      </div>
    </div>
       <app-Footer></app-Footer>
  </div>
</template>

<script>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
export default {
    components:{
        AppNav,
        AppFooter
    }
};
</script>

<style>

.button-wrapper .btn {
  background-color: transparent;
  font-size: 30px;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  position: relative;
}
.button-wrapper .btn.btn-left::after {
  content: "<";
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: black;
  top: 2px;
  font-weight: 800;
  left: 3px;
  width: 25px;
  height: 23px;
  margin: 0;
  padding: 0;
  font-size: 25px;
  line-height: 25px;
}
.button-wrapper .btn.btn-right::after {
  content: ">";
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  color: black;
  top: 2px;
  font-weight: 800;
  left: 3px;
  width: 25px;
  height: 23px;
  margin: 0;
  padding: 0;
  font-size: 25px;
  line-height: 25px;
}
.sliders .images {
  height: 150px;
  object-fit: cover;
}
</style>