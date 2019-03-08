<template>
  <div id="proj">
    <div class="p15 tc fc-666" v-if="projItem === undefined">暂无数据</div>
    <ul class="invest-list" v-else>
      <li v-for="(item,index) of projItem" :key="index" :class="{finished:item.product_status==='sellout'}">
        <router-link :to="item.product_code">
          <h2 class="invest-item-tit">{{item.product_name}}</h2>
          <div class="invest-item-ct of">
            <div class="fl">
              <div class="invest-interest"><span class="fb">{{item.product_rate | productRate}}</span></div>
              <div class="invest-interest-tips">约定年化利率</div>
            </div>
            <div class="invest-ct-col fc-666 f14">
              <div>借款期限 <span class="fb fc-444">{{item.deadline}}天</span></div>
              <div><span class="fc-blue">{{item.sale_amount}}元</span>起投</div>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
        name: "proj",
    data (){
          return{
          }
    },
    props:['projItem']
  }
</script>

<style scoped>
  .invest-list li{position: relative; border-bottom:1px solid #ddd; padding:15px;}
  .invest-item-tit{margin:0; font-size: 14px; color: #444;}
  .invest-item-ct{padding-top: 8px;}
  .invest-interest{font-family:Arial; font-size: 24px; color: #f74b4b;}
  .invest-interest-tips{font-size: 12px; color: #999;}
  .invest-ct-col{padding: 5px 0 0 54%;}
  .superscript{top: 0; right: 0; width: 13.8667vw;}
  .finished .invest-item-tit,.finished .invest-interest,.finished .invest-ct-col,.finished span{color: #999;}
  .finished:after,.for-sale:after{content:''; position: absolute; top: 15px; right: 15vw; width: 19.2vw; height: 19.2vw; background: url("../images/invest/finished-icon.png"); background-size: cover;}
  .finished.sold-out:after {background-image: url("../images/invest/sold-out-icon.png");}
  .for-sale:after {background-image: url("../images/invest/for-sale-icon.png");}
</style>
