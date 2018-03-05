<template>
  <div class="activity">
    <i v-if="activity.name === icon" v-for="(activity) in activities"
       class="activity-icon"
       :class="activity.name"
       :key="activity.name">{{activity.text}}</i>
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  name: 'Activity',
  props: ['icon', 'text'],
  data () {
    return {
      activities: [
        {name: 'reduce', text: '减'},
        {name: 'first', text: '首'},
        {name: 'get', text: '赠'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .activity {
    display: flex;
    align-items: center;
    margin-bottom: 3px;

    .activity-icon {
      padding: 2px;
      color: #fff;
      border-radius: 2px;
      font-style: normal;
      margin-right: 3px;

      &.reduce {
        background: rgb(238,116,117);
      }

      &.first {
        background: rgb(114,187,77);
      }

      &.get {
        background: rgb(68,198,146);
      }
    }
  }
</style>
