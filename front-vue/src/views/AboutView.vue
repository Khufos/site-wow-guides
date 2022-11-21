<template>
  <div class="home-page">
    <div class="name">
        Arthaxs
      <span class="guild-name">
        <a href="/guild/Fade/Icecrown/summary/Arthaxs">Fade</a>
      </span>
    </div>
    <div class="level-race-class">Level 80 Orc Death Knight, Icecrown</div>
    <div id="character-profile">
      <div class="information-left">
          <div class="item-model">
            <div class="item-left">
            <ItemLeft />
            <ItemRight />
            <ItemDown />
            <Talentos />
            </div>
            
        </div>
      </div>
    </div>
   <status />
  </div>
</template>


<script>
import ItemLeft from '../components/ItemLeft.vue';
import ItemRight from '../components/ItemRight.vue';
import ItemDown from '../components/ItemDown.vue';
import Status from '../components/Status.vue';
import Melee from '../components/Melee.vue';
import Ranged from '../components/Ranged.vue';
import Talentos from '../components/Talentos.vue'
export default {
  components:{ ItemLeft,ItemRight , ItemDown, Status , Melee, Ranged, Talentos}
}
</script>

<style lang="scss" scoped>
.home-page {
  padding-left: 20.5rem;
  background: #606060;
  height: 100%;
  width: 100%;
  font-family: "FuturaEF-Book";
}
.name {
  font-size: 36px;
  font-weight: bold;
  color: #c1b575;
}
.home-page #character-profile {
  width: 100%;
  background: black;
  border: 1px solid crimson;
}
.home-page #charecter-profile .information-left {
  width: 54%;
  position: relative;
  float: left;
}
.item-left{
	width: 442px;
    height: 513px;
    position: relative;
    background: url('../assets/equipment-overview.png') no-repeat;
}

.item-slot{
	height: 54px;
    width: 60px;
    margin: 1px 0 0px 0;
    position: relative;
}
#character-profile .information-left .item-model .item-right {
    position: absolute;
    left: 390px;
    top: -1px;
}

</style>
