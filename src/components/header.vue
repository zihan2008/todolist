<template>
  <header class="m-header" id="head_top" >
    <div class="m-header-bar">
      <div class="header-col">
        <a href="javascript:;" class="go-back-icon" @click="$router.go(-1)"></a>
      </div>
      <div class="m-header-title" :class="isHome?'logo':''">{{headTitle}}</div>
      <div class="header-col">
        <router-link to="/news" class="go-msg-icon sub-new-msg" v-if="isHome"></router-link>
        <a href="javascript:void(0);" class="header-sub-text read-all" v-if="isNews">全部已读</a>
      </div>
    </div>
  </header>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  data () {
    return {}
  },
  // props: ['headTitle', 'isHome','isNews'],
  props:{
    headTitle:'',
    isHome:false,
    isNews:false
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ])
  }
}
</script>

/* eslint-disable */
<style scoped>
  .logo{background: url("../images/logo.png") center no-repeat; background-size: auto 24px;}
  .m-header:after{ content:''; display: block; height: 44px; }
  .m-header-bar{ position: fixed; z-index: 10; top: 0; left: 0; right: 0; height: 44px; background: #08a1ea; color: #fff; text-align: center; line-height: 44px; }
  .m-header-title{ margin:0 70px; height: 44px; font-size: 16px; text-align: center; overflow: hidden; -o-text-overflow: ellipsis; text-overflow: ellipsis; white-space: nowrap; }
  .header-col{ position: absolute; top: 0; }
  .header-col:first-of-type{ left: 0; }
  .header-col:last-of-type{ right: 0; }
  .go-back-icon,.go-msg-icon{ display: block; width: 40px; height: 44px; }
  .go-back-icon{ background: url("../images/white-back-arrow.png") center no-repeat; background-size: auto 16px; }
  .go-msg-icon{ background: url("../images/message-icon.png") center no-repeat; background-size: 18px auto; }
  .header-sub-text{display: inline-block; margin-right: 12px; border: 1px solid #fff; border-radius: 3px; padding:0 8px; line-height: 20px; color: #fff; font-size: 12px;}
  .header-sub-text.read-all{background: url("../images/readed-icon.png") 3px center no-repeat; background-size: 12px; padding-left: 18px;}
</style>
