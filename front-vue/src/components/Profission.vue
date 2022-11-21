<template>

<div class="profskills">
                        <div class="stub">
                <div class="icon">
                    <img v-bind:src="prof1" v-bind:alt="myImageAltText" height="25" width="25">
                </div>
                <div class="text">
                    Tailoring
                    <span class="value">450/ 450</span>
                </div>
            </div>
                        <div class="stub">
                <div class="icon">
                    <img v-bind:src="prof2" v-bind:alt="myImageAltText" height="25" width="25">
                </div>
                <div class="text">
                    Engineering
                    <span class="value">450/ 450</span>
                </div>
            </div>
                    </div>
    
</template>

<script>
export default {
    name:'Profission',
    data(){
        return{
            prof1: require('@/assets/icone_prof/tailoring.png'),
            prof1text:'tailoring',
            prof2: require('@/assets/icone_prof/engineering.png'),
            prof2text:'tailoring',

        }
    }
}
</script>



<style lang="scss" scoped>
.profskills{
    display: flex;
    position: absolute;
    left: 500px;
    top: 50px;
    

}
.profskills .stub{
    width: 200px;
    height: 35px;
    float: left;
    display: block;

}
.text{
    position: relative;
    left: 30px;
    top: -26px;
    color:#fff;
}

</style>