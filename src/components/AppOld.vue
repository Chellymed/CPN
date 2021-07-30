<template>
  <div id="body">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="video-wrapper">
      <video class="video-holder" muted autoplay loop controls>
        <source src="../assets/CPNMedia.mp4" type="video/mp4">
      </video>
      <div id="me2" class="d-flex justify-content-center">
      <a href="/Home" id="me" style="" class="video-link">Consultez notre site web<img  
                src="../assets/Access2.png"
                width="25px"
                height="25px"
                alt=""
              />
              </a>
          
       </div>
      <div id="Position" class="video-links">
          <div id="Pos" class="links-item" >
              <a href="#" class="fa fa-instagram video-item-link"></a>
              <a href="#" class="fa fa-facebook video-item-link"></a> 
              <a href="#" class="fa fa-youtube video-item-link" ></a>
          </div>
      </div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.video-wrapper{
  position: relative;
}
.video-wrapper .video-holder{
  height: 100%;
  width: 100%;
}
.video-wrapper .video-holder::-webkit-media-controls-panel{
    display: none !important;
    opacity: 1 !important;
}
@media screen and (max-width: 600px) {
  #body{
    font-size: 10px;
    text-align:center;
}
}
.video-wrapper .video-link{
  position: absolute;
  top: 10%;
  font-size: 80px;
  text-decoration: none;
  color: white;
}
#me:hover {
  color:  #D64827;
}

#me:active{
  color:green ;
}
#me{

  text-align: center;
  font-size: 20px; 
  padding: 10px;
  margin: 10px 5px;
}
#me2{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 190px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#Position{
position: absolute;
left: 0;
right: 0;
bottom: 20px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
}
#Pos{
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.fa-facebook {
  background: #3B5998;
  color: white;
}
.fa:hover {
    opacity: 0.7;
}
.fa {
  padding: 8px;
  font-size: 50px;
  width: 40px;
  text-align: center;
  text-decoration: none;
  margin: 2px 2px;
  border-radius: 40%;
}
.fa-youtube {
  background: #bb0000;
  color: white;
}
.fa-instagram {
  background: #d84b75;
  color: white;
}










</style>