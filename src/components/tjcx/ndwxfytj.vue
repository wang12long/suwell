<template>
    <div class="ndwxfytj">
        <!--顶部内容部分 SOF-->
        <div class="commonPart-head">
            <a href="javascript:;" class="fl">年度维修费用统计</a>
            <div class="right-btn fr">
                <a onclick='javascript:window.print();' class="putOut fr">打印</a>
            </div>
        </div>
        <!--顶部内容部分 EOF-->
        <!-- 搜索栏 SOF-->
        <div class="commonPart-search">
            <Form :model="search">
                <div class="search-select fl mr40">
                    <label for class="search-label">医院列表：</label>
                    <input type="text" placeholder="名称/编号/拼音简码" />
                    <a href="javascript:void(0)" class="icon" @click="table">
                        <img src="../../assets/xiala.png" />
                    </a>
                    <div id="biaoge" style="z-index:1001;position:absolute;left:116px;display:none;">
                        <Table highlight-row height="375" border :columns="columns3" :data="tableData"></Table>
                    </div>
                </div>
                <div class="search-select fl mr40">
                    <label for class="search-label">时间：</label>
                    <Select style="width:160px">
                        <Option v-for="item in zhuangtai" :value="item.value" :key="item">{{ item.label }}</Option>
                    </Select>
                </div>
                <div class="search-submit fl" style="margin-left:30px;">
                    <a @click="tableDta" class="filter">筛选</a>
                </div>
            </Form>
        </div>
        <!-- 搜索栏 EOF-->
        <div style="clear:both;"></div>
        <!--主体内容区域start-->
        <div class="ndwxfytj_body">
            <Table class="fl" width="600" stripe border :context="self" :columns="columns1" :data="data1"></Table>
            <div class="Echart fl" id="main" style="width:930px; height:400px;  margin:10px 0 0 20px; text-align:center">
                
            </div>
        </div>
        <!--主体内容区域end-->
    </div>
</template>
<script>
export default {


    data() {
        return {
            self: this,
            columns1: [
                {
                    title: '月份',
                    key: 'engineer',
                    width: 150
                },
                {
                    title: '维修费用(元)',
                    key: 'workload',
                    width: 150
                },
                {
                    title: '配件费用(元)',
                    key: 'workload',
                    width: 150
                },
                {
                    title: '总费用',
                    key: 'workload',
                    width: 150
                }
            ],
            data1: [

            ],
        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('main'))
            // 绘制图表
            myChart.setOption({
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '55%',
                        data: [
                            { value: 235, name: '123' },
                            { value: 274, name: '456' },
                            { value: 320, name: '789' },
                            { value: 500, name: '258' },
                        ],
                        itemStyle: {    /*设置通用的样式，以键值对的形式呈现*/
                            normal: {   // 该选项是正常展示下的样式
                                // 阴影的大小
                                shadowBlur: 200,
                                // 阴影水平方向上的偏移
                                shadowOffsetX: 0,
                                // 阴影垂直方向上的偏移
                                shadowOffsetY: 0,
                                // 阴影颜色
                                shadowColor: 'rgba(0, 0, 0, 0.1)'
                            },
                            emphasis: {   //该选项是鼠标 hover 时候的高亮样式
                                shadowBlur: 200,
                                shadowColor: 'rgba(0, 0, 0, .5)'
                            }
                        }
                    }
                ],
            })
        }
    }
}
</script>
<style scoped>

</style>
