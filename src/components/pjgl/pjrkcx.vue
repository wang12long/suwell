<template>
    <div class="pjrkcx">
        <div class="commonPart-head">
            <a href="javascript:;" class="fl">配件入库查询</a>
        </div>
        <!--主体内容区域start-->
        <div class="pjrkcx_body">
            <Tabs value="name1" class="tabShow">
                <Tab-pane label="汇总查询" name="name1">
                    <div class="commonPart-search">
                        <Form :model="search">
                            <div class="search-select fl mr40">
                                <label for class="search-label">供应商：</label>
                                <input type="text" placeholder="名称/编号/拼音简码" />
                                <a href="javascript:void(0)" class="icon" @click="table">
                                    <img src="../../assets/xiala.png" />
                                </a>
                                <div id="biaoge" style="z-index:1001;position:absolute;left:116px;display:none;">
                                    <Table highlight-row height="375" border :columns="columns3" :data="tableData"></Table>
                                </div>
                            </div>
                            <div class="search-select fl mr40">
                                <label for class="search-label">入库单号：</label>
                                <input type="text" />
                            </div>
                            <div class="search-select fl mr40">
                                <label for style="float:left" class="search-label">入库时间：</label>
                                <Date-picker type="date" placeholder="选择日期" style="width: 110px !important" class="fl"></Date-picker>
                                <span style="text-align: center; float:left; margin:0 5px 0 5px;">至</span>
                                <Date-picker type="date" placeholder="选择日期" style="width: 110px !important" class="fl"></Date-picker>
                            </div>
                            <div class="search-submit fl" style="margin-left:30px;">
                                <a @click="tableDta" class="filter">筛选</a>
                            </div>
                        </Form>
                    </div>
                    <Table border :columns="columns2" :data="data1"></Table>
                    <Page :total="100" page-size-opts show-elevator style="float:right; margin: 15px 30px 0 0;"></Page>
                </Tab-pane>
                <Tab-pane label="明细查询" name="name2">
                    <div class="commonPart-search">
                        <Form :model="search">
                            <div class="search-select fl mr40">
                                <label for class="search-label">供应商：</label>
                                <input type="text" placeholder="名称/编号/拼音简码"/>
                                <a href="javascript:void(0)" class="icon" @click="table">
                                    <img src="../../assets/xiala.png" />
                                </a>
                                <div id="biaoge" style="z-index:1001;position:absolute;left:116px;display:none;">
                                    <Table highlight-row height="375" border :columns="columns3" :data="tableData"></Table>
                                </div>
                            </div>
                            <div class="search-select fl mr40">
                                <label for class="search-label">入库单号：</label>
                                <input type="text" />
                            </div>
                            <div class="search-select fl mr40">
                                <label for class="search-label">配件名称：</label>
                                <input type="text" placeholder="名称/编号/拼音简码"/>
                                <a href="javascript:void(0)" class="icon" @click="table">
                                    <img src="../../assets/xiala.png" />
                                </a>
                                <div id="biaoge" style="z-index:1001;position:absolute;left:116px;display:none;">
                                    <Table highlight-row height="375" border :columns="columns3" :data="tableData"></Table>
                                </div>
                            </div>
                            <div class="search-select fl mr40">
                                <label for style="float:left" class="search-label">入库时间：</label>
                                <Date-picker type="date" placeholder="选择日期" style="width: 110px !important" class="fl"></Date-picker>
                                <span style="text-align: center; float:left; margin:0 5px 0 5px;">至</span>
                                <Date-picker type="date" placeholder="选择日期" style="width: 110px !important" class="fl"></Date-picker>
                            </div>
                            <div class="search-submit fl" style="margin-left:30px;">
                                <a @click="tableDta" class="filter">筛选</a>
                            </div>
                        </Form>
                    </div>
                    <Table border :columns="columns1" :data="data2"></Table>
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
            columns1: [
                {
                    title: '入库日期',
                    key: 'name'
                },
                {
                    title: '入库单号',
                    key: 'age'
                },
                {
                    title: '供应商',
                    key: 'address'
                },
                {
                    title: '配件编号',
                    key: 'address'
                },
                {
                    title: '配件名称',
                    key: 'address'
                },
                {
                    title: '配件型号',
                    key: 'address'
                },
                {
                    title: '单位',
                    key: 'address'
                },
                {
                    title: '入库单价',
                    key: 'address'
                },
                {
                    title: '入库数量',
                    key: 'address'
                },
                {
                    title: '金额',
                    key: 'address'
                }
            ],
            columns2: [
                {
                    title: '入库日期',
                    key: 'name'
                },
                {
                    title: '入库单号',
                    key: 'age'
                },
                {
                    title: '供应商',
                    key: 'address'
                },
                {
                    title: '数量',
                    key: 'address'
                },
                {
                    title: '金额',
                    key: 'address'
                },
                {
                    title: '操作',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: '王小明',
                    age: 18,
                    address: 'drhnrt'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: 'rtmrdx'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                }
            ],
            data2: [
                {
                    name: '王小西',
                    age: 18,
                    address: 'drhnrt'
                },
                {
                    name: '张刚',
                    age: 25,
                    address: '北京'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: 'rtmrdx'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深南大道'
                }
            ]
        }
    }
}
</script>
<style scoped>
/*根据原来设计图给出margin设置*/

.tabShow {
    margin: 20px;
}
</style>

