<template>
    <div class="pjzd" style="height:100%;">
        <div class="pjzd-main" style="height:100%;">
            <div class="commonPart-head">
                <a href="javascript:;" class="fl">配件字典</a>
                <div class="pjzd-right fr">
                    <Button class="pldr" @click="modal1 = true">批量导入</Button>
                    <Button class="pldr" @click="">导出 Excle</Button>
                </div>
            </div>
            <div class="pjkccx-body" style="height:calc(100% - 60px);">
                <div class="pjkccx-body-left fl">
                    <div class="pjkccx-body-left-head">
                        配件类别
                        <a href="javascript:;" @click="addlxOpen" class="addLx fr">＋新增类型</a>
                    </div>
                    <div class="pjkccx-body-left-body">
                        <form method="post" action="" v-show="addLX">
                            <!--新增类型-->
                            <input type="text" v-model="newpj" />
                            <a href="javascript:;" style="margin-right:8px;" @click="saveNew">保存</a>
                            <a href="javascript:;" @click="addlxClose">取消</a>
                        </form>
                        <ul>
                            <li v-for="(pj,index) in pjlist">
                                <a v-if="pj.status" href="javascript:;">{{pj.name}}</a>
                                <input v-else type="text" v-model="editedpj.name"/>
                                <Poptip v-if="pj.status" confirm title="您确认删除这条内容吗？" @on-ok="deletepj(pj,index)" @on-cancel="cancel" placement="top-end" class="fr">
                                    <span>删除</span>
                                </Poptip>
                                <span v-if="pj.status" class="fr" @click="editpj(pj)">编辑</span>
                                <template v-else>
                                    <span class="fr" @click="saveEditpj(pj)">保存</span>
                                    <span class="fr" @click="pj.status=true">取消</span>                                  
                                </template>
                                
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="pjkccx-body-right fl">
                    <!--主体内容右边部分 SOF-->
                    <div class="commonPart-search">
                        <Form :model="search">
                            <div class="search-select fl mr40">
                                <label for class="search-label">配件名称：</label>
                                <Select style="width:160px">
                                    <Option value="巴豆" </Option>
                                </Select>
                            </div>
                            <div class="search-select fl mr40">
                                <label for class="search-label">生产厂家：</label>
                                <Select style="width:160px">
                                    <Option value="巴豆" </Option>
                                </Select>
                            </div>
                            <div class="search-submit fl" style="margin-left:30px;">
                                <a @click="getGzry" class="filter">筛选</a>
                            </div>
                        </Form>
                        <a href="javascript:;" @click="modal1 = true" class="addPj fr">＋新增配件</a>
                        <Modal class="title" v-model="modal1" title="新增配件" :mask-closable="false">
                            <div class="form">
                                <div class="khgl-second">
                                    <label>
                                        &nbsp;&nbsp;&nbsp;&nbsp;配件编号：
                                    </label>
                                    <input type="text" />
                                    <label style="margin-left:30px;">
                                        <i>*</i>配件名称：
                                    </label>
                                    <input class="khlx" type="text" />
                                </div>
                                <div class="khgl-third">
                                    <label class="fzr">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;配件型号：
                                    </label>
                                    <input type="text" />
                                    <label style="margin-left:30px;">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;单位：
                                    </label>
                                    <input type="text" />
                                </div>
                                <div class="khgl-fouth" style="clear:both;padding:20px 0 0 20px;">
                                    <label class="dzyj fl">
                                        &nbsp;&nbsp;&nbsp;&nbsp;生产厂家：
                                    </label>
                                    &nbsp;
                                    <input class="input fl" type="text" />
                                    <label class="dzyj fl">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;供应商：
                                    </label>
                                    <input class="input fl" type="text" />
                                </div>
                                <div class="khgl-fouth" style="clear:both;padding:20px 0 0 20px;">
                                    <label class="dzyj fl">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;进价：
                                    </label>
                                    &nbsp;
                                    <input class="input fl" type="text" />
                                    <label class="dzyj fl">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;零售价：
                                    </label>
                                    <input class="input fl" type="text" />
                                </div>
                                <div style="clear:both;"></div>
                                <div style="margin-top:20px;">
                                    <label class="zhuangtai">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;状态：
                                    </label>
                                    <input type="radio" id="qiyong" checked="checked" name="zhuangtai" value="qiyong">
                                    <label name="zhuangtai" class="checked" for="qiyong">启用</label>
                                    <input type="radio" id="jinyong" name="zhuangtai" value="jinyong">
                                    <label name="zhuangtai" for="jinyong">禁用</label>
                                </div>
                            </div>
                        </Modal>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="commonPart-body">
                        <Table size="default" border :columns="tableColumns" :data="tableData"></Table>
                        <Page :total="100" page-size-opts show-elevator style="float:right; margin: 15px 30px 0 0;"></Page>
                    </div>
                    <!-- 主体内容右边部分 EOF-->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import http from '../../assets/js/http';
