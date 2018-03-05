import ajax from '@/utils/ajax'
import { homeApis } from './apis'

/**
 * 获取首页类别
 * **/
export function fetchCategory () {
  return ajax({
    url: homeApis.fetchCategory
  })
}

/**
 * 获取首页店铺列表
 * **/
export function fetchShops (address) {
  return ajax({
    url: homeApis.fetchShops,
    params: address
  })
}
