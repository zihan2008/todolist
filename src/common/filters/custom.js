/**
 * 约定年化利率过滤器
 * @param value
 * @param precision
 * @returns {string}
 */
export let productRate = (value,precision=12) =>{
  if (!value) return ''
  return  parseFloat((value*100).toPrecision(precision)) + '%'
}
