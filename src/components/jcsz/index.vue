
<style scoped lang="less">
     .bmgl{
        width: 100%;
        height:950px;
        background:#ccc;
    }
    .bmgl-main{
        width:100%;
        height:950px;
        background:#fff;
    }
    .bmgl-header{
        width: 100%;
        height:60px;
        background:#fff;
        border-bottom:2px solid #298ff8;
    }
    .bmgl-left{
        float:left;
    }
    .bmgl-right{
        float:right;
        margin-right:1%;
        line-height:60px;
    }
    .bmgl-left a{
        display:block;
        padding:20px;
        font-size:16px;
        text-decoration:none;
        color:#3399cc;
    }
    .pldr,.add{
        background:#21a67a;
        outline-line:none;
    }
    .bmgl-middle,.bmgl-table{
        clear:both;
    }
    .bmgl-search{
        padding:10px 20px 10px 40px;
        float:left;
    }
    
    .bmgl-search .word{
        width:70px;
    }
    .bmgl-search input{
        width:143px;
        height:30px;
        border-radius:4px;
        outline:none;
        border:1px solid #e6e6e6;
        text-indent:10px;
    }
    .bmgl-sx{
        float:left;
        padding:17px 20px 10px 40px;
    }
    .bmgl-sx a{
        text-decoration:none;
        display:block;
        color:#298ff8;
        text-align:center;
        line-height:30px;
    }
    .bmgl-sxCurrent{
        width:80px;
        height:30px;
        background:pink;
        color:#fff;
        margin-top:-8px;
        border-radius:4px;
    }

    .xxtx{
        font-size:16px;
        color:#333333;
        padding:35px 0 40px 35px;
    }

    .bmgl-firstLine-left{
        float:left;
        margin-left:5.5px;
    }
    .bmgl-firstLine-right{
        float:right;
    }
    .bmgl-secondLine,.bmgl-thirdLine{
        clear:both;
    }
    .bmgl-secondLine-left{
        float:left;
    }
    .bmgl-secondLine-right{
        float:right;
    }
    .bmgl-secondLine,.bmgl-thirdLine{
        padding:15px 0;
    }
    .bmgl-firstLine input,.bmgl-secondLine input,.bmgl-thirdLine input{
        width:160px;
        height:30px;
        border:1px solid #ccc;
        background:#EBEBEB;
        border-radius:4px;
        outline:none;
    }
    #bmdz{
        width:421px;
    }
    .bmgl-thirdLine-left{
        margin-left:12px;
    }

    .bmgl-firstLine-left,.bmgl-secondLine-left,.bmgl-thirdLine-left{
        float:left;
    }
    .bmgl-firstLine-right,.bmgl-secondLine-right,.bmgl-thirdLine-right{
        float:right;
    }
    .bmgl-secondLine,.bmgl-thirdLine,.bmgl-fouthLine{
        clear:both;
        padding:15px 0;
    }
    .word{
        color:#333333;
        font-size:12px;
    }
    .bmgl-firstLine input,.bmgl-firstLine input{
        width:160px;
        height:30px;
        background:#EBEBEB;
        border:1px solid #ccc;
        outline:none;
        border-radius:4px;
        padding-left:10px
    }
    .bmgl-secondLine input,.bmgl-thirdLine input{
        width:160px;
        height:30px;
        border:1px solid #ccc;
        outline:none;
        border-radius:4px;
        padding-left:10px
    }
    .bmgl-fouthLine input{
        width:411px;
        height:30px;
        border:1px solid #ccc;
        outline:none;
        border-radius:4px;
        padding-left:10px
    }
    #bmgl-firstLine-input::-webkit-input-placeholder{
        color: #808080;
        font-size:12px;
    }
    #bmgl-firstLine-input::-moz-placeholder{  
        color: #808080;
        font-size:12px;
    }
    #bmgl-firstLine-input:-ms-input-placeholder{ 
        color: #808080;
        font-size:12px;
    }
    #bmbh-input::-webkit-input-placeholder{
        color: #ccc;
        font-size:12px;
    }
    #bmbh-input::-moz-placeholder{  
        color: #ccc;
        font-size:12px;
    }
    #bmbh-input:-ms-input-placeholder{ 
        color: #ccc;
        font-size:12px;
    }
    .bmgl-secondLine-left .word{
        margin-left:18px;
    }
    .bmgl-thirdLine-left .word{
        margin-left:11px;
    }
    .bmgl-fouthLine-left .word{
        margin-left:23px;
    }
