<template>
       <div class="stub_first">
                <div class="text">
                    Melee<br>
                    <span class="value">
                        Damage: 3716 - 4555<br>
                        Power: 5242<br>
                        Speed: 0<br>
                        Hit rating: 8.14%<br>
                        Critical: 45.21%
                    </span>
                    <br><br>
                    Attributes<br>
                    <span class="value">
                        Strength: 2511<br>
                        Agility: 741<br>
                        Intellect: 52<br>
                        Stamina: 2236<br>
                        Spirit: 82<br>
                        Expertise: 26
                                            </span>
                </div>
            </div>
</template>

<script>
export default {
    name:'Melee.vue'
}
</script>


<style lang="scss" scoped>
.stub_first {
    left: 0;
    width: 30vh;    
    position: relative;
   
}
.text {
    padding-top: 0px;
    color:aliceblue;
}

.value {
    font-size: 14px;
    width: 100px;
}
</style>