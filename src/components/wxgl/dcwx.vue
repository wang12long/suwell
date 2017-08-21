
<template>
    <div class="wxgl" style="z-index:100;">
        <div class="wxgl-main">
            <!--顶部内容部分 SOF-->
            <div class="wxgl-header">
                <div class="fl">
                    <a href="#" style="font-size:16px">单次维修</a>
                </div>
                <div class="wxgl-right">
                    <Button class="pldr" v-on:click="xinzeng">新增</Button>
                    <div id="tankuang" class="tankuang" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden; font-size:12px">
                        <div class="tankuang-header">
                            <div class="tankuang-title">单次维修流程</div>
                            <div class="tankuang-tool" v-on:click="gb">
                                <a href="javascript:void(0);" class="tankuang-tool-close"></a>
                            </div>
                        </div>
                        <div class="jdxx">
                            <div class="jdxx-title">接单信息</div>
                            <div class="diyipai" style="overflow:hidden;">
                                <div class="diyipai-left">
                                    <label style="color:#333;font-size:12px;">客户名称：</label>
                                    <input type="text"></input>
                                    <a href="javascript:void(0);">
                                        <img src="../../assets/xiala.png" />
                                    </a>
                                    <a style="font-size:20px;color:#00aaef;text-decoration:none;margin-left:8px;" href="javascript:void(0);">+</a>
                                </div>
                                <div class="diyipai-right">
                                    <label>报修科室：</label>
                                    <input type="text"></input>
                                </div>
                            </div>
                            <div class="dierpai">
                                <div class="dierpai-left">
                                    <label>联系人：</label>
                                    <input type="text" />
                                </div>
                                <div class="dierpai-right">
                                    <label>联系电话：</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div class="disanpai">
                                <div class="disanpai-left">
                                    <label>设备名称：</label>
                                    <input type="text" />
                                </div>
                                <div class="disanpai-right">
                                    <label>设备型号：</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div class="disipai">
                                <div class="disipai-left">
                                    <label>设备品牌：</label>
                                    <input type="text" />
                                </div>
                                <div class="disipai-right">
                                    <label>客户区域：</label>
                                    <input style="position:relative;" type="text" />
                                    <a href="javascript:void(0);">
                                        <img src="../../assets/xiala.png" />
                                    </a>
                                </div>
                            </div>
                            <div class="diwupai">
                                <div class="diwupai-left">
                                    <label>故障现象：</label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div class="pgxx">
                            <div class="pgxx-title">派工信息</div>
                            <div class="diyipai">
                                <div class="diyipai-left">
                                    <label>指派工程师：</label>
                                    <input style="position:relative;" type="text" />
                                    <a href="javascript:void(0);">
                                        <img src="../../assets/xiala.png" />
                                    </a>
                                </div>
                                <div class="diyipai-right">
                                    <label>指派人：</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div class="dierpai" style="clear:both;">
                                <div style="float:left;margin-top:-10px;margin-left:32px;">
                                    <label>派工时间：</label>
                                    <input type="date" />
                                </div>
                            </div>
                        </div>
                        <div class="jxxx">
                            <div class="jxxx-title">检修信息</div>
                            <div class="diyipai">
                                <div class="diyipai-left">
                                    <label>故障类型：</label>
                                    <input style="position:relative;" type="text" />
                                    <a href="javascript:void(0);">
                                        <img src="../../assets/xiala.png" />
                                    </a>
                                </div>
                                <div class="diyipai-right">
                                    <label>预计费用：</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div class="dierpai" style="clear:both;">
                                <div style="float:left;margin-top:-10px;margin-left:32px;">
                                    <label>预计工时：</label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                        <div style="clear:both;border-bottom:1px solid #e6e6e6;padding:20px;"></div>
                        <div style="width:100%;height:50px;">
                        </div>
                    </div>
                </div>
            </div>
            <!--顶部内容部分 EOF-->
            <!-- 搜索栏 SOF-->
            <div class="commonPart-search">
                <Form :model="search">
                    <div class="search-select fl mr40">
                        <label for class="search-label">客户名称：</label>
                        <input type="text" placeholder="名称/编号/拼音简码" />
                        <a href="javascript:void(0)" class="icon" @click="table">
                            <img src="../../assets/xiala.png" />
                        </a>
                        <div id="biaoge" style="z-index:1001;position:absolute;left:116px;display:none;">
                            <Table highlight-row height="375" border :columns="columns3" :data="tableData"></Table>
                        </div>
                    </div>
                    <div class="search-select fl mr40">
                        <label for class="search-label">客户区域：</label>
                        <input type="text" />
                        <a href="javascript:void(0)" class="icon">
                            <img src="../../assets/xiala.png" />
                        </a>
                    </div>
                    <div class="search-select fl mr40">
                        <label for class="search-label">联系方式：</label>
                        <Select style="width:160px">
                            <Option v-for="item in kehuleixing" :value="item.value" :key="item">{{ item.label }}</Option>
                        </Select>
                    </div>
                    <div class="search-select fl mr40">
                        <label for style="float:left" class="search-label">接单时间：</label>
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
            <!-- 主体表格 SOF-->
            <div class="wxgl-table">
                <Table size="large" :columns="columns1" :data="data1"></Table>
            </div>
            <Page :total="100" page-size-opts show-elevator style="float:right; margin: 15px 30px 0 0;"></Page>
            <!-- 主体表格 SOF-->
        </div>
        <div class="wxgl-slide" id="slide">
            <div>
                <div class="wxdcx">维修单详情</div>
                <a href="javascript:void(0)" v-on:click="close">
                    <img src="../../assets/close.png" />
                </a>
            </div>
            <div style="clear:both;">
                <div class="biaoti-xx">接单信息</div>
                <div class="wxgl-first">
                    <div class="diyipai">
                        <div class="khmc">
                            <label>客户名称</label>
                            <span>速维医院</span>
                        </div>
                        <div class="bxks">
                            <label>报修科室</label>
                            <span>心血管内科</span>
                        </div>
                    </div>
                    <div class="dierpai">
                        <div class="lxr">
                            <label>联系人</label>
                            <span>速维医院</span>
                        </div>
                        <div class="lxdh">
                            <label>联系电话</label>
                            <span>心血管内科</span>
                        </div>
                    </div>
                    <div class="disanpai">
                        <div class="sbmc">
                            <label>设备名称</label>
                            <span>速维医院</span>
                        </div>
                        <div class="sbxh">
                            <label>设备型号</label>
                            <span>心血管内科</span>
                        </div>
                    </div>
                    <div class="disipai">
                        <div class="sbpp">
                            <label>设备品牌</label>
                            <span>速维医院</span>
                        </div>
                        <div class="khqy">
                            <label>客户区域</label>
                            <span>心血管内科</span>
                        </div>
                    </div>
                    <div class="diwupai">
                        <div class="gzxx">
                            <label>故障现象</label>
                            <span>速维医院</span>
                        </div>
                    </div>
                </div>
                <div style="clear:both;">
                    <div class="biaoti-xx">派工信息</div>
                    <div class="wxgl-second">
                        <div class="diyipai">
                            <div class="gcs">
                                <label>指派工程师</label>
                                <span>速维医院</span>
                            </div>
                            <div class="pgr" style="margin-left:12px;">
                                <label>派工人</label>
                                <span>心血管内科</span>
                            </div>
                        </div>
                        <div class="dierpai">
                            <div class="fgsj">
                                <label>返工时间</label>
                                <span>速维医院</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="clear:both;">
                    <div class="biaoti-xx">检修信息</div>
                    <div class="wxgl-third">
                        <div class="diyipai">
                            <div class="gzlx">
                                <label>故障类型</label>
                                <span>速维医院</span>
                            </div>
                            <div class="yjfy">
                                <label>预计费用</label>
                                <span>心血管内科</span>
                            </div>
                        </div>
                        <div class="dierpai">
                            <div class="yjgs">
                                <label>预计工时</label>
                                <span>速维医院</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="clear:both;">
                    <div class="biaoti-xx">保价信息</div>
                    <div class="wxgl-fouth">
                        <div class="diyipai">
                            <div class="bj">
                                <label>报价</label>
                                <span>速维医院</span>
                            </div>
                            <div class="bjr">
                                <label>报价人</label>
                                <span>心血管内科</span>
                            </div>
                        </div>
                        <div class="dierpai" style="clear:both;">
                            <div class="bjrq">
                                <label>报价日期</label>
                                <span>速维医院</span>
                            </div>
                            <div class="zzjg">
                                <label>最终价格</label>
                                <span>速维医院</span>
                            </div>
                        </div>
                        <div class="disanpai" style="clear:both;">
                            <div class="cjrq">
                                <label>成交日期</label>
                                <span>速维医院</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="clear:both;">
                    <div class="biaoti-xx">维修结果</div>
                    <div class="wxgl-five">
                        <div class="diyipai">
                            <div class="wxjg">
                                <label>维修结果</label>
                                <span>速维医院</span>
                            </div>
                            <div class="wgsj">
                                <label>完工时间</label>
                                <span>心血管内科</span>
                            </div>
                        </div>
                        <div class="dierpai" style="clear:both;">
                            <div class="wxr">
                                <label>维修人</label>
                                <span>速维医院</span>
                            </div>
                            <div class="wxcb">
                                <label>维修成本</label>
                                <span>速维医院</span>
                            </div>
                        </div>
                        <div class="disanpai" style="clear:both;">
                            <div class="wxgs">
                                <label>维修工时</label>
                                <span>速维医院</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="clear:both;">
                    <div class="biaoti-xx">验收情况</div>
                    <div class="wxgl-six">
                        <div class="diyipai">
                            <div class="yssj">
                                <label>验收时间</label>
                                <span>速维医院</span>
                            </div>
                            <div class="ysr">
                                <label>验收人</label>
                                <span>心血管内科</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="clear:both;padding-bottom:80px;">
                    <div class="biaoti-xx">结算信息</div>
                    <div class="wxgl-seven">
                        <div class="diyipai">
                            <div class="kprq">
                                <label>开票日期</label>
                                <span>速维医院</span>
                            </div>
                            <div class="sprq">
                                <label>送票日期</label>
                                <span>心血管内科</span>
                            </div>
                        </div>
                        <div class="dierpai" style="clear:both;">
                            <div class="fph">
                                <label>发票号</label>
                                <span>速维医院</span>
                            </div>
                            <div class="zkrq">
                                <label>转款日期</label>
                                <span>速维医院</span>
                            </div>
                        </div>
                        <div class="disanpai" style="clear:both;">
                            <div class="skrq">
                                <label>收款日期</label>
                                <span>速维医院</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="window-mask" id="mengban" style="display:none;"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
                    title: '客户区域',
                    key: 'name',
                },
                {
                    title: '客户名称',
                    key: 'age'
                },
                {
                    title: '设备名称',
                    key: 'address'
                },
                {
                    title: '联系人',
                    key: 'address'
                },
                {
                    title: '报修人电话',
                    key: 'address'
                },
                {
                    title: '接单时间',
                    key: 'address'
                },
                {
                    title: '当前状态',
                    key: 'address'
                },
                {
                    title: '操作',
                    key: 'address',
                    render(row, column, index) {            //render 函数传入三个参数 row、column 和 index，分别指当前单元格数据，当前列数据，当前是第几行。
                        return `<a type="primary"  @click="sideBaerAppear" style="color:#3399cc;">处理</a>`;
                    }
                },
            ],
            data1: [
                {
                    name: '00001',
                    age: 18,
                    address: 'sldgj'
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
        close: function () {
            var guanbi = document.getElementById("slide");
            guanbi.style.display = "none";
        },
        xinzeng: function () {
            var menb = document.getElementById("mengban");
            var tanc = document.getElementById("tankuang");
            menb.style.display = "block";
            tanc.style.display = "block";
        },
        gb: function () {
            var tc = document.getElementById("tankuang");
            var menb = document.getElementById("mengban");
            tc.style.display = "none";
            menb.style.display = "none";
        }
    },
    created: {

    }
}
</script>