</style>
<template>
    <div class = "bmgl">
        <div class = "bmgl-main">
            <div class = "bmgl-header">
                <div class = "bmgl-left"><a href = "#">部门管理</a></div>
                <div class = "bmgl-right">
                    <Button class = "pldr">批量导入</Button>
                    <Button class = "add" @click="modal1 = true">添加一级部门</Button>
                    <Modal v-model="modal1" title="消息提醒" @on-ok="ok" @on-cancel="cancel">
                        <div class = "xxtx">您正在执行停用操作 , 确定要停用吗</div>  
                    </Modal>
                    <Modal v-model="modal1" title="添加一级部门" @on-ok="ok" @on-cancel="cancel">
                        <div class = "bmgl-firstLine">
                            <div class = "bmgl-firstLine-left">
                                <label class = "word">*部门名称:</label>
                                <input type = "text" placeholder = "若不输入则自动生成">
                            </div>
                            <div class = "bmgl-firstLine-right">
                                <label class = "word">部门编号:</label>
                                <input type = "text">
                            </div>
                        </div>
                        <div class = "bmgl-secondLine">
                            <div class = "bmgl-secondLine-left">
                                <label class = "word">部门负责人:</label>
                                <input type = "text">
                            </div>
                            <div class = "bmgl-secondLine-right">
                                <label class = "word">座机:</label>
                                <input type = "text">
                            </div>
                        </div>
                        <div class = "bmgl-thirdLine">
                            <div class = "bmgl-thirdLine-left">
                                <label class = "word">部门地址:</label>
                                <input type = "text" id = "bmdz">
                            </div>
                        </div>
                    </Modal>
                    <Modal v-model="modal1" title="添加二级部门" @on-ok="ok" @on-cancel="cancel">
                        <div class = "bmgl-firstLine">
                            <div class = "bmgl-firstLine-left">
                                <label class = "word">上级部门编号:</label>
                                <input id = "bmgl-firstLine-input" type = "text" placeholder = "若不输入则自动生成">
                            </div>
                            <div class = "bmgl-firstLine-right">
                                <label class = "word">上级部门名称:</label>
                                <input id = "bmgl-firstLine-input" type = "text" placeholder = "若不输入则自动生成">
                            </div>
                        </div>
                        <div class = "bmgl-secondLine">
                            <div class = "bmgl-secondLine-left">
                                <label class = "word">*部门名称:</label>
                                <input type = "text">
                            </div>
                            <div class = "bmgl-secondLine-right">
                                <label class = "word">部门编号:</label>
                                <input id = "bmbh-input" type = "text" placeholder = "若不输入则自动生成">
                            </div>
                        </div>
                        <div class = "bmgl-thirdLine">
                            <div class = "bmgl-thirdLine-left">
                                <label class = "word">部门负责人:</label>
                                <input type = "text">
                            </div>
                            <div class = "bmgl-thirdLine-right">
                                <label class = "word">座机:</label>
                                <input type = "text">
                            </div>
                        </div>
                        <div class = "bmgl-fouthLine">
                            <div class = "bmgl-fouthLine-left">
                                <label class = "word">部门地址:</label>
                                <input type = "text">
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
            <div class = "bmgl-middle">
                <div class = "bmgl-search">
                    <label id = "word">部门名称:</label>
                    <input type = "text" placeholder = "名称/编号/拼音简码">
                </div> 
                <div class = "bmgl-sx">
                    <a class = "bmgl-sxCurrent">筛选</a>
                </div>
            </div>
            <div class = "bmgl-table">
                <Table :columns="columns8" :data="data7" size="small" ref="table"></Table>
                <br>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
                columns8: [
                    {
                        "title": "部门名称",
                        "key": "name",
                        "fixed": "left",
                        "width":320
                    },
                    {
                        "title": "部门编号",
                        "key": "show",
                        "width": 280,
                        "sortable": true,
                    },
                    {
                        "title": "座机",
                        "key": "weak",
                        "width": 280,
                    },
                    {
                        "title": "负责人",
                        "key": "signin",
                        "width": 370,
                    },
                    {
                        "title": "部门地址",
                        "key": "click",
                        "width": 370,
                    },
                    {
                        "title": "状态",
                        "key": "active",
                        "width": 130,
                    },
                    {
                        "title": "操作",
                        "key": "day7",
                        "width": 200,
                    }
                ],
                data7: [
                    {
                        "name": "推广名称1",
                        "fav": 0,
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
                    {
                        "name": "推广名称10",
                        "fav": 0,
                        "show": 3651,
                        "weak": 1819,
                        "signin": 4595,
                        "click": 7499,
                        "active": 7405,
                        "day7": 8710,
                        "day30": 5518,
                        "tomorrow": 428,
                        "day": 9768,
                        "week": 2864,
                        "month": 5811
                    }
                ]
            }
        },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>