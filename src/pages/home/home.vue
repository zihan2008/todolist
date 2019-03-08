<template>
  <div class="page" id="home">
    <Header is-home="true" />
    <div class="m-content">
      <div class="bg-gray">
        <div class="banner-swiper pr">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) of banner" :key="index">
              <router-link :to="item.picUrl"><img :src="item.fileUrl"></router-link>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
        <div class="index-notice">
          <div class="notice-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) of notice" :key="index">
                <router-link class="fc-666" :to="item.id">{{item.title}}</router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="project-panel">
          <div class="project-panel-tit ">
            <a href="#" class="db right-arrow-icon">
              <b class="f14 fc-222">项目推荐</b>
            </a>
          </div>
          <proj-list :projItem="projData"></proj-list>
        </div>
        <div class="project-panel">
          <div class="project-panel-tit">
            <b class="f14">平台数据</b>
          </div>
          <div class="project-panel-ct">
            <div class="pt5 pb5">
              <ul class="flex f12 lh24">
                <li>
                  <p class="fc-666">累计成交金额(元)</p>
                  <div class="f18 fb">{{totalAmount}}</div>
                </li>
                <li>
                  <p class="fc-666">累计注册用户(人)</p>
                  <div class="f18 fb">{{totalReg}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer is-home="true" />
  </div>
</template>

<script>
  import Header from '../../components/header'
  import Footer from '../../components/footer'
  import projList from '../../components/proj'
  import {initBannerData,initCmsData,initOtherData,queryProjData} from '../../service/getData'
  import Swiper from '../../../static/plugins/swiper-4.3.3/js/swiper.min'
  import '../../../static/plugins/swiper-4.3.3/css/swiper.min.css'
  import '../../style/layout.css'

  export default {
    name: 'home',
    data () {
      return {
        banner:[],
        notice:[],
        totalAmount:'200',
        totalReg:'100',
        projData:[]
      }
    },
    components: {
      Header,
      projList,
      Footer
    },
    mounted() {
      Promise.all([initBannerData(),initCmsData(),initOtherData()]).then((result) =>{
        this.banner = result[0].data
        this.notice = result[1].data
        this.totalAmount = result[2].totalAmount
        this.totalReg = result[2].totalReg
      }).then(() =>{
        new Swiper ('.banner-swiper', {
          loop: true,
          autoplay:true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
        new Swiper ('.notice-swiper', {
          direction: 'vertical',
          loop: true,
          autoplay:true
        })
      })
      queryProjData({page:1,pagesize:4}).then((result) =>{
        this.projData = result.projData
      })
    }
  }
</script>

<style scoped>
  .banner-swiper{width: 100%; overflow: hidden;}
  .swiper-container-horizontal>.swiper-pagination-bullets{bottom:0;}
  .swiper-pagination-bullet{width: 5px; height: 5px; background: #fff; border-radius: 5px; opacity: .5;}
  .swiper-pagination-bullet-active{opacity: 1; width: 8px;}
  .index-notice{background: #fff url("../../images/notice-icon.png") 6px center no-repeat; background-size: auto 10px; padding-left: 22px;}
  .notice-swiper{line-height: 30px; height: 30px; overflow: hidden;}
</style>
