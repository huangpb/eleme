<template>
  <div class="shop">
    <!--店铺信息-->
    <div class="clearfix shop-block">
      <div class="shop-info-wrap">
        <!--标题栏-->
        <div>
          <h3 class="shop-name">{{shop.name}}</h3>
          <div>
            <span v-if="shop.insure" class="shop-insure">保</span>
          </div>
        </div>
        <!--评分栏-->
        <div>
          <div>
            <el-rate
              v-model="shop.stars"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
            <span class="shop-sale">月售{{shop.sale}}单</span>
          </div>
          <div>
            <span v-if="shop.sendVIP" class="send-VIP">蜂鸟专送</span>
          </div>
        </div>
        <!--起送、配送费栏-->
        <div>
          <div>&yen;{{shop.startPrice}}起送
            <span class="shop-cloumn">|</span>
            配送费&yen;{{shop.freight}}
          </div>
          <div>{{shop.distance}}km
            <span class="shop-cloumn">|</span>
            {{shop.time}}分钟
          </div>
        </div>
        <hr class="shop-hr" v-if="shop.activity">
        <div class="shop-activity-wrap" v-if="shop.activity">
          <div class="shop-activity-list">
            <Activity v-for="activity in activities"
                      :icon="activity.name"
                      :text="activity.text"
                      :key="activity.name"></Activity>
          </div>
          <div @click='toggleAll'>
            <span>3个活动</span>
            <i class="shop-activity-icon"
               :class="{[icons.down]: true, iconsUp: up}"></i>
          </div>
        </div>
      </div>
      <!--左侧logo-->
      <div class="logo-wrap">
        <img :src="server + 'img/shopLogo/' + shop.img" alt="shop.name">
      </div>
    </div>
  </div>
</template>

<script>
import constant from '@/utils/constant'
import Activity from './Activity.vue'

const { server } = constant

export default {
  name: 'Shop',
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      server,
      up: false
    }
  },
  computed: {
    activities () {
      let activities = []
      let shopActivity = this.shop.activity

      if (shopActivity) {
        activities = this.up ? shopActivity : shopActivity.slice(0, 2)
      }
      return activities
    }
  },
  methods: {
    toggleAll () {
      this.up = !this.up
    }
  },
  components: {
    Activity
  }
}
</script>

<style lang="scss" scoped>
  @import '../../styles/base';

  .shop {
    padding: 15px 10px 10px;
    border-bottom: 1px solid $gray-light;
    background: #fff;

    /*店铺信息*/
    .shop-block {
      & > div {
        float: right;

        &.logo-wrap {
          width: 23%;
          padding-right: 3%;

          img {
            width: 100%;
          }
        }

        &.shop-info-wrap {
          width: 77%;

          & > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 5px;

            & > div {
              display: flex;
              align-items: center;

              .shop-insure {
                border: 1px solid #ddd;
              }

              .shop-sale {
                margin-left: 5px;
              }

              .send-VIP {
                color: #fff;
                background: $base-color;
                padding: 2px;
                border-radius: 2px;
              }

              .shop-cloumn {
                color: #ccc;
                margin-left: 3px;
                margin-right: 3px;
              }
            }

            .shop-name {
              font-size: 16px;
              color: $black-color;
            }

            .shop-activity-list {
              display: block;
            }
          }

          .shop-hr {
            border-top:1px solid $gray-light;
            margin: 8px 0;
          }

          .shop-activity-wrap {
            align-items: flex-start;

            .shop-activity-icon {
              font-size: 12px;
              margin-left: 2px;
              transform: rotate(0deg);
              transition: transform .2s linear;

              &.iconsUp {
                transform: rotate(180deg);
              }
            }
          }
        }
      }
    }
  }
</style>
