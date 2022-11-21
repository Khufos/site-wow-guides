<template>
    <div class="talent">
         <img v-bind:src="myImage" v-bind:alt="myImageAltText">
    </div>
    
      
    
</template>


<script>
export default {
   name:'Talentos',
   data(){
    return{
        myImage: require('@/assets/imagem_talentos/blood_pe.png'),
        myImageAltText:'Vue.js is awesome',

    }
   }
}
</script>


<style lang="scss" scoped>
.talent{
    position: absolute;
    bottom: -40px;
    left:83vh;

}
.talent img{
    height: 83vh;
    
}
</style>