<style scoped>
body {
    overflow: scroll;
    overflow-x: hidden;
}

.wxgl-header {
    height: 60px;
    line-height: 60px;
    width: 100%;
    box-shadow: 0 -2px 0 0 #00aaef inset;
    text-decoration: none;
    outline: none;
    font-size: 16px;
    padding-left: 20px;
    padding-right: 25px;
}

.wxgl-right {
    float: right;
    margin-right: 1%;
    line-height: 60px;
}

.pldr {
    background: #21a67a;
    outline: none;
}

.wxgl .wxgl-slide {
    width: 540px;
    height: 100%;
    background: #fff;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1001;
    -webkit-box-shadow: 0 0 20px #ccc;
    -moz-box-shadow: 0 0 20px #ccc;
    box-shadow: 0 0 20px #ccc;
    overflow-y: auto;
}

.wxgl .wxgl-slide .wxdcx {
    float: left;
    font-size: 16px;
    margin-top: 20px;
    color: #333;
    margin-left: 45%;
}

.wxgl .wxgl-slide img {
    float: right;
    margin: 10px 15px 0 0;
}

.wxgl .wxgl-slide .wxgl-first .khmc,
.bxks {
    float: left;
}

.wxgl .wxgl-slide .wxgl-first .khmc {
    width: 320px;
    padding: 30px 0px 0px 52px;
}

