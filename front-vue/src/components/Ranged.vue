<template>
    <div class="move_one">
                <div class="text">
                    Ranged<br>
                    <span class="value">
                        Damage: 299 - 300<br>
                        Power: 731<br>
                        Speed: 0<br>
                        Hit rating: 8.14%<br>
                        Critical: 24.21%
                    </span>
                    <br><br>
                    Defense<br>
                    <span class="value">
                        Armor: 15365<br>
                        Dodge: 12.13%<br>
                        Parry: 16.08%<br>
                        Block: 0%<br>
                        Resilience: 0<br>
                    </span>
                </div>
            </div>
</template>


<script>
export default {
    name:'Ranged'

}
</script>


<style lang="scss" scoped>
.move_one{
    left: 180px;
    position: absolute;
    top:57px;
    width: 21vh;
    height: 48vh;

   
}
.text {
    padding-top: 0px;
    color:#fff;
}
.value {
    font-size: 14px;
    width: 100px;
}

</style>