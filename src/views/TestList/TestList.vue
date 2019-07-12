<!-- 考试列表 -->
<template>
  <div class="testListContainer">
    <div class="listHeader">
      <div class="testName">考试列表</div>
      <div class="slogan">每一次考试都是自我的一次审视</div>
    </div>
    <div class="listBody">
      <div v-for="item in testList" :key="item.testId" class="itemStyle"> 
        <van-cell :title="item.testName" is-link value="查看详情" :to="'/scoreList'"> </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  created() {
    this.$store.dispatch('getTestList')
  },
  computed: {
    ...mapState(['testList'])
  }
}
</script>

<style scoped>
  .scoreListContainer {
    width: 100%;
    height: 100%;
  }
  .listHeader {
    width: 100%;
    height: 130px;
    color: rgba(80, 80, 80, 1);
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    overflow: hidden;
  }
  .testName {
    color: rgba(80, 80, 80, 1);
    font-size: 28px;
    line-height: 170%;
    margin-top: 48px;
  }
  .slogan {
    font-size: 14px;
  }
  .itemStyle{
    display: flex;
    align-items: center;
    margin: 3px 0;
  }
</style>
