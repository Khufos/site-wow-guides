<template>
   <div class="character-stats">
        <h3>Character Stats</h3>
        <div class="divider"></div>
           <Melee />
           <Ranged />
           <Spell />
           <Profission />
           <Glyph />
        </div>
</template>



<script>
import Glyph from '../components/Glyphs.vue'
import Profission from '../components/Profission.vue';
import Melee from '../components/Melee.vue';
import Ranged from '../components/Ranged.vue';
import Spell from '../components/Spell.vue';
export default {
    components:{ Melee ,Ranged, Spell,Profission, Glyph},
    name:'Status'
}
</script>


<style lang="scss" scoped>
h3{
    padding-bottom: 0px;
    margin-bottom: 0px;
    color: #c1b575;
}
.character-stats {
    position: relative;
    width: 450px;
  
}
.divider {
    height: 8px;
    border-top: 1px solid #1e1e1e;
    
}
.character-stats .stub .first {
    padding-left: 0px;
}
.character-stats .stub {
    float: left;
    position: relative;
    padding-left: 50px;
   
}

.character-stats .stub .text {
    padding-top: 15px;
}

#character-profile .information-right {
    width: 45%;
    position: relative;
    float: left;
    
}
</style>