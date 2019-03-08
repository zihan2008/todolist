require("es6-promise").polyfill();
require('isomorphic-fetch');
import Promise from "promise-polyfill";
import {GET,POST} from '../config/fetch'
if(!window.Promise){
  window.Promise = Promise;
}
const baseUrl = 'https://www.gzfantianying.com/'
// export const initBannerData = fetch('https://www.gzfantianying.com/pub/home/initBannerData')
export const initBannerData = () => GET(baseUrl + 'pub/home/initBannerData')
export const initCmsData = () => GET(baseUrl + 'pub/home/initCmsData')
export const initOtherData = () => GET(baseUrl + 'pub/home/initOtherData')
export const queryProjData = (option) => POST(baseUrl + 'pub/invest/queryProjData',option)
export const queryCmsContentData = (option) => POST(baseUrl + 'pub/cmsContent/queryCmsContentData',option)
