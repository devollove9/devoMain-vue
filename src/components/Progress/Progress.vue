<template>
  <div
    class="progress"
    :class="{
            'progress-active': show
            }">
    <div class="progress-bar" :style="progressStyle"></div>
  </div>
</template>

<script>
  export default {
    name: 'Progress',
    props: {
      width: String,
      show: Boolean,
      styled: Object
    },
    computed: {
      progressStyle () {
        return Object.assign({}, this.styled, {
          width: this.width
        })
      }
    }
  }
</script>

<style lang="scss">
  $modal-z-index: 1200;
  $progress-height: 2px;
  $color-link: #2d83de;

  @keyframes progressBar {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 50px 0;
    }
  }

  .progress{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 2px;
    z-index: $modal-z-index;
    visibility: hidden;
    opacity: 0;
    &.progress-active {
       visibility: visible;
       opacity: 1;
     }
    .progress-bar {
      width: 0;
      height: 100%;
      background-color: #2d83de;
      background-size: 30px 30px;
      animation: progressBar 1s linear infinite;
      background-image: -webkit-linear-gradient(bottom left, rgba(179, 76, 76, 0.15) 25%, rgba(49, 42, 42, 0) 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, rgba(111, 101, 101, 0));
      transition: width 200ms cubic-bezier(.41, .25, .01, .99);
      vertical-align: top;
    }
  }

</style>
