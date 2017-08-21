<template>
    <div class="commonPart" v-if="rylb">
        <!--顶部内容部分 SOF-->
        <div class="commonPart-head">
            <a href="javascript:;" class="fl">人员列表</a>
            <div class="right-btn fr">
                <a @click="rylb = false">批量导入</a>
                <a @click="newAdd(formValidate)">新增</a>
            </div>
        </div>
        <!--顶部内容部分 EOF-->
        <!-- 搜索栏 SOF-->
        <div class="commonPart-search">
            <Form>
                <div class="search-select fl mr40">
                    <label for class="search-label">用户名称：</label>
                    <input type="text" placeholder="名称/编号/拼音简码" @focus="" />
                    <a href="javascript:void(0)" class="icon">
                        <img src="../../assets/xiala.png" />
                    </a>
                </div>
                <div class="search-select fl mr40">
                    <label for class="search-label">部门名称：</label>
                    <input type="text" placeholder="名称/编号/拼音简码" @focus="" />
                    <a href="javascript:void(0)" class="icon">
                        <img src="../../assets/xiala.png" />
                    </a>
                </div>
                <div class="search-select fl mr40">
                    <label for class="search-label">职务：</label>
                    <input type="text" placeholder="名称/编号/拼音简码" @focus="" />
                    <a href="javascript:void(0)" class="icon">
                        <img src="../../assets/xiala.png" />
                    </a>
                </div>
                <div class="search-submit fl" @click="searchM(1)" style="margin-left:30px; cursor:pointer">
                    <a class="filter">筛选</a>
                </div>
            </Form>
        </div>
        <div style="clear:both;"></div>
        <!-- 搜索栏 EOF-->
        <!-- 新增窗口 SOF-->
        <Modal v-model="isAddRy" :title="formValidate.title" width="580" :mask-closable="false">
            <Form ref="formValidate" :rules="ruleValidate" :model="formValidate" :label-width="100" inline>
                <Form-item label="手机号：" prop="sj">
                    <Input class="input" type="text" v-model="formValidate.yhsjh" placeholder="">
                    </Input>
                </Form-item>
                <Form-item label="用户工号：" prop="gh">
                    <Input class="input" type="text" v-model="formValidate.yhgh" placeholder="">
                    </Input>
                </Form-item>
                <Form-item class="form-left" label="密码：" prop="yhMm">
                    <Input class="input" type="text" v-model="formValidate.yhmm" placeholder="默认密码123456">
                    </Input>
                </Form-item>
                <Form-item label="用户姓名：" prop="yhXm">
                    <Input class="input" type="text" v-model="formValidate.yhxm" placeholder="">
                    </Input>
                </Form-item>
                <Form-item label="所属部门：" prop="bmKey">
                    <Input class="input" type="text" v-model="formValidate.ssbm" placeholder="">
                    </Input>
                </Form-item>
                <Form-item label="用户权限：" prop="zwKey">
                    <Input class="input" type="text" v-model="formValidate.zwkey" placeholder="">
                    </Input>
                </Form-item>
            </Form>
            <div slot="footer" v-if="isEditRy">
                <Button type="ghost" style="margin-left: 8px" @click="handleColse(formValidate)">取消</Button>
                <Button type="primary" @click="handleSubmit('formValidate', 'update')">保存</Button>
            </div>
            <div slot="footer" v-else>
                <Button type="ghost" style="margin-left: 8px" @click="handleColse(formValidate)">取消</Button>
                <Button type="primary" @click="handleSubmit('formValidate', 'add')">保存</Button>
            </div>
        </Modal>
        <!-- 新增窗口 EOF-->
        <!-- 主体表格 SOF-->
        <div class="commonPart-body">
            <Table size="default" :columns="tablecolumns" :data="tableData"></Table>
            <BcPage @on-change="changePage" :current='page' :total="total" show-elevator style="float:right; margin: 15px 30px 0 0;"></BcPage>
        </div>
        <!-- 主体表格 EOF-->
    </div>
    
    <!-- 批量导入 SOF -->
    <div class="commonPart" v-else>
        <!--顶部内容部分 SOF-->
        <div class="commonPart-head">
            <a href="javascript:;" class="fl">用户管理</a>
            <div class="right-btn fr">
                <a @click="rylb = true">返回</a>
                <a @click="">下一步</a>
            </div>
        </div>
        <!--顶部内容部分 EOF-->
        <div class="rylbfile-neirong" style="margin:200px 0 0 35%;">
            <Upload action="//jsonplaceholder.typicode.com/posts/" :accept="xls" :format="['xls']" show-upload-list="true" style="display: inline-block;width:100px;">
                <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
            </Upload>
            <div class="rylbfile-first" style="color:#333;font-size:14px;">
                <label>上传文件：</label>
                <input style="margin-left:20px;" id="videoUrl" type="file" name="videoUrl">
            </div>
            <div class="rylbfile-second" style="color:#333;padding:30px 0 0 0;font-size:14px;">
                <label>模板下载：</label>
                <a style="margin-left:20px;">下载设备导入模板</a>
            </div>
            <div class="rylbfile-third" style="color:#333;padding:30px 0 0 0;font-size:14px;">
                <label style="float:left;">操作步骤：</label>
                <div style="float:left;margin-left:25px;">
                    <div>1.下载设备导入模板，并根据模板进行数据整理；</div>
                    <div>2. 选择上传的文件，点击“下一步”，系统自动进行数据验证；</div>
                    <div>3. 若数据验证不通过，请下载错误报告，根据错误报告更正数据，完成后重新上传验证；</div>
                    <div>4. 数据验证通过，则点击“确认并导入”，系统开始导入数据，提示“导入成功“后，导入完成。</div>
                </div>
            </div>
        </div>
    </div>
    <!-- 批量导入 EOF-->
