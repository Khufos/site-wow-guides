<template>
  <div class="app">
    <SideBar />
    <router-view/>
  </div>
  
</template>


<script>
import SideBar from './components/SiderBar.vue'

export default {
  name:"App",
  components:{  SideBar },
}
</script>
<style lang="scss">
:root {
	--sidebar-bg-color:#2f855a;
	--siderbar-item-hover:#38a169;
	--siderbar-item-active:#276749;
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
	background: var(--light);
}

button,a  {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

.app {
	display: flex;
	main {
		flex: 1 1 0;
		padding: 0rem;
		height: 100%;
		@media (max-width: 768px) {
			padding-left: 6rem;
		}
	}
}
</style>