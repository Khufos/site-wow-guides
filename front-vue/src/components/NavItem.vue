<template>
  <div>
    <div class="menu">
      <router-link class="material-icons" to="/">{{ item.icon }}</router-link>
      <a @click="mostra">
        <span>{{ item.label }}</span>
      </a>
      <div v-if="troca_icone" class="right">
        <i class="expand material-icons">navigate_before</i>
      </div>
      <div v-else class="right">
        <i class="expand material-icons">expand_more</i>
      </div>
    </div>

    <div v-show="show" v-for="child in item.children" :key="child.label" class="items-container">
      <router-link v-bind:to="child.to">
        <img v-bind:src="child.icone" alt="img" class="logo" />
        {{ child.label }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  data() {
    return {
      show: false,
      data: true,
      troca_icone: true
    };
  },
  methods: {
    mostra() {
      this.show = !this.show;
      this.troca_icone = !this.troca_icone;
    }
  },
  props: {
    item: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.menu,
a {
  color: #fff;
  margin-left: 2px;
  display: flex;
  cursor: pointer;
  

  .material-icons {
    margin-right: 1rem;
    padding: 3px;
    align-items: center;
    position: relative;
    top: -7px;
  }
  .items-container {
    display: flex;
    flex-direction: column;
    padding-left: 50px;
  }

  a:hover {
    color: rgb(16, 19, 14);
  }

  .logo {
    display: flex;
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
  a {
    margin: 2px;
  }
  .i {
    align-items: center;
    height: 2px;
    background-color: rgb(61, 190, 190);
  }
  .right {
    align-items: center;
    position: relative;
    top: 5px;
  }
}
</style>
