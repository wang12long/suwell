<template>
    <div class="bmgl">
        <div class="bmgl-main">
            <!--顶部内容部分 SOF-->
            <div class="commonPart-head">
                <a href="javascript:;" class="fl">部门列表</a>
                <div class="right-btn fr" style="top:0">
                    <div class="khgl-right fr">
                        <Button class="pldr">批量导入</Button>
                        <Button class="add" @click="modal1 = true">添加一级部门</Button>
                        <Button class="add" @click="modal2 = true">添加二级部门</Button>
                        <Button class="add" @click="modal = true">消息提醒</Button> 
                        <Modal v-model="modal" title="消息提醒" :mask-closable="false">
                            <div class="xxtx">您正在执行停用操作 , 确定要停用吗</div>
                        </Modal>
                        <Modal v-model="modal1" title="添加一级部门" :mask-closable="false">
                            <div class="bmgl-firstLine">
                                <div class="bmgl-firstLine-left">
                                    <label class="word">
                                        <i class="star">*</i>
                                        部门名称：
                                    </label>
                                    <input type="text">
                                </div>
                                <div class="bmgl-firstLine-right">
                                    <label class="word">部门编号：</label>
                                    <input type="text" placeholder="若不输入则自动生成">
                                </div>
                            </div>
                            <div class="bmgl-secondLine">
                                <div class="bmgl-secondLine-left">
                                    <label class="word">部门负责人：</label>
                                    <input style="position:relative;" type="text">
                                    <a href="javascript:void(0);">
                                        <img style="position:absolute;top:42%;left:230px;" src="../../assets/xiala.png" />
                                    </a>
                                </div>
                                <div class="bmgl-secondLine-right">
                                    <label class="word">座机：</label>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="bmgl-thirdLine">
                                <div class="bmgl-thirdLine-left">
                                    <label class="word">部门地址：</label>
                                    <input type="text" id="bmdz">
                                </div>
                            </div>
                        </Modal>
                        <Modal v-model="modal2" title="添加二级部门" :mask-closable="false">
                            <div class="ejbm-first">
                                <div class="ejbm-first-left">
                                    <label class="word">上级部门编号：</label>
                                    <input type="text">
                                </div>
                                <div class="ejbm-first-right">
                                    <label class="word">上级部门名称：</label>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="ejbm-second">
                                <div class="ejbm-second-left">
                                    <label class="word">
                                        <i class="star">*</i>
                                        部门名称：
                                    </label>
                                    <input type="text">
                                </div>
                                <div class="ejbm-second-right">
                                    <label class="word">部门编号：</label>
                                    <input type="text" placeholder="若不输入则自动生成">
                                </div>
                            </div>
                            <div class="ejbm-third">
                                <div class="ejbm-third-left">
                                    <label class="word">部门负责人：</label>
                                    <input type="text">
                                </div>
                                <div class="ejbm-third-right">
                                    <label class="word">座机：</label>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="ejbm-fouth">
                                <div class="ejbm-fouth-left">
                                    <label class="word">部门地址：</label>
                                    <input type="text">
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
            <!--顶部内容部分 EOF-->
            <!-- 搜索栏 SOF-->
            <div class="commonPart-search">
                <Form :model="search">
                    <div class="search-select fl mr40">
                        <label for class="search-label">部门名称：</label>
                        <input type="text" />
                        <a href="javascript:void(0)" class="icon">
                            <img src="../../assets/xiala.png" />
                        </a>
                    </div>
                    <div class="search-submit fl" style="margin-left:30px;">
                        <a @click="tableDta" class="filter">筛选</a>
                    </div>
                </Form>
            </div>
            <!-- 搜索栏 EOF-->
            <div style="clear:both;"></div>
            <div class="bmgl-table">
                <Table size="default" :columns="tableColumns" :data="data1"></Table>
                <BcPage ref="aaa" @on-change="changePage" :total="602" show-elevator style="float:right; margin: 15px 30px 0 0;"></BcPage>
            </div>
        </div>
    </div>
