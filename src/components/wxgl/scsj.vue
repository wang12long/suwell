
<template>
    <div class="scsj" style="z-index:100;">
        <div class="scsj-main">
             <!--顶部内容部分 SOF-->
            <div class="commonPart-head">
                <a href="javascript:;" class="fl">市场商机</a>
            </div>
             <!--顶部内容部分 EOF-->
            <!-- 搜索栏 SOF-->
            <div class="commonPart-search">
                <Form :model="search">
                    <div class="search-select fl mr40">
                        <label for class="search-label">客户区域：</label>
                        <input type="text" />
                        <a href="javascript:void(0)" class="icon" @click="table">
                            <img src="../../assets/xiala.png" />
                        </a>
                        <div id="biaoge" style="z-index:1001;position:absolute;left:116px;display:none;">
                            <Table highlight-row height="375" border :columns="columns3" :data="data1"></Table>
                        </div>
                    </div>
                    <div class="search-select fl mr40">
                        <label for class="search-label">医院名称：</label>
                        <input type="text" placeholder="名称/编号/拼音简码"/>
                        <a href="javascript:void(0)" class="icon">
                            <img src="../../assets/xiala.png" />
                        </a>
                    </div>
                    <div class="search-select fl mr40">
                        <label for class="search-label">设备名称：</label>
                        <input type="text" placeholder="名称/编号/拼音简码"/>
                        <a href="javascript:void(0)" class="icon">
                            <img src="../../assets/xiala.png" />
                        </a>
                    </div>
                    <div class="search-select fl mr40">
                        <label for class="search-label">生产厂家：</label>
                        <input type="text" placeholder="名称/编号/拼音简码"/>
                        <a href="javascript:void(0)" class="icon">
                            <img src="../../assets/xiala.png" />
                        </a>
                    </div>
                    <div class="search-select fl mr40">
                        <label for style="float:left" class="search-label">提交时间：</label>
                        <Date-picker type="date" placeholder="选择日期" style="width: 110px !important" class="fl"></Date-picker>
                        <span style="text-align: center; float:left; margin:0 5px 0 5px;">至</span>
                        <Date-picker type="date" placeholder="选择日期" style="width: 110px !important" class="fl"></Date-picker>
                    </div>
                     <div class="search-select fl mr40">
                        <label for class="search-label">状态：</label>
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
            <div class="scsj-table">
                <Table size="large" :columns="columns1" :data="data1"></Table>
                 <Page :total="100" page-size-opts show-elevator style="float:right; margin: 15px 30px 0 0;"></Page>
            </div>
            <!--侧边栏显示效果-->
            <div class="tc" id="tc">
                <div class="tc-header">
                    <div class="bt">市场商机</div>
                    <div>
                        <img id="tp" v-on:click="guanbi" src="../../assets/close.png" />
                    </div>
                </div>
                <div style="clear:both;">
                    <div class="bxxq">保修详情：</div>
                    <div style="margin-top:30px;"></div>
                    <div class="form-group">
                        <div class="yymc">
                            <label>医院名称：</label>
                            <input type="text"></input>
                        </div>
                        <div class="sbmc">
                            <label>设备名称：</label>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div class="form-group1">
                        <div class="sbpp">
                            <label>设备品牌：</label>
                            <input type="text"></input>
                        </div>
                        <div class="sccj">
                            <label>生产厂家：</label>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div class="form-group2">
                        <div class="yydz">
                            <label>医院地址：</label>
                            <input type="text"></input>
                        </div>
                        <div class="bxks">
                            <label>保修科室：</label>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div class="form-group3">
                        <div class="lxr">
                            <label>联系人：</label>
                            <input type="text"></input>
                        </div>
                        <div class="lxdh">
                            <label>联系电话：</label>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div class="form-group4" style="clear:both;">
                        <div class="gzms">
                            <label>故障描述：</label>
                            <div class="textarea">
                                <textarea style="padding-left:10px;padding-top:10px;" cols="90" rows="4"></textarea>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="fjxq" style="clear:both;">附件详情：</div>
                        <div style="margin-top:30px;"></div>
                    </div>
                    <div>
                        <input style="margin-left:10px;" type="text" />
                        <input style="margin-left:40px;" type="text" />
                    </div>
                    <div>
                        <div class="yxxq">意向详情：</div>
                        <div style="margin-top:30px;"></div>
                        <div class="form-group5">
                            <div class="csmc">
                                <label>厂商名称：</label>
                                <input type="text"></input>
                            </div>
                            <div class="bj">
                                <label>报价：</label>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div class="form-group5">
                            <div class="lxr">
                                <label>
                                    <i class="star">*</i>
                                    联系人：
                                </label>
                                <input type="text"></input>
                            </div>
                            <div class="lxfs">
                                <label>联系方式：</label>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div class="form-group6" style="clear:both;">
                            <div class="xq">
                                <label>意向详情：</label>
                                <div class="textarea">
                                    <textarea style="padding-left:10px;padding-top:10px;" cols="90" rows="4"></textarea>
                                </div>
                                <div class="line"></div>
                            </div>
                            <div class="bottom">
                                <a href="javascript:void(0);" class="fs">发送</a>
                                <a href="javascript:void(0);" class="jd">接单</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="menban" id="menban"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            columns3: [
                {
                    type: 'index',
                    width: 40,
                    align: 'center'
                },
                {
                    title: '编号',
                    width: 115,
                    key: 'name',
                    align: 'center',
                    "sortable": true,
                },
                {
                    title: '客户名称',
                    width: 115,
                    key: 'age',
                    "sortable": true,
                    align: 'center'
                },
            ],
            zhuangtai: [
                {
                    value: 'qiyong',
                    label: '启用'
                },
                {
                    value: 'tingyong',
                    label: '停用'
                }
            ],
            columns1: [
                {
                    title: '地区',
                    key: 'name',
                },
                {
                    title: '医院名称',
                    key: 'age'
                },
                {
                    title: '设备名称',
                    key: 'address'
                },
                {
                    title: '生产厂家',
                    key: 'address'
                },
                {
                    title: '型号',
                    key: 'address1'
                },
                {
                    title: '故障描述',
                    key: 'gzms'
                },
                {
                    title: '目前状态',
                    key: 'address'
                },
                {
                    title: '操作',
                    key: 'address'
                },
            ],
            data1: [
                {
                    name: '00001',
                    age: 18,
                    address: 'sldgj',
                    gzms: 'ggggggg'

                },
                {
                    name: '00002',
                    age: 25,
                    address: 'dsgo'
                },
                {
                    name: '00003',
                    age: 30,
                    address: 'oygdsigh'
                },
                {
                    name: '00001',
                    age: 26,
                    address: '管理员'
                },
                {
                    name: '00005',
                    age: 26,
                    address: '启用'
                },
                {
                    name: '00001',
                    age: 26,
                    address: 'gfjghjfgj'
                },
                {
                    name: '00008',
                    age: 26,
                    address: 'fseogjs'
                },
                {
                    name: '00008',
                    age: 26,
                    address: 'ds'
                },
                {
                    name: '00008',
                    age: 26,
                    address: 'ds'
                }
            ]
        }
    },
    methods: {
        guanbi: function () {
            var pho = document.getElementById("tc");
            var mb = document.getElementById("menban");
            pho.style.display = "none";
            mb.style.display = "none";
        },
        table: function () {
            var biaoge = document.getElementById("biaoge");
            if (biaoge.style.display == "none") {
                biaoge.style.display = "block";
            }
            else {
                biaoge.style.display = "none";
            }
        }
    }
}
</script>
<style scoped>
.menban {
    z-index: 9009;
    position: fixed;
    background: rgb(51, 51, 51);
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.40;
    font-size: 1px;
    overflow: hidden;
    display: none;
}

