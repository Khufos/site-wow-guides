<template>
<div>
	<aside :class="{expanded: expanded}"  class="fixed-top">
		<div class="logo">
			<img src="../assets/wow2.png" alt="logowow" /> 
		</div>
		<div class="menu-toggle-wrap">
			<i class="menu-toggle" @click="Menuk">
				<span class="material-icons">keyboard_double_arrow_right</span>
			</i>
		</div>
		<h3>Menu</h3>
		<div class="menu">
		<NavItem :item="item" v-for="item in navItems" :key="item.label" />

		</div>
	</aside>
	</div>
</template>
<script>

import NavItem from './NavItem.vue'

export default {
    components:{NavItem},
	
    name:'SideBar',
     data(){
        return{
		
           expanded:true,
           navItems:[
            {to:"/",label:"Home", children:[], icon:"home"},
            {to:"#",label:"Classes", children:[
                {to:"/classes",label:"Death Knight Guides", children:[],icone:require('@/assets/icones/dk.jpg')},
                {to:"/classes",label:"Druida Guides	", children:[],icone:require('@/assets/icones/druid.png')},
				{to:"/classes",label:"Hunter Guides", children:[], icone:require('@/assets/icones/hunter.png')},
				{to:"/classes",label:"Mage Guides", children:[], icone:require('@/assets/icones/mage.png')},
				{to:"/classes",label:"Paladin Guides", children:[], icone:require('@/assets/icones/paladin.png')},
				{to:"/classes",label:"Priest Guides", children:[], icone:require('@/assets/icones/priest.png')},
				{to:"/classes",label:"Rogue Guides", children:[], icone:require('@/assets/icones/rogue.png')},
				{to:"/classes",label:"Shaman Guides", children:[], icone:require('@/assets/icones/shaman.png')},
				{to:"/classes",label:"Warlock Guides", children:[], icone:require('@/assets/icones/warlock.png')},
				{to:"/classes",label:"Warrior Guides", children:[], icone:require('@/assets/icones/warrior.png')},
            ], icon:"book"},
			{to:"/",label:"Professions", children:[
				{to:"/classes",label:"Alchemy 1-450", children:[], icone:require('@/assets/icone_prof/alchemy.png')},
				{to:"/classes",label:"Blacksmithing 1-450", children:[], icone:require('@/assets/icone_prof/blacksmithing.png')},
				{to:"/classes",label:"Cooking 1-450", children:[], icone:require('@/assets/icone_prof/cooking.png')},
				{to:"/classes",label:"Enchating 1-450", children:[], icone:require('@/assets/icone_prof/enchanting.png')},
				{to:"/classes",label:"Engineering 1-450", children:[], icone:require('@/assets/icone_prof/engineering.png')},
				{to:"/classes",label:"First Aid 1-450", children:[], icone:require('@/assets/icone_prof/firstaid.png')},
				{to:"/classes",label:"Fishing 1-450", children:[], icone:require('@/assets/icone_prof/fishing.png')},
				{to:"/classes",label:"Herbalism 1-450", children:[], icone:require('@/assets/icone_prof/herbalism.png')},
				{to:"/classes",label:"Inscription 1-450", children:[], icone:require('@/assets/icone_prof/inscription.jpg')},
				{to:"/classes",label:"Jewelcrafting 1-450", children:[], icone:require('@/assets/icone_prof/jewelcrafting.png')},
				{to:"/classes",label:"Leatherworking 1-450", children:[], icone:require('@/assets/icone_prof/leatherworking.png')},
				{to:"/classes",label:"Mining", children:[], icone:require('@/assets/icone_prof/mining.png')},
				{to:"/classes",label:"Skinning 1-450", children:[], icone:require('@/assets/icone_prof/skinning.png')},
				{to:"/classes",label:"Tailoring 1-450", children:[], icone:require('@/assets/icone_prof/tailoring.png')},
				
			], icon:"school"},
			 {to:"/",label:"Addons", children:[
				{to:"/classes",label:"Recount", children:[], icone:""},
			 ], icon:"settings_applications"},
			],
			
				
			
     
        }
    },
    methods:{
        Menuk(){
            this.expanded = !this.expanded;
        },
        
    },
	props:{
		icone:{
			type:String
		}
	}
}

</script>

<style lang="scss" scoped>
aside {
	display: flex;
	flex-direction: column;
	background-color: var(--dark);
	color: var(--light);
	width: calc(2rem + 32px); 
	overflow: hidden;
	min-height: 100%;
	padding: 1rem;
	transition: 0.2s ease-in-out;
	


	.menu{
		min-height: 100vh;
	}
	
}
.fixed-top{
		position: fixed;
		top:0px;
	}

.expanded {
		width: var(--sidebar-width);

		.menu-toggle-wrap {
			top: -3rem;
			
			
			.menu-toggle {
				
				transform: rotate(-180deg);
			}
		}
		@media (max-width: 1024px) {
		position: absolute;
		z-index: 99;
	}

	}

	
	.logo {
		margin-bottom: 1rem;

		img {
			width: 2rem;
		}
	}

	.menu-toggle{
	
		position: fixed;
		bottom: 0;
		color: rgba(255, 255, 255, 0.7);
		transition: 0.2s linear;
	}

	h3 {
		color: var(--grey);
		font-size: 0.875rem;
		margin-bottom: 0.5rem;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}
	
	i{
		cursor: pointer;
	}
	
</style>