</template>
<script>
import http from '../../assets/js/http'     //引入通讯组件机制
import BcPage from '../common/page.vue'   //引入分页组件
export default {
    data() {
        return {
            modal1: false,
            modal2: false,
            modal: false,
            tableData: [],
            tableColumns: [
                {
                    "title": "部门名称",
                    "key": "name",
                },
                {
                    "title": "部门编号",
                    "key": "age",
                    "sortable": true,
                },
                {
                    "title": "座机",
                    "key": "address",
                },
                {
                    "title": "负责人",
                    "key": "age",
                },
                {
                    "title": "部门地址",
                    "key": "address",
                },
                {
                    "title": "状态",
                    "key": "name",
                },
                {
                    "title": "操作",
                    "key": "cz",
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '10px'
                                },
                                on: {
                                    click: () => {
                                        // this.show(params.index)
                                        this.modal1 = true;
                                    }
                                }
                            }, '编辑'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '10px'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '停用'),
                            h('Button', {
                                props: {
                                    type: 'error',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.remove(params.index)
                                    }
                                }
                            }, '添加子部门')
                        ]);
                    }
                }
            ],
            data1: [
                {
                    name: '王小明',
                    age: 18,
                    address: '北京市朝阳区芍药居'
                },
                {
                    name: '张小刚',
                    age: 25,
                    address: '北京市海淀区西二旗'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
                {
                    name: '周小伟',
                    age: 26,
                    address: '深圳市南山区深南大道'
                },
                {
                    name: '李小红',
                    age: 30,
                    address: '上海市浦东新区世纪大道'
                },
            ]
        }
    },
    methods: {
        function() {
            var mod = document.getElementsByClassName("ivu-modal")[0];
            mod.style.width = 660 + "px";
        }
    },
    components: {
        'BcPage': BcPage,    // 引入分页组件，注册分页组件
    },
    mixins: [http]
}
</script>
<style scoped>
.bmgl-main {
    padding: 0 5px;
}

.bmgl-sxCurrent {
    width: 80px;
    height: 30px;
    background: pink;
    color: #fff;
    margin-top: -8px;
    border-radius: 4px;
}

.xxtx {
    font-size: 16px;
    color: #333333;
    padding: 35px 0 40px 35px;
}

.bmgl-firstLine-left {
    float: left;
    margin-left: 5.5px;
}

.bmgl-firstLine-right {
    float: right;
}

.bmgl-secondLine,
.bmgl-thirdLine {
    clear: both;
}

.bmgl-secondLine-left {
    float: left;
}

.bmgl-secondLine-right {
    float: right;
}

.bmgl-secondLine,
.bmgl-thirdLine {
    padding: 15px 0;
}

.bmgl-firstLine input,
.bmgl-secondLine input,
.bmgl-thirdLine input {
    width: 160px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    padding-left: 10px;
}

#bmdz {
    width: 411px;
}

.bmgl-thirdLine-left {
    margin-left: 3px;
}

.bmgl-firstLine-left,
.bmgl-secondLine-left {
    float: left;
}

.bmgl-firstLine-right,
.bmgl-secondLine-right,
.bmgl-thirdLine-right {
    float: right;
}

.bmgl-secondLine,
.bmgl-thirdLine,
.bmgl-fouthLine {
    clear: both;
    padding: 15px 0;
}

.word {
    color: #333333;
    font-size: 12px;
}

.bmgl-fouthLine input {
    width: 411px;
    height: 30px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 4px;
    padding-left: 10px
}

#bmgl-firstLine-input::-webkit-input-placeholder {
    color: #808080;
    font-size: 12px;
}

#bmgl-firstLine-input::-moz-placeholder {
    color: #808080;
    font-size: 12px;
}

#bmgl-firstLine-input:-ms-input-placeholder {
    color: #808080;
    font-size: 12px;
}

#bmbh-input::-webkit-input-placeholder {
    color: #ccc;
    font-size: 12px;
}

#bmbh-input::-moz-placeholder {
    color: #ccc;
    font-size: 12px;
}

#bmbh-input:-ms-input-placeholder {
    color: #ccc;
    font-size: 12px;
}

.bmgl-secondLine-left .word {
    margin-left: 2px;
}

.bmgl-thirdLine-left .word {
    margin-left: 11px;
}

.bmgl-fouthLine-left .word {
    margin-left: 23px;
}



.bmgl-middle #word {
    font-size: 12px;
    color: #333;
}

.star {
    color: red;
}

.ivu-modal-header {
    background: pink !important;
}

.ejbm-first-left,
.ejbm-second-left,
.ejbm-third-left {
    float: left;
}

.ejbm-first-right,
.ejbm-second-right,
.ejbm-third-right {
    float: right;
}

.ejbm-first-left input,
.ejbm-first-right input {
    width: 143px;
    height: 30px;
    background: #ebebeb;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 4px;
    padding-left: 10px;
}

.ejbm-second-left input,
.ejbm-second-right input,
.ejbm-third-left input,
.ejbm-third-right input {
    width: 143px;
    height: 30px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 4px;
    padding-left: 10px;
}

.ejbm-second-left {
    margin-top: 15px;
    margin-left: 16px;
}

.ejbm-second-right {
    margin-top: 15px;
}

.ejbm-third-left {
    margin: 15px 0 0 12px;
}

.ejbm-third-right {
    margin-top: 15px;
}

.ejbm-second,
.ejbm-third,
.ejbm-fouth {
    clear: both;
}

.ejbm-fouth-left {
    padding-top: 15px;
    margin-left: 24px;
}

.ejbm-fouth-left input {
    width: 401px;
    height: 30px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 4px;
    padding-left: 10px;
}
</style>

