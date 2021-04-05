<template>
    <div style="padding: 8px">
     	<div class="search-wrap">
        <Input v-model="userName" placeholder="用户名" style="width: 300px;margin-right: 10px" />
        <Input v-model="name" placeholder="姓名" style="width: 300px;margin-right: 10px" />
        <Button type="primary">查询</Button>
        <Button type="primary">新增</Button>
        <Button type="warning">修改</Button>
        <Button type="error">删除</Button>
      </div>
      <Table border :columns="columns1" :data="data1"></Table>
    </div>
</template>

<script>
    import {getCategory, addCategory, addFood} from '../../api/getData'

    export default {
      data () {
        return {
          userName: '',
          name: '',
          columns1: [
            {
              title: '用户名ID',
              key: 'userId'
            },
            {
              title: '用户名',
              key: 'name'
            },
            {
              title: '密码',
              key: 'age'
            },
            {
              title: '所属部门',
              key: 'address'
            }
          ],
          data1: [
            {
              name: 'John Brown',
              age: 18,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03'
            },
            {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01'
            },
            {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02'
            },
            {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04'
            }
          ]
        }
      },
    	components: {
    	},

    	computed: {
    		selectValue: function (){
    			return this.categoryForm.categoryList[this.categoryForm.categorySelect]||{}
    		}
    	},
    	methods: {
    		async initData(){
    			try{
    				const result = await getCategory(this.restaurant_id);
	    			if (result.status == 1) {
	    				result.category_list.map((item, index) => {
	    					item.value = index;
	    					item.label = item.name;
	    				})
	    				this.categoryForm.categoryList = result.category_list;
	    			}else{
	    				console.log(result)
	    			}
    			}catch(err){
    				console.log(err)
    			}
    		},
		    addCategoryFun(){
		    	this.showAddCategory = !this.showAddCategory;
		    },
		    submitcategoryForm(categoryForm) {
				this.$refs[categoryForm].validate(async (valid) => {
					if (valid) {
						const params = {
							name: this.categoryForm.name,
							description: this.categoryForm.description,
							restaurant_id: this.restaurant_id,
						}
						try{
							const result = await addCategory(params);
							if (result.status == 1) {
								this.initData();
								this.categoryForm.name = '';
								this.categoryForm.description = '';
								this.showAddCategory = false;
								this.$message({
					            	type: 'success',
					            	message: '添加成功'
					          	});
							}
						}catch(err){
							console.log(err)
						}
					} else {
						this.$notify.error({
							title: '错误',
							message: '请检查输入是否正确',
							offset: 100
						});
						return false;
					}
				});
			},
			uploadImg(res, file) {
				if (res.status == 1) {
					this.foodForm.image_path = res.image_path;
				}else{
					this.$message.error('上传图片失败！');
				}
			},
			beforeImgUpload(file) {
				const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png');
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isRightType) {
					this.$message.error('上传头像图片只能是 JPG 格式!');
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!');
				}
				return isRightType && isLt2M;
			},
			addspecs(){
				this.foodForm.specs.push({...this.specsForm});
				this.specsForm.specs = '';
				this.specsForm.packing_fee = 0;
				this.specsForm.price = 20;
				this.dialogFormVisible = false;
			},
			handleDelete(index){
				this.foodForm.specs.splice(index, 1);
			},
			tableRowClassName(row, index) {
		        if (index === 1) {
		        	return 'info-row';
		        } else if (index === 3) {
		        	return 'positive-row';
		        }
		        return '';
		    },
		    addFood(foodForm){
		    	this.$refs[foodForm].validate(async (valid) => {
					if (valid) {
						const params = {
							...this.foodForm,
							category_id: this.selectValue.id,
							restaurant_id: this.restaurant_id,
						}
						try{
							const result = await addFood(params);
							if (result.status == 1) {
								console.log(result)
								this.$message({
					            	type: 'success',
					            	message: '添加成功'
					          	});
					          	this.foodForm = {
				    				name: '',
				    				description: '',
				    				image_path: '',
				    				activity: '',
				    				attributes: [],
				    				specs: [{
				    					specs: '默认',
							          	packing_fee: 0,
							          	price: 20,
				    				}],
				    			}
							}else{
								this.$message({
					            	type: 'error',
					            	message: result.message
					          	});
							}
						}catch(err){
							console.log(err)
						}
					} else {
						this.$notify.error({
							title: '错误',
							message: '请检查输入是否正确',
							offset: 100
						});
						return false;
					}
				});
		    }
		}
    }
</script>

<style scoped>
	.search-wrap{
    margin-bottom: 10px;
  }
  .search-wrap > div{
    margin-right: 10px;
  }
</style>
