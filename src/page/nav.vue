<template>
  <div class="wrap">
    <div class="nav">
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
          <MenuGroup title="使用">
            <MenuItem name="3-1" to="/shopList/shopList">新增和启动</MenuItem>
            <MenuItem name="3-2" to="/newMember/newMember">活跃分析</MenuItem>
            <MenuItem name="3-3" to="/userList/userList">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4" to="/visitor/visitor">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
    </div>
    <div style="flex: 1;">
      <div>
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
  export default {}
</script>
<style scoped>
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
  .nav-title img{
    height: 80%;
    vertical-align:middle;
  }
</style>
