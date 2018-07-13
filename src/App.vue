<template>
  <div id="app">
    <transition :name="animate">
      <keep-alive>
        <router-view id="view"></router-view>
      </keep-alive>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      animate: ''
    }
  },
  watch: {
    $route(to, from) {
      /*
        0: 不做动画
        1: 左切换
        2: 右切换
        3: 上切换
        4: 下切换
      */
      // debugger
      let animate = this.$router.animate || to.meta.slide;
      if(!animate) {
        this.animate = '';
      }else {
        this.animate = animate === 1 ?  'slide-left' :
                        animate === 2 ?  'slide-right' :
                        animate === 3 ?  'slide-top' :
                        animate === 4 ?  'slide-bottom' : ''
      }
      this.$router.animate = 0;
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
#view {
  transition: all .5s cubic-bezier(0.55, 0, 0.1, 1);
 /* height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;*/
  display: flex;
  flex-direction: column;
  size: 100%;
}
.slide-left-enter {
  opacity: 0;
  transform: translate(100%, 0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-100%, 0);
}
    

</style>
