<template>
  <footer class="m-footer" id="foot_guide">
    <div class="m-footer-bar">
      <div class="footer-bar-warp">
        <div class="bottom-nav" v-for="(item,index) of bottomMenu" :key="index">
          <router-link :class="item.defaultClass" :to="'/'+item.path" exact>
            <i></i>
            {{item.menuText}}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {mapState} from 'vuex'

export default{
  data () {
    return {
      bottomMenu: [
        {
          menuText: '首页',
          path: '',
          defaultClass: 'tohome'
        },
        {
          menuText: '产品',
          path: 'invest',
          defaultClass: 'tolist'
        },
        {
          menuText: '我的',
          path: 'centre',
          defaultClass: 'tome'
        }
      ]
    }
  },
  props: ['isHome'],
  computed: {
    ...mapState([
      'geohash'
    ])
  },
  methods: {
    gotoAddress (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
  .m-footer{    position: relative;    z-index: 15;}
  .m-footer:after{ content:''; display: block; height: 50px; padding-bottom: constant(--safe-area-inset-bottom); }
  .m-footer.line{ position: relative; z-index: 15; }
  .m-footer.line:before{ content:''; position: absolute; top: 0; left: 0; right: 0; border-top:1px solid #ddd;}
  .m-footer-bar{ position: fixed; z-index: 10; bottom: 0; left: 0; right: 0; font-size: 12px; }
  .m-footer-bar:before{ content:''; position: absolute; top: 0; left: 0; right: 0; border-top:1px solid #ddd; }
  .footer-bar-warp{ -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; display: -webkit-box; display: flex; background: #fafafa; height: 50px; text-align: center; }
  .bottom-nav{ display: block; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; }
  .bottom-nav a{ display: block; height: 100%; color: #999; }
  .bottom-nav .active{ color: #0074cb; }
  .bottom-nav i{ display: block; margin:5px auto 0; width: 25px; height: 25px; background-image: url("../images/m-footer-tabbar.png"); background-size:auto 25px; ;}
  .tohome i{ background-position: -52px 0; }
  .tohome.active i{ background-position: -78px 0; }
  .tolist i{ background-position: 0 0; }
  .tolist.active i{ background-position: -26px 0; }
  .tome i{ background-position: -104px 0; }
  .tome.active i{ background-position: -130px 0; }
</style>
