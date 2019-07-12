<!-- 成绩列表 -->
<template>
  <div class="scoreListContainer">
    <div class="listHeader">
      <span class="testName">{{testType}}</span>
      <p class="examSubject">
        <span>考试学科：</span>
        <span v-for="subject in subjects" :key="subject">{{subject}} </span>
      </p>
    </div>
    <div class="listBody">
      <div v-for="item in scoreList" :key="item.stuId">
        <van-cell :value="'总分:'+ item.total +'分'" is-link :to="'/scoreDetail?stuId=' + item.stuId" class="cellStyle">
          <template slot="title">
            <img slot="icon"  class="listImg" src="../../assets/image/3.jpg">
            <span class="custom-title">{{item.name}}</span>
          </template>
        </van-cell>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      testType: '半期测验',
      subjects: ['语文', '数学', '英语'],
    }
  },
  created() {
    // 异步获取成绩列表
    this.$store.dispatch('getScoreList')
  },
  methods: {
  },
  computed: {
    ...mapState(['scoreList'])
  }
}
</script>

<style scoped>
  .scoreListContainer {
    width: 100%;
    height: 100%;
  }
  .listHeader {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 130px;
    color: rgba(80, 80, 80, 1);
    font-size: 14px;
    line-height: 150%;
    text-align: center;
  }
  .testName {
    position: absolute;
    top: 20px;
    color: rgba(80, 80, 80, 1);
    font-size: 28px;
    line-height: 150%;
    margin-top: 30px;
  }
  .examSubject {
    position: absolute;
    top: 96px;
    font-size: 14px;
  }
  .cellStyle{
    display: flex;
    align-items: center;
    margin: 3px 0;
  }
  .van-cell__title {
    display: flex;
    align-items: center;
  }
  .listImg {
    width: 36px;
    height: 36px;
    background-color: chocolate;
    border-radius: 18px;
    margin-right: 10px;
  }
</style>
