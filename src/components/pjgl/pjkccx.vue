<template>
    <div class="commonPart" v-if="rylb">
        <!--顶部内容部分 SOF-->
        <div class="commonPart-head">
            <a href="javascript:;" class="fl">配件库存查询</a>
        </div>
        <!--顶部内容部分 EOF-->
        <!--主体内容区域SOF-->
        <!--主体内容右边部分 SOF-->
        <div class="pjkccx-body">
            <div class="pjkccx-body-left fl">
                <div class="pjkccx-body-left-head">配件类别</div>
                <div class="pjkccx-body-left-body">
                    <ul>
                        <li>
                            <a href="javascript:;">全部分类</a>
                        </li>
                        <li>
                            <a href="javascript:;">医用</a>
                        </li>
                        <li>
                            <a href="javascript:;">测试</a>
                        </li>
                        <li>
                            <a href="javascript:;">电脑配件</a>
                        </li>
                        <li>
                            <a href="javascript:;">螺丝</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pjkccx-body-right fl" style="width:84%; padding-left:1%; height:100%;">
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
                            <label for class="search-label">配件型号：</label>
                            <Select style="width:160px">
                                <Option value="巴豆" </Option>
                            </Select>
                        </div>
                        <div class="search-select fl mr40">
                            <label for class="search-label">供应商：</label>
                            <Select style="width:160px">
                                <Option value="巴豆" </Option>
                            </Select>
                        </div>
                        <div class="search-submit fl" style="margin-left:30px;">
                            <a @click="getGzry" class="filter">筛选</a>
                        </div>
                    </Form>
                </div>
                <div style="clear:both;"></div>
                <div class="commonPart-body">
                    <Table size="large" :columns="columns" :data="data"></Table>
                    <Page :total="100" page-size-opts show-elevator style="float:right; margin: 15px 30px 0 0;"></Page>
                </div>
                <!-- 主体内容右边部分 EOF-->
            </div>
        </div>
        <!--主体内容右边部分 EOF-->
        <!--主体内容区域EOF-->
    </div>
</template>
<style scoped>
.pjkccx-body-left {
    width: 14%;
    /*height: calc(100%-60px);*/
    height:860px;
    border-right: 1px solid #ccc;
}

.pjkccx-body-left-head {
    line-height: 50px;
    padding-left: 20px;
    border-bottom: 1px solid #ccc;
    font-weight: 900;
}
.pjkccx-body-left-body li{
    line-height: 40px;
     
}
.pjkccx-body-left-body li a{
    display: inline-block;
     padding-left:20px;     
    width: 100%;
    height: 100%;
}
.pjkccx-body-left-body li a:hover{
    background-color: #ccc;
}
</style>
<script>
import http from '../../assets/js/http'
export default {
    data() {
        return {
            search: {
                yhSj: '',
                gzryGh: '',
                yhMm: '',
                yhXm: '',
                bmKey: '',
                zwKey: '',
            },
            ryxx: {
                yhSj: '',
                gzryGh: '',
                yhMm: '',
                yhXm: '',
                bmKey: '',
                zwKey: '',
            },
            formValidate: {
                yhSj: [
                    { required: true, message: '请填写手机号', trigger: 'blur' }
                ],
                yhXm: [
                    { required: true, message: '请填写用户姓名', trigger: 'blur' }
                ],
                bmKey: [
                    { required: true, message: '请填写所属部门', trigger: 'blur' }
                ],
                zwKey: [
                    { required: true, message: '请填写用户权限', trigger: 'blur' }
                ],
            },
            add: false,
            rylb: true,
            columns: [
                {
                    title: '配件编号',
                    key: 'yhgh',
                },
                {
                    title: '配件名称',
                    key: 'xm'
                },
                {
                    title: '配件型号',
                    key: 'shbm'
                },
                {
                    title: '生产产家',
                    key: 'zw'
                },
                {
                    title: '供应商',
                    key: 'zt'
                },
                {
                    title: '单位',
                    key: 'zhdlrq'
                },
                {
                    title: '入库单价',
                    key: 'cz'
                },
                {
                    title: '数量',
                    key: 'cz'
                },
                {
                    title: '金额',
                    key: 'cz'
                }
            ],
            data: [
                {}
            ]
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.apiPost('/addGzry', this.ryxx).then((res) => {
                        if (typeof (res.success) == 'undefined' && res.success == true) {
                            this.$Message.success('提交成功!');
                            this.add = false;
                        }
                    })
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })

        },
        handleReset(name) {
            this.$refs[name].resetFields();
        },
        tiaozhuan: function () {
            if (this.willShow == true) {
                this.willShow = false;
            }
            else {
                this.willShow = true;
            }
        },
        fanhui: function () {
            window.location.href = document.referrer;
        },
        getGzry() {
            this.apiGet('/getGzry').then((data) => {
                this.data = [];
                for (let i = 0, l = data.length; i < l; i++) {
                    this.data.push({
                        yhgh: data[i].yhgh,
                        xm: data[i].xm,
                        shbm: data[i].shbm,
                        zw: data[i].zw,
                        zt: data[i].zt,
                        zhdlrq: data[i].zhdlrq,
                        zhdlip: data[i].zhdlip,
                    })
                }
            })
        }
    },
    created() {
        this.getGzry();
    },
    mixins: [http]
}
</script>

<style scoped>

</style>