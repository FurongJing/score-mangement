<!-- 详细成绩 -->
<template>
  <div class="scoreDetailContainer">
    <div class="scoreHeader">
      <div class="avatarImg">
        <img src="../../assets/image/2.jpg" alt="" class="avatar">
      </div>
      <div class="info">
        <div>姚兰（语文老师）</div>
        <div>五年级二班</div>
        <div class="mood">
           好好加油，希望你从学习中得到更多的快乐！
        </div>
      </div>
    </div>
    <div class="scoreBody">
      <div v-for="item in scoreDetail" :key="item.stuId">
        <div class="listItem">
          <!-- 若总分需要计算的话，写到计算属性中 -->
          <div class="course">总分</div>
          <div class="score">{{item.total}}分</div>
        </div>
        <div class="listItem">
          <div class="course">语文</div>
          <div class="score">{{item.chinese}}分</div>
        </div>
        <div class="listItem">
          <div class="course">数学</div>
          <div class="score">{{item.math}}分</div>
        </div>
        <div class="listItem">
          <div class="course">英语</div>
          <div class="score">{{item.english}}分</div>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  created() {
    this.$store.dispatch('getScoreDetail', 1)
  },
  computed: {
    ...mapState(['scoreDetail'])
  }
}
</script>

<style scoped>
  .scoreDetailContainer {
    width: 100%;
    height: 100%;
  }
  .scoreHeader {
    display: flex;
    width: 100%;
    height: 130px;
    color: rgba(80, 80, 80, 1);
    font-size: 14px;
    line-height: 150%;
    text-align: center;
  }
  .avatarImg {
    position: absolute;
    top: 35px;
    width: 30%;
  }
  .info {
    position: absolute;
    display: flex;
    width: 70%;
    flex-direction: column;
    align-items: flex-start;
    top: 35px;
    left: 90px;
  }
  .avatar {
    width: 46px;
    height: 46px;
    border-radius: 123px;
  }
  .mood {
    width: 253px;
    height: 50px;
    color: rgba(80, 80, 80, 1);
    background-color:	#48D1CC;
    border-radius: 2px;
    font-size: 14px;
    line-height: 150%;
    text-align: left;
    border: 1px solid #ccc;
  }
  .listItem {
    display: flex;
    width: 100%;
    height: 48px;
    background-color: #fff;
    margin: 5px 0;
    line-height: 48px;
    align-items: center;
    justify-content: space-between;
  }
  .course {
    width: 50px;
    height: 38px;
    background-color:	#48D1CC;
    line-height: 38px;
    margin-left: 6px;
    text-align: center;
  }
  .score {
    margin: 0 14px;
  }
</style>
