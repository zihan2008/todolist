<template>
<div>
  <transition name="router-fade" mode="out-in">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
  </transition>
  <transition name="router-fade" mode="out-in">
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </transition>
</div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
  body { margin: 0; padding: 0; font-family: "Microsoft YaHei",Verdana,Arial,Helvetica,sans-serif; color: #222; font-size: 14px; word-wrap: break-word;  word-break: normal;  -webkit-user-select: text; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; padding-top: constant(safe-area-inset-top); padding-left: constant(safe-area-inset-left); padding-right: constant(safe-area-inset-right);padding-bottom: constant(safe-area-inset-bottom);}
  a { -webkit-tap-highlight-color: rgba(255,255,255,0); text-decoration: none;}
  a:active,a:hover { outline: 0;}
  .m-content{ position: relative; z-index: 3; min-height:calc(100vh - 50px); }
  .m-content:only-child{min-height: 100vh;}
  .m-header + .m-content{ min-height:calc(100vh - 94px); }
  .m-header + .m-content:last-child{ min-height:calc(100vh - 44px); }
  .project-panel{ background: #fff; margin-top: 8px; text-align: justify; }
  .project-panel:first-child{margin-top: 0;}
  .project-panel-tit{ position: relative; z-index:3; padding:0 15px; border-bottom:1px solid #ddd; line-height: 40px; }
  .project-panel-tit:only-child{    border-bottom:0;}
  .project-panel-tit:before{ content:''; position: absolute; left: 0; top: 50%; margin-top: -8px; width: 6px; height: 16px; background: #12a3e7; border-radius: 0 3px 3px 0; }
  .project-panel-ct{ padding:15px; font-size: 13px; line-height: 20px; }
  .project-panel-table th{vertical-align: top; color: #666;    padding-bottom: 2px;}
  .flex{ -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; display: -webkit-box; display: flex; }
  .flex>*{ display: block; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; text-align: center; }
  .tab-nav{ border-bottom: 1px solid #ddd; line-height: 44px; font-size: 14px; color: #666; }
  .tab-nav a{ display: block; color: #666; }
  .tab-nav .curr{ color: #0f7fb9; border-bottom: 3px solid #08a1ea; margin-bottom: -1px; }
</style>
