<template>
    <div class="pjrk">
        <div class="pjrk-main">
            <div class="commonPart-head">
                <a href="javascript:;" class="fl">配件入库</a>
                <div class="right-btn fr" style="top:0">
                    <div class="khgl-right fr">
                        <div class="pjrk-right">
                            <Button class="pldr" @click="modal1 = true">新增入库单</Button>
                            <Modal class="title" v-model="modal1" title="新增厂商" @on-ok="ok" @on-cancel="cancel">

                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 搜索栏 SOF-->
            <div class="commonPart-search">
                <Form :model="search">
                    <div class="search-select fl mr40">
                        <label for class="search-label">入库单号：</label>
                        <input type="text" />
                    </div>
                    <div class="search-select fl mr40">
                        <label for class="search-label">供应商：</label>
                        <input type="text" />
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
            <!-- 搜索栏 EOF-->
            <div style="clear:both;"></div>
    
            <div class="pjrk-table">
                <Table size="default" border :columns="tableColumns" :data="maintableData" no-data-text></Table>
                <Page :total="100" page-size-opts show-elevator style="float:right; margin: 15px 30px 0 0;"></Page>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            modal1: false,
            maintableData: [],
            tableColumns: [
                {
                    title: '入库日期',
                    key: 'rkrq',
                },
                {
                    title: '入库单号',
                    key: 'rkdh',
                    "sortable": true
                },
                {
                    title: '供应商',
                    key: 'gys'
                },
                {
                    title: '入库数量',
                    key: 'rksl',
                    align: 'right'
                },
                {
                    title: '入库金额',
                    key: 'rkje',
                    align: 'right'
                },
                {
                    title: '备注',
                    key: 'bz',
                    align: 'left'
                },
                {
                    title: '操作',
                    key: 'cz'
                },
            ],
        }
    },
    methods: {
       
    }
}
</script>
<style scope>
.pldr {
    background: #21a67a;
    outline: none;
}
</style>

