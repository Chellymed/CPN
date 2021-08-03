<template>
  <nav class="floating-menu" style="padding-top: 250px; padding-bottom: 200px;">
   <div style="background-color: red; border-radius: 10px; padding-top:20px; padding-bottom: 20px;" >
        <div  id="zoom" style="text-align: center; transition: transform .2s;">
        <a class="navbar-brand" href="#">
        <img style="height:60px; " src="../assets/Entreprise.png" alt=""> <br>
        <span class="tooltiptext">Entreprise</span> 
        </a>
        </div>
            <div  id="zoom" style="text-align: center; padding-top:20px">
            <a class="navbar-brand" href="#">
            <img style="height:60px;" src="../assets/Agence.png" alt=""> <br>
             <span class="tooltiptext">agence</span> 
            </a>
            </div>
        <div  id="zoom" style="text-align: center; padding-top:20px">
        <a class="navbar-brand" href="#">
        <img style="height:60px;" src="../assets/Collectivités.png" alt=""> <br>
          <span class="tooltiptext">Collectivité </span> 
        </a>
        </div>
    </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.floating-menu {
    font-family: sans-serif;
    padding: 5px;;
    width: 130px;
    z-index: 100;
    position: fixed;
  }
  .floating-menu a, 
  .floating-menu h3 {
    font-size: 0.9em;
    display: block;
    margin: 0 0.5em;
    color: white;
  }
 
  #zoom:hover{
       transform: scale(1.5);
  }
  #zoom:hover .tooltiptext{
        visibility: visible;
  }

  #zoom .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: white;
  color: black;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}
</style>