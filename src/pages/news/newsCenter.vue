<template>
  <div class="page" id="newsCenter">
    <Header head-title="消息中心"></Header>
    <div class="m-content bg-gray">
      <ul class="news-list bg-white">
        <li v-for="(item,index) of cmsContentData" :key="index">
          <div class="news-list-ct pr">
            <router-link class="db right-arrow-icon" :to="{path:'/news/newsInfo',query: {id: item.id}}">
              <div class="news-title">{{item.title}}</div>
              <time class="news-time f12">{{item.releaseTime}}</time>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from '../../components/header'
  import {queryCmsContentData} from '../../service/getData'
  import '../../style/layout.css'
    export default {
        name: "newsCenter",
      data (){
          return{
            cmsContentData:[]
          }
      },
      components:{
        Header
      },
      mounted() {
        queryCmsContentData({page:0,pagesize:10}).then((result) =>{
          this.cmsContentData = result.cmsContentData
        })
      }
    }
</script>

<style scoped>
  .news-list li{border-bottom: 1px solid #ddd; padding:4.8vw;}
  .news-list-ct{padding-left: 48px;}
  .news-list-ct:before{content:'通知'; position: absolute; top: 0; left:0; background: #08a1ea; padding:1px  6px; border-radius: 2px; color: #fff; font-size: 12px;}
  .news-title{color: #222;}
  .news-time{color: #aaa;}
  .news-list-ct.readed .news-title{color: #999;}
  .news-list-ct.readed:before{background: #999;}
</style>
