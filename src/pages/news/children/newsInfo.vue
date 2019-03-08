<template>
  <div class="page" id="newsInfo">
    <Header head-title="消息详情"></Header>
    <div class="m-content">
      <div class="news-info">
        <div class="tc">
          <div class="f16 lh20 pb5">关于xxx上线的公告关于xxx上线的公告关于xxx上线的公告</div>
          <p class="fc-999 f12">2016.06.28  10:20:26</p>
        </div>
        <div class="news-content">
          您的订单号为XXXXXX已完成审批，请立即产看通知客户XXXXXXXXXXX

            <p><span style="font-size:16px;font-family:'微软雅黑','sans-serif'">尊敬的淘粉：</span></p><p><span style="font-size:16px;font-family:'微软雅黑','sans-serif'">&nbsp;&nbsp;&nbsp;&nbsp; 接广发银行的通知，2018年11月23日17:00至2018年11月25日10:00将进行全广发银行系统维护升级。届时，平台将调整部分服务：</span></p><p><span style="font-size:16px;font-family:'微软雅黑','sans-serif'">1、2018年11月23日17:00至2018年11月24日10:00，平台满标的产品，预计将在11月25日统一起息。</span></p><p><span style="font-size:16px;font-family:'微软雅黑','sans-serif'">2、2018年11月24日2:30至2018年11月24日4:30，平台将暂停所有银行卡的提现业务操作；</span></p><p><span style="font-size:16px;font-family:'微软雅黑','sans-serif'">3、2018年11月24日2:30至2018年11月24日4:30，暂停广发银行的充值操作（绑定的银行卡为广发银行）；</span></p><p><span style="font-size:16px;font-family:'微软雅黑','sans-serif'">4、2018年11月25日0点至2018年11月25日8:00，平台将暂停跨行（非广发银行卡）提现的业务操作，广发银行卡的提现业务正常处理，其他功能不受影响。</span></p><p><span style=";font-family:'微软雅黑','sans-serif'">&nbsp;&nbsp; &nbsp;</span><span style="font-family: 微软雅黑, sans-serif; font-size: 16px;">请淘粉们提前做好充值和提现的安排，以免造成影响，期间给您造成不便敬请谅解，感谢您一如既往的支持与关注！</span></p><p style="text-indent:32px"><span style="font-family: 微软雅黑, sans-serif; font-size: 16px;">如有疑问，请咨询在线客服或拨打客服热线：4007-007-222，我们将竭诚为您服务。</span></p><p style="text-align: right;"><span style="font-family: 微软雅黑, sans-serif; font-size: 16px;">深圳淘淘金互联网金融服务有限公司</span></p><p style="text-align:right"><span style="font-size: 16px; font-family: 微软雅黑, sans-serif;">2018年11月23日</span></p><p><br></p>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../../../components/header'
  import '../../../style/layout.css'
    export default {
        name: "newsInfo",
      components:{
        Header
      },
      mounted() {
          console.log(this.$route.query.id)
      }
    }
</script>

<style scoped>
  .news-info{padding:6.4vw;}
  .news-content{padding:6vw 0; text-align: justify;line-height: 150%}
</style>