</template>

<script>
import http from '../../assets/js/http'
import BcPage from '../common/page.vue'   //引入分页组件
export default {
    data() {
        return {
            total: 0,
            page: 1,
            isAddRy: false,
            isEditRy: false,
            edit: false,
            rylb: true,
            edited: {},
            datafiled: [        //总的所需要的字段
                'gzrykey',
                'zwkey',
                'yhgh',
                'yhxm',
                "ssbm",
                'ssbmkey',
                'zw',
                'zwkey',
                'yhzt',
                'zhdlrq',
                'zhdlip',
                'mm',
                'sjh',
            ],
            formValidate: {     //新增页面数据
                'yhsjh': '',
                'yhgh': '',
                'yhxm': '',
                'yhmm': '',
                'ssbm': '',
                'zw': '',
            },
            ruleValidate: {         //表单验证部分
                sj: [
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
            tablecolumns: [
                {
                    title: '用户工号',
                    key: 'yhgh',
                },
                {
                    title: '用户姓名',
                    key: 'yhxm'
                },
                {
                    title: '所属部门',
                    key: 'ssbm'
                },
                {
                    title: '职务',
                    key: 'zw'
                },
                {
                    title: '状态',
                    key: 'yhzt'
                },
                {
                    title: '最后登录日期',
                    key: 'zhdlrq'
                },
                {
                    title: '最后登录IP',
                    key: 'zhdlip'
                },
                {
                    title: '操作',
                    key: 'action',
                    render: (h, params) => {
                        return h('div', [
                            h('span', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '10px',
                                    color: '#3399cc',
                                    cursor: 'pointer'
                                },
                                on: {
                                    click: () => {
                                        this.editUser(params.index)
                                    }
                                }
                            }, '编辑'),
                        ]);
                    },

                },

            ],
            tableData: this.searchM()
        }
    },
    methods: {      // 筛选————表格————查看————新增————编辑
        editUser(index) {
            this.isAddRy = true;
            this.isEditRy = true;
            this.formValidate.title = "编辑用户"
            //给查看页循环赋值
            for (let i = 0, l = this.datafiled.length; i < l; i++) {
                this.formValidate[this.datafiled[i]] = this.tableData[index][this.datafiled[i]]//给页面查看字段动态赋值
            }
        },
        handleColse(name) {         //取消并且清空表单 ——> 共同调用
            this.isAddRy = false;
            this.$refs[name].resetFields();
        },
        newAdd(name) {          //新增表单触发事件
            this.formValidate.title = "新增人员";
            this.isEditRy = false;//修改用户标志设置false
            this.isAddRy = true;
            this.$refs[name].resetFields();
        },
        handleSubmit(name, action) {        //保存并且提交表单 ——> 共同调用
            this.$refs[name].validate((valid) => {
                if (action == 'update') this.formValidate.rykey = this.formValidate._rykey  //规定提交的方式是更新还是新增
                if (valid) {
                    this.apiPost('/addGzry?action=' + action, this.formValidate)    //提交表单，明确是新增还是编辑
                        .then((el) => {
                            if (el.errcode === 0) {
                                this.handleColse(name)
                                this.$Message.success(el.errmsg);
                                this.searchM(1);
                            } else {
                                this.$Message.error(el.errmsg);
                            }
                        })
                } else {
                    this.$Message.error('表单验证失败!') ;
                }
            })
        },
        changePage(index) {
            this.searchM(index);
        },
        searchM(page = 1) {           //筛选用户列表
            this.page = page;
            let filter = {
                page: this.page,
            };
            //对表格还要进行验证 引入库
            this.apiGet('/getGzry', {
                params: filter
            }).then((el) => {
                this.tableData = [];
                this.total = el.total;
                console.log(el)
                for (let i = 0, l = el.gzry.length; i < l; i++) {
                    let obj = {};    //定义临时json变量,给table赋值使用
                    //定义初始化数据字段名
                    //通过循环初始化字段,给table赋值
                    for (let a = 0, ll = this.datafiled.length; a < ll; a++) {
                        obj[this.datafiled[a]] = el.gzry[i][this.datafiled[a]];//给临时json变量赋值
                    }
                    this.tableData.push(obj)//把临时json变量的数据push到table所需要变量内
                }
            })
        },
    },
    components: {
        'BcPage': BcPage
    },
    mixins: [http]
}
</script>

<style scoped>
.add {
    background: #21a67a;
    outline: none;
}
</style>