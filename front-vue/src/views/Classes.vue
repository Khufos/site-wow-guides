
  <template>
  <div class="card-left">
		<div class="container">
      <Card v-for="product in products"
      :key="product.color"
      :product="product"  />
		</div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
export default {
  components:{ Card },
	name:"Classes",
	data(){
		return{
			 products: [ 
        {
          title: 'Nike Air Max',
          color: 'green',
          bgtext: 'NIKE',
          src: require('@/assets/holy-Priest.jpg')
        },
        {
          title: 'Nike flex',
          color: 'blue',
          bgtext: 'AIR',
          src: require('@/assets/holy-Priest.jpg')
        },
        {
          title: 'Nike Roche',
          color: 'pink',
          bgtext: 'MAX',
          src: require('@/assets/holy-Priest.jpg')
        },  
        {
          title: 'Nike flex',
          color: 'blue',  
          bgtext: 'AIR',
          src: require('@/assets/holy-Priest.jpg')
        },
        {
          title: 'Nike flex',
          color: 'blue',  
          bgtext: 'AIR',
          src: require('@/assets/holy-Priest.jpg')
        },
        {
          title: 'Nike flex',
          color: 'blue',  
          bgtext: 'AIR',
          src: require('@/assets/holy-Priest.jpg')
        },
      
      ]
		}
	}
	
}
</script>


<style lang="scss" scoped>
.card-left{
  margin:5vh;
  padding-left: 11rem;

}

.container {
  display: grid;
  grid-template-columns: repeat(3,  1fr );
  grid-gap:20px;
  grid-auto-rows: minmax(200px, auto);  
}

</style>
