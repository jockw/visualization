<template>
  <div class="wrap">
    <div v-bind:class="{ 'nav': true, 'closeNav': closeNav }" >
      <div class="nav-title">
        <img src="https://file.iviewui.com/admin-pro-dist/img/logo-dark.11bf8723.png">
      </div>
      <Menu theme="dark" width="256px">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper" />
            系统管理
          </template>
          <MenuItem name="1-1" to="/user-admin/user-admin">用户管理</MenuItem>
          <MenuItem name="1-2" to="/addShop/addShop">角色管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-people" />
            拌合站管理
          </template>
          <MenuItem name="2-1" to="/foodList/foodList">沥青拌合站监管</MenuItem>
          <MenuItem name="2-2" to="/supervise/view">沥青拌合站监管大屏</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats" />
            统计分析
          </template>
          <MenuItem name="3-1" to="/analysis/big-data">日常大数据分析</MenuItem>
          <MenuItem name="3-2" to="/analysis/capital">资金分析</MenuItem>
          <MenuItem name="3-3" to="/analysis/run">运行分析</MenuItem>
          <MenuItem name="3-4" to="/analysis/sale">销售分析</MenuItem>
          <MenuItem name="3-5" to="/analysis/quality">质量监控</MenuItem>
          <MenuItem name="3-6" to="/analysis/heat">热力分析</MenuItem>
          <MenuItem name="3-7" to="/analysis/service">服务监控</MenuItem>
        </Submenu>
      </Menu>
    </div>
    <div style="flex: 1;">
      <div v-if="showTopNav">
        <Menu mode="horizontal" :theme="theme1" active-name="1">
          <MenuItem name="1">
            <Icon type="ios-paper" />
            内容管理
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
          </MenuItem>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />
              统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
          <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
          </MenuItem>
        </Menu>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import '../style/common.css'
  export default {
    data(){
      return {
        closeNav: false,
        showTopNav: true,
        isNavIcon: false,
      }
    },
    created(){
      const path = this.$route.path;
      console.log('path', path)
      if (path.startsWith('/analysis/')) {
        console.log('showTopNav', this.showTopNav)
        this.showTopNav = false;
      }
    },
    mounted(){
      console.log(this.$route.path)

    },
    methods:{
      getPath(val){
        if ((val.path || '').startsWith('/analysis/')) {
          console.log('showTopNav', this.showTopNav)
          this.showTopNav = false;
        }
      }
    },
    watch:{
      '$route':'getPath'
    }
  }
</script>
<style>
  .wrap{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .nav{
    width: 256px;
    height: 100%;
    background-color: #191a23;
  }
  .nav-title{
    height: 63px;
    color: #ffffff;
    line-height: 63px;
    text-align: center;
    font-size: 20px;
    background-color: #191a23;
    border-bottom: 1px solid #101117;
  }
  .closeNav{
    display: none;
  }
  .nav-title img{
    height: 80%;
    vertical-align:middle;
  }
</style>
