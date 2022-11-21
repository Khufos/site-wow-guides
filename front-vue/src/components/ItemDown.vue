<template>
  <div class="item-bottom">
    <div class="item-slot">
      <div class="icon-quality icon-quality5">
        <a
          target="_blank"
          href="http://wotlk.cavernoftime.com/item=49623"
          rel="item=49623&amp;ench=3368&amp;gems=3518:3518:3518"
        >
          <img
            src="http://cdn.warmane.com/wotlk/icons/large/inv_axe_113.jpg"
            width="50"
            height="50"
          />
        </a>
      </div>
    </div>
    <div class="item-slot">
      <div class="icon-quality tooltip" data-tooltip="Off-Hand">
        <a href="#self"></a>
      </div>
    </div>
    <div class="item-slot">
      <div class="icon-quality icon-quality4">
        <a
          target="_blank"
          href="http://wotlk.cavernoftime.com/item=47673"
          rel="item=47673"
        >
          <img
            src="http://cdn.warmane.com/wotlk/icons/large/inv_shield_56.jpg"
            width="50"
            height="50"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemDown",
};
</script>

<style lang="scss" scoped>
.item-bottom {
  position: absolute;
  left: 140px;
  top: 452px;
  z-index: 3;
}

.item-slot {
  float: left;
  display: block;
  width: 55px;
  height: 50px;
}
</style>
