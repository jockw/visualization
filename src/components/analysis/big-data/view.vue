<template>
    <div :class="$style.wrap">
        <div :class="$style.head">云计算服务监控</div>
        <div :class="$style.body">
            <div :class="$style.task">
                <div :class="$style.title">任务总量</div>
                <div :class="$style.taskEchart" style="width: 100%;height:400px;"></div>
                <div :class="$style.title2">
                    <div>
                        <div :class="$style.title">任务分布</div>
                        <div :class="$style.distributionRadar" style="width: 100%;height:400px;"></div>
                    </div>
                    <div>
                        <div :class="$style.title">任务成功</div>
                        <div :class="$style.successPie"></div>
                    </div>
                </div>
                <div :class="$style.title">任务完成率</div>
                <div :class="$style.finishEchart"></div>
            </div>
            <div :class="$style.trend">
                <div :class="$style.title">云计算任务趋势</div>
                <div :class="$style.trendEchart"></div>
                <div :class="$style.title2">
                    <div>
                        <title>任务管理</title>

                    </div>
                    <div>
                        <title>平均容量</title>
                        <div :class="$style.capacityEchart"></div>
                        <title>存储容量</title>
                        <div :class="$style.storeEchart"></div>
                    </div>
                </div>

            </div>
            <div class="$style.resource">
                <div :class="$style.title">云计算总资源</div>
                <div :class="$style.sourceEcharts"></div>
                <div :class="$style.title">cpu利用率</div>
                <div :class="$style.cpuEcharts"></div>
                <div :class="$style.title">内存利用率</div>
                <div :class="$style.storageEcharts"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { cityGuess, addShop, searchplace, foodCategory } from '../../../api/getData'
    import {baseUrl, baseImgPath} from '../../../config/env';
    import { taskOptions, radarOptions } from './options';

    export default {
    	data(){
    		return {
    			city: {},
    			formData: {
					name: '', //店铺名称
					address: '', //地址
					latitude: '',
					longitude: '',
		        },
    		}
    	},
    	components: {},
    	mounted(){
            this.$nextTick(function () {
                this.drawTaskEchart();
                this.drawRadarEchart();
            })
            
    	},
    	methods: {
			drawTaskEchart(){
                const myChart = echarts.init(document.querySelector(`.${this.$style.taskEchart}`));
                myChart.setOption(taskOptions);
            },
            drawRadarEchart(){
                const myChart = echarts.init(document.querySelector(`.${this.$style.distributionRadar}`));
                myChart.setOption(radarOptions);
            }
		}
    }
</script>

<style module>
.wrap {
  width: 100%;
  height: 100%;
  background-color: rgb(17, 33, 76);
  background-image: url('../../img/bg.png');
  background-repeat: no-repeat;
  background-position: center 0;
  background-size: contain;
  box-shadow: 0px 0px 5px rgb(17, 33, 76);
}
.head{
    text-align: center;
    color: #fff;
    font-size: 20px;
    padding-top: 5vh;
}
.bold {
  font-weight: bold;
}
.body{  display: flex; padding: 0 30px;}
.body .trend{ flex: 1; margin: 0 16px }
.body .task,.resource{
    width: 25%;
}
.title,title{
    width: 100%;
    background-image: linear-gradient(to right, #17387d , #182155);
    color: #fff;
    padding-left: 8px;
    font-size: 18px;
}
.title2{
    display: flex;
}
.title2 > div{ flex: 1}
.taskEchart{}
.distributionRadar{}
</style>