.tc {
    width: 620px;
    /*height: 925px;*/
    background: #fff;
    position: absolute;
    z-index: 9028;
    left: 550px;
    top: 0px;
    border-radius: 4px;
    display: none;
}

.tc-header {
    width: 620px;
    height: 40px;
    background: #363d4d;
    border-radius: 4px 4px 0 0;
}

.tc-header .bt {
    padding-left: 15px;
    font-size: 15px;
    float: left;
    color: #fff;
    line-height: 40px;
}

.tc img {
    float: right;
    width: 12px;
    height: 12px;
    margin-top: 14px;
    margin-right: 10px;
}

.tc .bxxq,
.tc .fjxq,
.tc .yxxq {
    margin: 0 auto;
    color: #333;
    font-size: 14px;
    width: 600px;
    border-bottom: 1px solid #b2e2fa;
    padding: 25px 0 5px 0;
}

.tc .yymc,
.tc .sbpp,
.tc .yydz,
.tc .csmc {
    float: left;
    margin-left: 30px;
}

.tc .sbmc,
.tc .sccj,
.tc .bxks,
.tc .lxdh,
.tc .bj {
    float: right;
    margin-right: 30px;
}

.tc label {
    font-size: 12px;
    color: #333;
}

#tc input {
    width: 170px;
    border: 1px #e6e6e6 solid;
    border-radius: 4px;
    height: 30px;
    outline: none;
    padding-left: 10px;
    margin-left: 5px;
}

.sbpp,
.sccj,
.yydz,
.bxks,
.lxr,
.lxdh {
    padding-top: 10px;
}

.tc .lxr {
    float: left;
    margin-left: 42px;
}

.gzms,
.xq {
    padding-top: 10px;
}

.gzms label,
.xq label {
    float: left;
    margin-left: 30px;
}

.gzms .textarea,
.xq .textarea {
    float: left;
    margin-left: 9px;
}

textarea {
    width: 450px;
    border: 1px solid #ccc;
    height: 100px;
    border-radius: 4px;
    outline: none;
}

.form-group5 .lxr {
    float: left;
    margin-left: 34px;
}

.form-group5 .lxfs {
    float: right;
    margin-right: 30px;
    margin-top: 10px;
}

.form-group5 .star {
    color: red;
}

.line {
    border-bottom: 1px solid #e6f1fc;
    clear: both;
    padding-top: 110px;
}

.bottom {
    width: 100%;
    height: 50px;
    background: #f8f8f8;
}

.bottom .fs,
.bottom .jd {
    float: right;
    background: #00aaef none repeat scroll 0 0;
    border: 1px solid #00aaef;
    padding: 0 20px;
    display: block;
    height: 32px;
    line-height: 32px;
    margin-right: 12px;
    font-size: 13px;
    color: #fff !important;
    margin-top: 9px;
    border-radius: 4px;
}
</style>
