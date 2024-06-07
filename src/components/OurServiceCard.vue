<template>
  <div class="box">
    <slot name="upper"></slot>
    <div class="img-box">
      <img :src="imgPath" alt="" />
    </div>
    <div class="detail-box">
      <h5>
        {{ title }}
      </h5>
      <p>
        {{ desc }}
      </p>
      <a href=""> Read More </a>
    </div>
    <div class="detail-box">
      <slot name="bottom"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgPath", "title", "desc"],
};
</script>