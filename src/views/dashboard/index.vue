<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{name}}</div>
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>
  	<ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  data(){
  	return{
  		chartData:{
	        columns: ['日期', '成本', '利润'],
	        rows: [
	          { '日期': '1月1号', '成本': 123, '利润': 3 },
	          { '日期': '1月2号', '成本': 1223, '利润': 6 },
	          { '日期': '1月3号', '成本': 2123, '利润': 9 },
	          { '日期': '1月4号', '成本': 4123, '利润': 12 },
	          { '日期': '1月5号', '成本': 3123, '利润': 15 },
	          { '日期': '1月6号', '成本': 7123, '利润': 20 }
	        ]
	     },
	    chartSettings:{
	    		dataType: 'KMB'
	    }
  	}
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
