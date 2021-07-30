<template>
<div style="background-color:#F7F7FF; padding-buttom:100px" >
    <app-Nav></app-Nav>
    <div style="background-color:#F7F7FF">
        <div id="map-container-google-1" class="z-depth-1-half map-container" style="height: 300px">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.48891527706!2d2.4286297156787553!3d48.98225257929983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66afba5df8bcd%3A0x7e0988d72e2b928f!2s31%20Rue%20du%20Professeur%20Esclangon%2C%2095400%20Arnouville%2C%20France!5e0!3m2!1sfr!2stn!4v1615719219334!5m2!1sfr!2stn" frameborder="0"
                    style="border:0" allowfullscreen>
                </iframe>
        </div>
    </div>
       <div class="row" style="padding-top:100px; padding-buttom: 100px;  ">
                <div class="col" style="padding-left:80px">
                    <div class="row  " >
                        <h4 style="color: #21075e; font-size: 50px;  "> Contactez-nous </h4>
                    </div>
                 <div class="row">
                     <div class="row" style="padding-top:50px">
                        <div class="col">
                            <form>
                                <div class="row">
                                    <div class="col">
                                    <input type="text" style="width: 300px" class="form-control" placeholder="Nom et prénom" >
                                    </div>
                                    <div class="col">
                                    <input type="text" style="width: 300px" class="form-control" placeholder="téléphone">
                                    </div>
                                </div>
                                <div class="row" style="padding-top:20px">
                                   <div class="col">
                                         <input type="text" style="width: 640px" class="form-control" placeholder="EMail" >
                                    </div>
                                </div>
                                 <div class="row" style="padding-top:20px;">
                                    <div class="form-floating" >
                                            <textarea  placeholder="Votre message" rows="4" id="floatingTextarea2" style="height: 100px; border-color: red; width: 640px;"></textarea>
                                    </div>
                                </div>





                <div class="form-group" >
                        <div class="row">
                            <div class="col-md-7">
                                      <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label text-muted" style="font-size:14px" for="flexCheckDefault">
                                           j'ai lu et accepté les CGU et la politique et confidentialité
                                        </label>
                                     </div>
                                    </div>
                                                <div class="col" style="padding-left:70px">
                                                        <a
                                                        class="nav-link active"
                                                        style="
                                                            text-align: center;
                                                            color: white;
                                                            background-color: Red;
                                                            border-radius: 30px;
                                                            font-size:13px;
                                                            width:120px;
                                                            margin-left: 65px;
                                                            height:36px;
                                                        "
                                                        href="#"
                                                        >Envoyer
                                                        </a>
                                            </div>
                                        </div>
                                    </div>
                            </form>
                        </div>
                        
                    </div>
                 </div>
                 
                 
                 </div>
                 <div class="col" style="padding-left:80px" > 
                   <div class="row">
                                     <div class="col-md-7 justify-content-center" > 
                                             <h4 style="color: #21075e; font-size: 45px;"> Notre adresse </h4> 
                                     </div>
                            </div>
                            <div class="row">
                                <div class="col">  
                                    <p>31 Rue du Professeur Esclangon, <br>
                                        95400 Arnouville, France
                                    </p>
                                </div>
                            </div>
                                  
                            <div class="row">
                                <div class="col-md-7 justify-content-center" > 
                                        <h4 style="color: #21075e; font-size: 45px;"> Notre Numéro </h4> 
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">  
                                    <p> 
                                        +33 6 73 46 65 64
                                    </p>
                                </div>
                            </div>
                             <div class="row">
                                <div class="col-md-7 justify-content-center" > 
                                        <h4 style="color: #21075e; font-size: 45px;"> Email </h4> 
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">  
                                    <p> 
                                       votreconsieller@cpn-aide-aux-entreprise.com
                                    </p>
                                </div>
                            </div>
              </div>
       </div>      
       <div style="height: 100px"></div>
                    
                    <app-Footer></app-Footer>
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
.map-container{
overflow:hidden;
padding-bottom:8%;
position:relative;
height:0;
}
.map-container iframe{
left:0;
top:0;
height:100%;
width:100%;
position:absolute;
}
</style>