<template>
    <div class="character-glyphs">
    <div data-glyphs="0">
        <h3 class="first">Major Glyphs</h3>
        <div class="glyph major">
        <p>Glyph of Disease</p>
        <p>Glyph of Death Strike</p>
        <p>Glyph of Dancing Rune Weapon</p>
        </div>
        <h3>Minor Glyphs</h3>
        <div class="glyph minor">
        <p>Glyph of Raise Dead</p>
        <p>Glyph of Pestilence</p>
        <p>Glyph of Horn of Winter</p>
        </div>
</div>
</div>
</template>

<script>
export default {
    name:'Glyphs'
}
</script>


<style lang="scss" scoped>
.character-glyphs {
    position: absolute;
    float: right;
    width: 270px;
    left: 550px;
    top: 100px;
   
}

h3.first {
    margin-top: 0px;
}
.character-glyphs .glyph {
    cursor: default;
    display: block;
    padding: 0 0 0 10px;
    height: 33px;
    width: 250px;
}
.character-glyphs .glyph {
    cursor: default;
    display: block;
    padding: 0 0 0 10px;
    height: 33px;
    width: 250px;
    align-items: center;
    text-align: center;
    color:#fff;
}

</style>