# eleme

饿了么项目   
技术栈：vue-cli + vue-router + vuex + element-ui + axios，并搭配用 Node 写的 eleme-server 项目作为后台。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8000
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 项目架构
项目是SPA单页应用，页脚共用，页头根据需求做更改。

#### 首页
1. 页头   
2. 搜索框
3. 品牌分类
4. 商家列表
5. 页脚

#### 选择收货地址
1. 页头
2. 地址输入框
3. 当前地址
4. 收货地址

#### 添加地址
1. 页头
2. 信息表单

#### 搜索地址
1. 页头
2. 搜索框
3. 地址列表

#### 搜索页
1. 页头
2. 推荐列表
3. 搜索结果   
  3.1 导航条
  3.2 筛选栏
  3.3 搜索结果

#### 店铺页
1. 页头
2. 店铺 Logo
3. 店铺信息    
  3.1 店铺详细信息弹框
4. 优惠活动栏    
  4.1 优惠活动弹框
5. 导航栏
6. 点餐列表    
  6.1 左侧导航
  6.2 右侧列表
7. 评价
8. 商家

#### 发现页
1. 页头
2. 功能板块
3. 菜单列表
4. 页脚

#### 订单页
1. 页头
2. 主体内容
3. 页脚

#### 我的
1. 页头
2. 个人信息
3. 红包、金币
4. 我的地址
5. 金币商城
6. 分享拿现金
7. 我的客服
8. 下载饿了么APP
9. 页脚

#### 账户信息
1. 页头
2. 个人信息详情
