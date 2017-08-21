<template>
    <div class="wxdgl">
        <div class="commonPart-head">
            <a href="javascript:;">维修单管理</a>
        </div>
        <div class="commonPart-search">
            <form action method="post">
                <div class="search-select fl mr40">
                    <label for class="search-label">医院列表：</label>
                    <input type="text" placeholder="深圳市第一医院" />
                    <a href="javascript:void(0)" class="icon" @click="table">
                        <img src="../../assets/xiala.png" />
                    </a>
                    <div id="biaoge" style="z-index:1001;position:absolute;left:116px;display:none;">
                        <Table highlight-row height="375" border :columns="columns3" :data="tableData"></Table>
                    </div>
                </div>
                <div class="search-select fl mr40">
                    <label for>维修状态：</label>
                    <Select style="width:160px">
                        <Option value="巴豆" </Option>
                    </Select>
                </div>
                <div class="search-select fl mr40">
                    <label for class="search-label">设备名称：</label>
                    <input type="text" placeholder="名称/编号/拼音简码" />
                    <a href="javascript:void(0)" class="icon" @click="table">
                        <img src="../../assets/xiala.png" />
                    </a>
                    <div id="biaoge" style="z-index:1001;position:absolute;left:116px;display:none;">
                        <Table highlight-row height="375" border :columns="columns3" :data="tableData"></Table>
                    </div>
                </div>
                <div class="search-select fl mr40">
                    <label for>报修科室：</label>
                    <Select style="width:160px">
                        <Option value="巴豆" </Option>
                    </Select>
                </div>
                <div class="search-select fl mr40">
                    <label for style="float:left">报修时间：</label>
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
        <div>
            <Table :context="self" :columns="columns8" :data="data7" ref="table"></Table>
            <Page :total="100" page-size-opts show-elevator style="float:right; margin: 15px 30px 0 0;"></Page>
        </div>
        <!--主体内容区域end-->
    </div>
</template>
<script>
export default {
    data() {
        return {
            self: this,
            columns8: [
                {
                    "title": "维修单号",
                    "key": "show",
                    // "width": 172,
                    "sortable": true,
                },
                {
                    "title": "设备编号",
                    "key": "weak",
                    // "width": 172,
                    // "sortable": true
                },
                {
                    "title": "设备名称",
                    "key": "signin",
                    // "width": 172,
                    "sortable": true
                },
                {
                    "title": "设备型号",
                    "key": "click",
                    // "width": 172,
                    // "sortable": true
                },
                {
                    "title": "报修科室",
                    "key": "active",
                    // "width": 172,
                    // "sortable": true
                },
                {
                    "title": "报修时间",
                    "key": "day7",
                    // "width": 172,
                    "sortable": true
                },
                {
                    "title": "故障描述",
                    "key": "day30",
                    // "width": 172,
                    // "sortable": true
                },
                {
                    "title": "紧急程度",
                    "key": "tomorrow",
                    // "width": 172,
                    "sortable": true
                },
                {
                    "title": "维修进度",
                    "key": "day",
                    // "width": 172,
                    // "sortable": true
                },
                {
                    "title": "操作",
                    "key": "week",
                    // "width": 173,
                    // "sortable": true
                }
            ],
            data7: [
                {
                    "fav": 5555,
                    "show": 7302,
                    "weak": 5627,
                    "signin": 1563,
                    "click": 4254,
                    "active": 1438,
                    "day7": 274,
                    "day30": 285,
                    "tomorrow": 1727,
                    "day": 558,
                    "week": 4440,
                    "month": 5610
                },
                {
                    "name": "推广名称2",
                    "fav": 0,
                    "show": 4720,
                    "weak": 4086,
                    "signin": 3792,
                    "click": 8690,
                    "active": 8470,
                    "day7": 8172,
                    "day30": 5197,
                    "tomorrow": 1684,
                    "day": 2593,
                    "week": 2507,
                    "month": 1537
                },
                {
                    "name": "推广名称3",
                    "fav": 0,
                    "show": 7181,
                    "weak": 8007,
                    "signin": 8477,
                    "click": 1879,
                    "active": 16,
                    "day7": 2249,
                    "day30": 3450,
                    "tomorrow": 377,
                    "day": 1561,
                    "week": 3219,
                    "month": 1588
                },
                {
                    "name": "推广名称4",
                    "fav": 0,
                    "show": 9911,
                    "weak": 8976,
                    "signin": 8807,
                    "click": 8050,
                    "active": 7668,
                    "day7": 1547,
                    "day30": 2357,
                    "tomorrow": 7278,
                    "day": 5309,
                    "week": 1655,
                    "month": 9043
                },
                {
                    "name": "推广名称5",
                    "fav": 0,
                    "show": 934,
                    "weak": 1394,
                    "signin": 6463,
                    "click": 5278,
                    "active": 9256,
                    "day7": 209,
                    "day30": 3563,
                    "tomorrow": 8285,
                    "day": 1230,
                    "week": 4840,
                    "month": 9908
                },
                {
                    "name": "推广名称6",
                    "fav": 0,
                    "show": 6856,
                    "weak": 1608,
                    "signin": 457,
                    "click": 4949,
                    "active": 2909,
                    "day7": 4525,
                    "day30": 6171,
                    "tomorrow": 1920,
                    "day": 1966,
                    "week": 904,
                    "month": 6851
                },
                {
                    "name": "推广名称7",
                    "fav": 0,
                    "show": 5107,
                    "weak": 6407,
                    "signin": 4166,
                    "click": 7970,
                    "active": 1002,
                    "day7": 8701,
                    "day30": 9040,
                    "tomorrow": 7632,
                    "day": 4061,
                    "week": 4359,
                    "month": 3676
                },
                {
                    "name": "推广名称8",
                    "fav": 0,
                    "show": 862,
                    "weak": 6520,
                    "signin": 6696,
                    "click": 3209,
                    "active": 6801,
                    "day7": 6364,
                    "day30": 6850,
                    "tomorrow": 9408,
                    "day": 2481,
                    "week": 1479,
                    "month": 2346
                },
                {
                    "name": "推广名称9",
                    "fav": 0,
                    "show": 567,
                    "weak": 5859,
                    "signin": 128,
                    "click": 6593,
                    "active": 1971,
                    "day7": 7596,
                    "day30": 3546,
                    "tomorrow": 6641,
                    "day": 1611,
                    "week": 5534,
                    "month": 3190
                },
            ]
        }
    },
}
</script>

<style scoped>
.ivu-table th {
    height: 94px;
    white-space: nowrap;
    overflow: hidden;
    background-color: #f5f7f9;
}

.ivu-select-selection {
    border-radius: 6px;
    border: 1px solid #d7dde4;
    transition: none;
}

.ivu-table-header tr {
    height: 60px;
    text-align: left;
    width: 130px;
    max-width: 260px;
    min-width: 120px;
}
</style>
