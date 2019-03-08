<template>
  <div class="page" id="invest">
    <Header head-title="投资列表"></Header>
    <div class="m-content">
      <div class="list-wrapper">
        <div class="list-content">
          <proj-list :projItem="projData"></proj-list>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Header from '../../components/header'
  import projList from '../../components/proj'
  import Footer from '../../components/footer'
  import {queryProjData} from '../../service/getData'
  import '../../style/layout.css'

  export default {
    name: 'invest',
    data () {
      return {
        projData:[]
      }
    },
    components: {
      Header,
      projList,
      Footer
    },
    mounted (){
      queryProjData({page:1,pagesize:10}).then((result) =>{
        this.projData = result.projData
      })
      this.scroll = new BScroll('.list-wrapper',{
        pullUpLoad:{threshold: 50},
        pullUpLoad:false,
        probeType:2
      })
      this.scroll.on('scroll', (pos) => {
        console.log(pos)
      })
    }
  }
</script>

<style scoped>
  .list-wrapper {
    position: relative;
    height: calc(100vh - 94px);
    overflow: hidden;
  }
  .list-wrapper .scroll-content {
    position: relative;
    z-index: 1;
  }
  .list-wrapper .list-content {
    position: relative;
    z-index: 10;
  }
   .pulldown-wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: all;
    transition: all;
  }
  .pulldown-wrapper .after-trigger {
    margin-top: 10px;
  }
  .pullup-wrapper {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 16px 0;
  }
</style>
