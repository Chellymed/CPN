<template>
  <div>
        <app-nav></app-nav>


    <div class="row d-flex justify-content-center" style="background-color: #F7F7FF;"> 
        <div class="col d-flex justify-content-center" style="">
            <img src="../assets/adobestock.png" alt="" style="height: 600px;  ">
        </div>
        <div class="col d-flex justify-content-center" style="padding-top: 10px;">
                <form >

             <div class="form-check form-check-inline p-4">
                <input class="form-check-input" style="font-size:15px" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                <label class="form-check-label" for="inlineRadio1">TPE-PME</label>
                </div>
                <div class="form-check form-check-inline p-4">
                <input class="form-check-input" style="font-size:15px" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                <label class="form-check-label" for="inlineRadio2">Agences</label>
                </div>
                <div class="form-check form-check-inline">
                <input class="form-check-input" style="font-size:15px" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
                <label class="form-check-label" for="inlineRadio3">Collectivités</label>
            </div>



                    <div class="form-group" style="width: 400px">
                        <input type="email" class="form-control" style="height: 60px; border:none"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom d'utilisateur">
                    </div>
                    
                    <div class="form-group" style="width: 400px; padding-top:40px;">
                        <input type="email" class="form-control" style="height: 60px; border:none"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" Adress Mail">
                    </div>
                    <div class="form-group" style="width: 400px; padding-top:40px;">
                        <input type="password" class="form-control" style="height: 60px; border:none" id="exampleInputPassword1" placeholder="Mot de passe">
                    </div>
                    <div class="form-group" style="width: 400px; padding-top:40px;">
                        <input type="password" class="form-control" style="height: 60px; border:none" id="exampleInputPassword1" placeholder="Confirmer mot de passe">
                    </div>
                    <div class="form-group" style="width: 400px; padding-top:20px;">
                          <div class="row">
                            <div class="col">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label text-muted" style="font-size:14px" for="flexCheckDefault">
                                            Se souvenir de moi
                                        </label>
                                        </div>
                                   </div>
                                   <div class="col">
                                        <a
                                        class="nav-link active"
                                        style=" text-align: center; color: white; background-color: Red; border-radius: 30px;font-size:13px;
                                            width:120px;
                                            margin-left: 65px;
                                            height:36px;
                                        "
                                        href="#"
                                        >Inscription
                                        </a>
                             </div>
                        </div>
                    </div>
                    <div class="form-group" style="width: 600px; padding-top:20px;"> 
                         <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label text-muted" style="font-size:14px" for="flexCheckDefault">
                                           j'ai lu et accepté les CGU et la politique et confidentialité
                                        </label>
                         </div>
                    </div>
                </form>
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

</style>
