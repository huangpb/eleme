import ajax from '@/utils/ajax'
import { homeApis } from './apis'

/**
 * 获取首页的类别
 * **/
export function fetchCategory () {
  return ajax({
    url: homeApis.fetchCategory
  })
}