.wxgl .wxgl-slide .wxgl-first .bxks {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-first .lxr,
.lxdh {
    float: left;
}

.wxgl .wxgl-slide .wxgl-first .lxr {
    width: 320px;
    padding: 30px 0px 0px 64px;
}

.wxgl .wxgl-slide .wxgl-first .lxdh {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-first .sbmc,
.sbxh {
    float: left;
}

.wxgl .wxgl-slide .wxgl-first .sbmc {
    width: 320px;
    padding: 30px 0px 0px 52px;
}

.wxgl .wxgl-slide .wxgl-first .sbxh {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-first .sbpp,
.khqy {
    float: left;
}

.wxgl .wxgl-slide .wxgl-first .sbpp {
    width: 320px;
    padding: 30px 0px 0px 52px;
}

.wxgl .wxgl-slide .wxgl-first .khqy {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-first .gzxx {
    float: left;
    width: 320px;
    padding: 30px 0px 0px 52px;
}

.wxgl .wxgl-slide .wxgl-first span,
.wxgl .wxgl-slide .wxgl-second span,
.wxgl .wxgl-slide .wxgl-third span,
.wxgl .wxgl-slide .wxgl-fouth span,
.wxgl .wxgl-slide .wxgl-five span,
.wxgl .wxgl-slide .wxgl-six span,
.wxgl .wxgl-slide .wxgl-seven span {
    margin-left: 20px;
    font-size: 12px;
    color: #999;
}

.wxgl .wxgl-slide .wxgl-first label,
.wxgl .wxgl-slide .wxgl-second label,
.wxgl .wxgl-slide .wxgl-third label,
.wxgl .wxgl-slide .wxgl-fouth label,
.wxgl .wxgl-slide .wxgl-five label,
.wxgl .wxgl-slide .wxgl-six label,
.wxgl .wxgl-slide .wxgl-seven label {
    font-size: 12px;
    color: #333;
}

.wxgl .wxgl-slide p {
    padding: 40px 0 10px 20px;
    font-size: 12px;
    color: #333;
}

.wxgl .wxgl-slide .wxgl-first .dierpai,
.disanpai,
.disipai,
.diwupai {
    clear: both;
}

.wxgl .wxgl-slide .wxgl-second .gcs,
.pgr {
    float: left;
}

.wxgl .wxgl-slide .wxgl-second .gcs {
    width: 332px;
    padding: 30px 0 0 40px;
}

.wxgl .wxgl-slide .wxgl-second .pgr {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-second .dierpai,
.wxgl-third .dierpai {
    clear: both;
}

.wxgl .wxgl-slide .wxgl-second .fgsj {
    width: 320px;
    padding: 30px 0 0 52px;
}

.wxgl .wxgl-slide .wxgl-third .gzlx,
.yjfy {
    float: left;
}

.wxgl .wxgl-slide .wxgl-third .gzlx {
    width: 320px;
    padding: 30px 0 0 50px;
}

.wxgl .wxgl-slide .wxgl-third .yjfy {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-third .yjgs {
    width: 320px;
    padding: 30px 0 0 50px;
}

.wxgl .wxgl-slide .wxgl-fouth .bj,
.bjr {
    float: left;
}

.wxgl .wxgl-slide .wxgl-fouth .bj {
    width: 332px;
    padding: 30px 0 0 74px;
}

.wxgl .wxgl-slide .wxgl-fouth .bjr {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-fouth .bjrq,
.zzjg {
    float: left;
}

.wxgl .wxgl-slide .wxgl-fouth .bjrq {
    width: 320px;
    padding: 30px 0 0 50px;
}

.wxgl .wxgl-slide .wxgl-fouth .zzjg {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-fouth .cjrq {
    padding: 30px 0 0 50px;
}

.wxgl .wxgl-slide .wxgl-five .wxjg,
.wgsj {
    float: left;
}

.wxgl .wxgl-slide .wxgl-five .wxjg {
    width: 320px;
    padding: 30px 0 0 50px;
}

.wxgl .wxgl-slide .wxgl-five .wgsj {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-five .wxr,
.wxcb {
    float: left;
}

.wxgl .wxgl-slide .wxgl-five .wxr {
    width: 320px;
    padding: 30px 0 0 62px;
}

.wxgl .wxgl-slide .wxgl-five .wxcb {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-five .wxgs {
    padding: 30px 0 0 50px;
}

.wxgl .wxgl-slide .wxgl-six .yssj,
.ysr {
    float: left;
}

.wxgl .wxgl-slide .wxgl-six .yssj {
    width: 332px;
    padding: 30px 0 0 50px;
}

.wxgl .wxgl-slide .wxgl-six .ysr {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-seven .kprq,
.sprq {
    float: left;
}

.wxgl .wxgl-slide .wxgl-seven .kprq {
    width: 320px;
    padding: 30px 0 0 50px;
}

.wxgl .wxgl-slide .wxgl-seven .sprq {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-seven .fph,
.zkrq {
    float: left;
}

.wxgl .wxgl-slide .wxgl-seven .fph {
    width: 320px;
    padding: 30px 0 0 62px;
}

.wxgl .wxgl-slide .wxgl-seven .zkrq {
    padding: 30px 0 0 0;
}

.wxgl .wxgl-slide .wxgl-seven .skrq {
    padding: 30px 0 0 50px;
}


/*弹窗样式部分*/

.window-mask {
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

.wxgl .wxgl-right .tankuang {
    z-index: 9028;
    position: absolute;
    width: 620px;
    height: 750px;
    background: #f5f8fa;
    left: 550px;
    top: 80px;
    overflow-y: auto;
    border: 0;
    padding: 0;
    display: none;
}

.tankuang-header {
    width: 620px;
    padding: 0;
    border-style: hidden;
    position: relative;
}

.tankuang-title {
    background: #F5F8FC;
    color: #333;
    border-bottom: 1px #e6e6e6 solid;
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
}

.tankuang-tool {
    margin-top: -25px;
    margin-left: 5px;
    margin-right: 10px;
    right: 1px;
    top: 50%;
    position: absolute;
    height: 16px;
}

.tankuang-tool a {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin: 0 0 0 2px;
}

.tankuang-tool-close {
    background: url(../../assets/close.png) no-repeat;
}

.tankuang .jdxx {
    width: 580px;
    height: 310px;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    margin: 0 auto;
    margin-top: 10px;
    margin-left: 20px;
}

.tankuang .jdxx .jdxx-title {
    background: #fff;
    color: #333;
    border-bottom: 1px #e6e6e6 solid;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
}

.tankuang label {
    color: 12px;
    font-size: #333;
}

.tankuang input {
    width: 160px;
    height: 30px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    outline: none;
    padding-left: 10px;
}

.tankuang .jdxx .diyipai-left {
    float: left;
    padding: 5px 0 0 32px;
    width: 300px;
}

.jdxx .diyipai-right {
    float: right;
    margin-right: 20px;
    padding: 5px 0 0 0;
}

.tankuang .jdxx img {
    margin-left: -22px;
}

.dierpai {
    margin-top: -10px;
}

.dierpai .dierpai-left {
    float: left;
    margin-left: 44px;
}

.dierpai .dierpai-right,
.disanpai .disanpai-right {
    float: right;
    margin-right: 20px;
}

.disanpai .disanpai-left {
    float: left;
    margin-left: 32px;
    margin-top: -10px;
}

.disanpai .disanpai-right {
    margin-top: -10px;
}

.disipai .disipai-right {
    float: right;
    margin-right: 20px;
    margin-top: -10px;
}

.disipai .disipai-left,
.diwupai .diwupai-left {
    float: left;
    margin-left: 32px;
    margin-top: -10px;
}

.disipai img {
    top: 37%;
    right: 50px;
    position: absolute;
}

.diwupai input {
    width: 465px;
    height: 30px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    outline: none;
    padding-left: 10px;
}

.pgxx,
.jxxx,
.bjxx {
    width: 580px;
    height: 150px;
    background: #fff;
    border: 1px solid #e6e6e6;
    clear: both;
    margin: 10px 0 0 20px;
    border-radius: 4px;
}

.pgxx-title,
.jxxx-title,
.bjxx-title {
    background: #fff;
    color: #333;
    border-bottom: 1px #e6e6e6 solid;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
}

.pgxx .diyipai-left {
    float: left;
    margin-left: 20px;
}

.pgxx .diyipai-right {
    float: right;
    margin-right: 20px;
}

.pgxx .diyipai-left img {
    position: absolute;
    top: 59%;
    left: 255px;
}

.jxxx .diyipai-left {
    float: left;
    margin-left: 32px;
}

.jxxx .diyipai-right {
    float: right;
    margin-right: 20px;
}

.jxxx .diyipai-left img {
    position: absolute;
    top: 80.3%;
    left: 255px;
}

.biaoti-xx {
    width: 500px;
    margin: 0 auto;
    color: #333;
    font-size: 14px;
    border-bottom: 1px solid #ccc;
    line-height: 30px;
    padding-top: 40px;
}

.search-submit {
    width: 70px;
    height: 30px;
    margin-left: 50px;
    text-align: right;
    padding-right: 10px;
    line-height: 30px;
    background: url(./images/filter_12_blue.png) no-repeat scroll 13px center;
}

.search-submit:hover {
    border-radius: 5px;
    background-color: #000;
}
</style>