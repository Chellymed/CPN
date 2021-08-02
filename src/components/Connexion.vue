<template>
<div>
        <app-nav></app-nav>
    <div class="row" style="background-color: #F7F7FF; margin-right: 0px;"> 
        <div class="col d-flex justify-content-center" style="">
            <img src="../assets/adobestock.png" alt="" style="height: 600px;  ">
        </div>
        <div class="col  justify-content-center" style="padding-top: 200px;">
                <form >
                    <div class="form-group" style="width: 400px">
                        <input type="email" class="form-control" style="height: 60px; border:none"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom d'utilisateur">
                    </div>
                    <div class="form-group" style="width: 400px; padding-top:40px;">
                        <input type="password" class="form-control" style="height: 60px; border:none" id="exampleInputPassword1" placeholder="Mot de passe">
                    </div>
                    <div class="form-group" style="width: 400px; padding-top:20px;">
                        <div class="row">
                            <div class="col">
                                    <a href="#" style=" text-decoration: none;"> Mot de passe oublié </a>
                                   </div>
                                   <div class="col">
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
                                        >Connexion
                                        </a>
                             </div>
                        </div>
                    </div>
                </form>
          </div>
      
    </div>
        <app-footer>

        </app-footer>
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