export default {
    data() {
        return {
            modal1: false,
            addLX: false,
            deletLi: true,
            newpj: '',
            editedpj: '',
            pjlist: [],
            tableData: [],
            tableColumns: [
                {
                    "title": "配件编号",
                    "key": "pjbh",
                },
                {
                    "title": "配件名称",
                    "key": "pjmc",
                },
                {
                    "title": "配件型号",
                    "key": "pjxh",
                },
                {
                    "title": "生产厂家",
                    "key": "sccj",
                },
                {
                    "title": "供应商",
                    "key": "gys",
                },
                {
                    "title": "单位",
                    "key": "dw",
                },
                {
                    "title": "进价",
                    "key": "jj",
                },
                {
                    "title": "零售价",
                    "key": "xsj",
                },
                {
                    "title": "状态",
                    "key": "zt",
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
                                    marginRight: '5px'
                                },
                                on: {
                                    click: () => {
                                        // this.show(params.index)
                                        this.modal1 = true;
                                    }
                                }
                            }, '修改'),
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
                            }, '停用')
                        ]);
                    }
                }
            ],
        }
    },
    methods: {
        deletepj(pj, index) {
            this.apiPost('./mock/pjgl/pjzd.json', pj.id).then((el) => {
                this.pjlist.splice(index, 1);
            });
        },
        editpj(pj){
            this.editedpj=pj;
            pj.status=false;
        },
        addlxOpen() {
            this.addLX = true;
        },
        addlxClose() {
            this.addLX = false;
        },
        // 左侧保存功能点的定义；
        saveNew() {
            this.apiPost('./mock/pjgl/pjzd.json', this.newpj).then((el) => {
                var addpj={
                    id:el.pjid,
                    name:this.newpj,
                    status:true
                }
                this.pjlist.push(addpj);
            });
            // pjlist  [{ivu-alert-desc}]
            // var pjlist=[
            //     {
            //         id:1,
            //         pjmc:'ceshi',
            //         status:false
            //     }
            // ]
    },
    delet() { },  // 左侧删除功能点的定义；
    takeTableData() {
        this.apiGet('./mock/pjgl/pjzd.json').then((el) => {
            for (let i = 0, l = el.length; i < l; i++) {
                console.log(el)
                this.tableData.push({
                    pjbh: el[i].gzry_key,
                    pjmc: el[i].bm_key,
                    pjxh: el[i].gzry_xgr,
                    sccj: el[i].gzgw_last,
                    gys: el[i].gzry_shzt,
                    dw: el[i].gzgw_mc,
                    jj: el[i].gzgw_last,
                    xsj: el[i].gzgw_last,
                    zt: el[i].gzry_status,
                })
            }
        })
    },
    show(index) {

    },
    remove(index) {
        this.tableData.splice(index, 1);
    }
},
created() {
    this.takeTableData();    // 在实例创建之后同步调用-----> 表格数据渲染，（Function）
},
mixins: [http]
}
</script>
<style scoped lang="less">
.pjkccx-body {
    .pjkccx-body-left {
        width: 15%;
        height: 100%;
        border-right: 1px solid #ccc;
        .pjkccx-body-left-head {
            line-height: 50px;
            padding-left: 20px;
            border-bottom: 1px solid #ccc;
            font-weight: 900;
            .addLx {
                padding-right: 30px;
                color: skyblue
            }
        }
        .pjkccx-body-left-body form {
            input {
                height: 30px;
                border-radius: 5px;
                padding-left: 5px;
                margin: 12px 15px 10px 10px;
                outline: none;
                border: 1px soild #ccc;
            }
            a {
                color: blue;
                font-size: 13px;
            }
        }
        .pjkccx-body-left-body li {
            line-height: 40px;
            a {
                display: inline;
                padding-left: 20px;
            }
            span {
                margin: 0 5px 0 5px;
                cursor: pointer;
                color: #2ea8e5;
            }
        }
    }
    .pjkccx-body-right {
        width: 85%;
        padding-left: 1%;
        .commonPart-search {
            .addPj {
                padding-right: 30px;
                color: rgb(51, 153, 255);
                font-size: 14px;
            }
        }
    }
}

.pjkccx-body-left-body li:hover {
    background-color: #f0f0f0;
    ;
}

.pldr {
    background: #21a67a;
    outline: none;
}

.form .khgl-second {
    padding: 20px 0 0 20px;
}

.form .khgl-second input,
.form .khgl-third input {
    width: 140px;
    height: 30px;
    border: 1px solid #E6E6E6;
    border-radius: 4px;
    outline: none;
    padding-left: 10px;
}

.form .khgl-third {
    clear: both;
    padding: 20px 0 0 8px;
}

.khgl-fouth i {
    color: red;
    margin-right: 5px;
}

.khgl-fouth .input {
    width: 140px;
    height: 30px;
    border: 1px solid #E6E6E6;
    border-radius: 4px;
    outline: none;
    padding-left: 10px;
}

.khgl-fouth .dzyj {
    font-size: 12px;
    color: #333;
}

.khgl-fouth .zhuangtai {
    margin-left: 54px;
    font-size: 12px;
    color: #333;
}

.khgl-fouth #jinyong {
    margin-left: 20px;
}

.form .khgl-six input {
    width: 385px;
    height: 30px;
    border: 1px solid #E6E6E6;
    border-radius: 4px;
    outline: none;
    padding-left: 10px;
}
























































/*弹窗样式end*/
</style>

