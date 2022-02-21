<template>
  <img
    class="ImageSrcSet"
    :src="imageSrc"
    :srcset="imageSrcSet"
    :sizes="sizes"
    :alt="alt"
    loading="lazy"
  />
</template>
<script>
export default {
  name: "IntroImage",
  props: ["path", "src", "srcset", "sizes", "alt"],
  setup(props) {
    let imageSrc = props.path + props.src;
    let imageSrcSet = props.srcset
      .reduce(
        (p, srcset) =>
          p + `, ${props.path + srcset.src} ${srcset.intrinsicSize}`,
        ""
      )
      .substring(2);
    return {
      imageSrc,
      imageSrcSet,
    };
  },
};
</script>
<style lang="less">
@import (reference) "../less/helpers";

.ImageSrcSet {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;

  .OnTabletSmall({
    /*height: 390px;*/
  });
}
</style>
