<template>
  <div class="loader-wrap">
    <transition name="fade" duration="500">
      <div class="loader" aria-label="Loading" v-show="loading">
        <span></span><span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ThePreloader',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
$spinner-size: 4em !default;
$spinner-color: #f65261 !default;
$circleCount: 12;
$animationDuration: 1.2s;

.loader {
  width: $spinner-size;
  height: $spinner-size;
  position: relative;
  top: 130px;

  &-wrap {
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    pointer-events: none;
  }

  span {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;

    &::before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: $spinner-color;
      border-radius: 100%;
      animation: sk-circle-bounce-delay $animationDuration infinite ease-in-out both;
    }
  }

  @for $i from 2 through $circleCount {
    span:nth-child(#{$i}) {
      transform: rotate((360deg / $circleCount * ($i - 1)));
    }
  }

  @for $i from 2 through $circleCount {
    span:nth-child(#{$i})::before {
      animation-delay: (-$animationDuration + $animationDuration / $circleCount * ($i - 1));
    }
  }
}

@keyframes sk-circle-bounce-delay {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
}

.fade-enter-active, .fade-leave-active {
  opacity: 1;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transition: opacity .5s;
}
</style>
