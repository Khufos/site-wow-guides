<template>
      <div class="card">
         <div class="product-image-wrap">
        <img :src="product.src" class="image" />
      </div>
      <router-link to='/about'>
        <p>{{ product.title}}</p>
      </router-link>
        <p>{{ product.bgtext}}</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt sint eveniet fugit quibusdam cumque quae dicta sed suscipit ab est?</p>
    </div>
</template>

<script>

export default {
    
    name:"Card",
    props:['product']
}
</script>

<style lang="scss" scoped> 


.card {
  display: block; 
  background: rgba(211, 203, 203, 0.649);
  box-shadow: 0 1px 1px rgb(0 0 0 / 10%);
  border-radius: 2px;
  margin: 0 auto;
}


 .product-image-wrap {
    position: relative;
    z-index: 1;
    transform-origin: center;
  }
  .product-image-wrap .image {
    min-width: 10vh;  
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  }

</style>
