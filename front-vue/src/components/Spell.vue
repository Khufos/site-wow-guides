<template>
            <div class="move">
                <div class="text">
                    Spell<br>
                    <span class="value">
                        Power: 0<br>
                        Healing: 0<br>
                        Haste: 2.26%<br>
                        Hit rating: 10.18%<br>
                        Critical: 0%
                    </span>
                    <br><br>
                    Resistances<br>
                    <span class="value">
                        Arcane: 0<br>
                        Fire: 0<br>
                        Nature: 0<br>
                        Frost: 0<br>
                        Shadow: 0
                    </span>
                </div>
            </div>
</template>


<script>
export default {
    name:'Spell'
}
</script>


<style lang="scss" scoped>
.move{
    left:330px;
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