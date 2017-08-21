<template>
    <div class="wxgstj">
        <!--顶部内容部分 SOF-->
        <div class="commonPart-head">
            <a href="javascript:;" class="fl">维修类型统计</a>
            <div class="right-btn fr">
                <a onclick='javascript:window.print();'>打印</a>
            </div>
        </div>
        <!--顶部内容部分 EOF-->
        <div class="commonPart-search">
            <form action method="post">
                <div class="search-select fl mr40">
                    <label for>医院列表：</label>
                    <Select style="width:160px">
                        <Option value="巴豆" </Option>
                    </Select>
                </div>
                <div class="search-select fl mr40">
                    <label for>故障类型：</label>
                    <Select style="width:160px">
                        <Option value="巴豆" </Option>
                    </Select>
                </div>
                <div class="search-select fl mr40">
                    <label for>报修科室：</label>
                    <Select style="width:160px">
                        <Option value="巴豆"></Option>
                    </Select>
                </div>
                <div class="search-select fl mr40">
                    <label for style="float:left">维修时间：</label>
                    <Date-picker type="date" placeholder="选择日期" style="width: 110px; float:left"></Date-picker>
                    <span style="text-align: center; float:left; margin:0 5px 0 5px;">至</span>
                    <Date-picker type="date" placeholder="选择日期" style="width: 110px; float:left"></Date-picker>
                </div>
                <div class="search-submit fl" style="margin-left:30px;">
                    <a onclick="" class="filter">筛选</a>
                </div>
            </form>
        </div>
        <div style="clear:both;"></div>
    
        <!--主体内容区域start-->
        <div class="wxgstj_body">
            <Tabs value="name1" class="tabShow">
                <Tab-pane label="故障类型分析图" name="name1">
                    <Table class="fl" width="570" stripe :context="self" :columns="columns1" :data="data1"></Table>
                    <div class="Echart fl" id="main" style="width:930px; height:400px;  margin:10px 0 0 20px; text-align:center">
                    </div>
                </Tab-pane>
                <Tab-pane label="故障类型明细" name="name2">
                    <Table :context="self" :columns="columns2" :data="data2"></Table>
                    <Page :total="100" page-size-opts show-elevator style="float:right; margin: 15px 30px 0 0;"></Page>
                </Tab-pane>
            </Tabs>
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
                    title: '故障类型',
                    key: 'engineer',
                    width: 193
                },
                {
                    title: '维修次数',
                    key: 'workload',
                    width: 193
                },
                {
                    title: '维修金额',
                    key: 'workload',
                    width: 193
                }
            ],
            data1: [
                // {
                //     engineer: '王小明',
                //     workload: 18
                // },
                // {
                //     engineer: '张小刚',
                //     workload: 25
                // },
                // {
                //     engineer: '李小红',
                //     workload: 30
                // },
                // {
                //     engineer: '周小伟',
                //     workload: 26
                // }
            ],
            columns2: [
                {
                    title: '设备名称',
                    key: 'engineer',
                },
                {
                    title: '报修科室',
                    key: 'workload',
                },
                {
                    title: '维修费用(元)',
                    key: 'workload',
                },
                {
                    title: '维修日期',
                    key: 'workload',
                },
                {
                    title: '工程师',
                    key: 'workload',
                },
                {
                    title: '故障类型',
                    key: 'workload',
                },
                {
                    title: '维修情况',
                    key: 'workload',
                }
            ],
            data2: [
                {
                    engineer: '王小明',
                    workload: 18
                },
                {
                    engineer: '张小刚',
                    workload: 25
                },
                {
                    engineer: '李小红',
                    workload: 30
                },
                {
                    engineer: '周小伟',
                    workload: 26
                }
            ]
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
                            { value: 35, name: '没数据' },
                            { value: 274, name: '怪我咯' },
                            { value: 150, name: '是不是' },
                            { value: 30, name: '是' },
                            { value: 320, name: '是不' },
                            { value: 20, name: '是dsdv' }
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
.ivu-table-header th {
    height: 40px;
    text-align: left;
    width: 130px;
    max-width: 260px;
    min-width: 120px;
}


/*根据原来设计图给出margin设置*/

.tabShow {
    margin: 20px;
}
</style>

