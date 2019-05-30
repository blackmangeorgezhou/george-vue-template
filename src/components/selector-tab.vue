<template>
  <!-- 筛选条目 -->
  <div id="selector-tab">
    <div id="first-level">
      <span class="align-center" :class="selectTabIndex === 1? 'color-active-tab' : ''" @click="changeSelectTab(1)">
        <span>{{currentRegion || '班型'}}</span>
        <van-icon :name="selectTabIndex === 1 && showRegion? 'arrow-up' : 'arrow-down'" size=".5rem"></van-icon>
      </span>
      <span class="align-center" @click="changeSelectTab(3)" :class="selectTabIndex === 3? 'color-active-tab' : ''">
        <span>{{currentGrade || '年级'}}</span>
        <van-icon :name="selectTabIndex === 3 && showRegion? 'arrow-up' : 'arrow-down'" size=".5rem"></van-icon>
      </span>
    </div>
    <div v-if="showRegion && selectTabIndex === 1">
      <van-cell v-for="(item, index) in regionList" :key="index" :value="item" @click="changeClassType(item)"></van-cell>
    </div>
    <div v-if="showRegion && selectTabIndex === 2">
      <van-cell v-for="(item, index) in subjectList" :key="index" :value="item" @click="changeSubject(item)"></van-cell>
    </div>
    <div v-if="showRegion && selectTabIndex === 3">
      <van-cell v-for="(item, index) in gradeList" :key="index" :value="item" @click="changeGrade(item)"></van-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectorTab',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
#selector-tab {
  position: absolute;
  top: 40px;
  width: 100%;
  z-index: 500;
  background-color: #fff
}

#first-level {
  font-size: 1rem;
  padding: .625rem .9375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #F5F7FA;
  border-bottom: .0625rem solid #cccccc
}

.align-center {
  text-align: center
}

.color-active-tab {
  color: #54a8f2
}
</style>
