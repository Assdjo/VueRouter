<script setup>


</script>


<template>

<div>
    <div class="video-wrapper">
  <video playsinline autoplay muted loop poster="">
    <source src="../ressource/404Page.mp4" type="video/Mp4">
    Your browser does not support the video tag.
  </video>
</div>
    <RouterLink :to="`/`" class="connect">Connectez Vous</RouterLink>
</div>

</template>


<style>
div {
    width: 100%;

}
video {
    width: 100%;

}

.connect {
    font-family: Montserrat-ExtraBold;
    position : absolute;
    top: 50px;
    right: 100px;
    text-align: center;
    width : 10%;
    text-decoration: none;
    border: 2px solid rgb(255, 255, 255);
    padding: 30px;
    border-radius: 10px;
    color: white;
    background-color: rgb(0, 87, 185);
}

@font-face {
        font-family: Montserrat-ExtraBold;
        src: url(../montserratFont/Montserrat-ExtraBold.ttf);
    }

</style>