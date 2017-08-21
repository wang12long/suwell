<template>
    <div class="khgl" @click="closeOther">
        <div class="khgl-main">
            <!--顶部内容部分 SOF-->
            <div class="commonPart-head">
                <a href="javascript:;" class="fl khlbTit">客户列表</a>
                <div class="right-btn fr" style="top:0">
                    <div class="khgl-right fr">
                        <!--新增 SOF-->
                        <Button class="pldr" @click="newAdd('formValidate')">新增</Button>
                        <Modal class="title" v-model="isAddKh" :title="formValidate.title" width="560" :mask-closable="false">
                            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="90" inline>
                                <Form-item label="客户名称：" prop="khmc" style="display:block">
                                    <Input v-model="formValidate.khmc"></Input>
                                </Form-item>
                                <Form-item label="客户编码：" prop="khkey">
                                    <Input type="text" v-model="formValidate.khkey" :disabled="isDisabled"></Input>
                                </Form-item>
                                <Form-item label="客户类型：" prop="khlx">
                                    <Input v-model="formValidate.khlx" disabled></Input>
                                </Form-item>
                                <Form-item label="负责人：" prop="khfzr">
                                    <Input v-model="formValidate.khfzr"></Input>
                                </Form-item>
                                <Form-item label="联系方式：" prop="lxfs">
                                    <Input v-model="formValidate.lxfs"></Input>
                                </Form-item>
                                <Form-item label="电子邮件：" prop="dzyj">
                                    <Input v-model="formValidate.dzyj"></Input>
                                </Form-item>
                                <Form-item label="所在地区：" prop="city">
                                    <Cascader :data="City" v-model="formValidate.city" :load-data="loadCity"></Cascader>
                                </Form-item>
                                <Form-item label="详细地址：" prop="xxdz" style="display:block">
                                    <Input v-model="formValidate.xxdz"></Input>
                                </Form-item>
                                <Form-item label="状态：" prop="khzt">
                                    <Radio-group v-model="formValidate.khzt">
                                        <Radio label="1">启用</Radio>
                                        <Radio label="0">停用</Radio>
                                    </Radio-group>
                                </Form-item>
                            </Form>
                            <div slot="footer" v-if="isEditKh">
                                <Button type="ghost" style="margin-left: 8px" @click="handleColse('formValidate') ">取消</Button>
                                <Button type="primary" @click="saveUser('formValidate','update')">保存</Button>
                            </div>
                            <div slot="footer" v-else>
                                <Button type="ghost" style="margin-left: 8px" @click="handleColse('formValidate') ">取消</Button>
                                <Button type="primary" @click="saveUser('formValidate','add')">保存</Button>
                            </div>
                        </Modal>
                        <!--新增 EOF-->
                    </div>
                </div>
            </div>
            <!--顶部内容部分 EOF-->
            <!-- 搜索栏 SOF-->
            <div class="commonPart-search">
                <Form>
                    <div class="search-select fl mr40">
                        <!-- <label for class="search-label">客户名称：</label> -->
                        <!-- <input type="text" placeholder="名称/编号/拼音简码" @focus="" /> -->
                        <dropDown ref="drop" :dropdata="dropdata" style="width:160px;"></dropDown>
                    </div>
                    <div class="search-select fl mr40 ">
                        <label for class="search-label">所属区域：</label>
                        <input type="text" placeholder="" @focus="" />
                    </div>
                    <div class="search-select fl mr40 " id="search-khlx">
                        <label for class="search-label">客户类型：</label>
                        <Select v-model="serchKhlx" style="width:160px">
                            <Option value='1'>托管</Option>
                            <Option value='2'>代理</Option>
                            <Option value='3'>单次</Option>
                        </Select>
                    </div>
                    <div class="search-select fl mr40 ">
                        <label for class="search-label">状态：</label>
                        <Select v-model="serchKhzt" style="width:160px">
                            <Option value='1'>启用</Option>
                            <Option value='0'>停用</Option>
                        </Select>
                    </div>
                    <div class="search-submit fl " @click="search(1)" style="margin-left:30px; cursor:pointer">
                        <a class="filter ">筛选</a>
                    </div>
                </Form>
            </div>
            <div style="clear:both;"></div>
            <!-- 搜索栏 EOF-->
            <!-- 主体表格 SOF-->
            <div class="khgl-table">
                <Table :columns="tableColumns" :data="tableData" no-data-text size="default"></Table>
                <BcPage @on-change="search" :current='page' :total="total" show-elevator style="float:right; margin: 15px 30px 0 0;"></BcPage>
            </div>
            <!-- 主体表格 EOF-->
            <!--侧边查看 SOF -->
            <div class="sideBar" style="display:none" v-show="sideBarShow">
                <div class="sideBar-head">
                    客户详情
                    <span class="fr" @click="close">×</span>
                </div>
                <div class="sideBar-body">
                    <div class="search-select  mr40  mb10">
                        <label for class="search-label">客户名称</label>
                        <span>{{formValidate.khmc}}</span>
                    </div>
                    <div class="search-selec fl" style="margin-right:200px;">
                        <label for class="search-label">客户编码</label>
                        <span>{{formValidate.khbm}}</span>
                    </div>
                    <div class="search-select fl  mb10">
                        <label for class="search-label">客户类型</label>
                        <span>{{formValidate.khlx}}</span>
                    </div>
                    <div class="search-selec fl" style="margin-right:175px;">
                        <label for class="search-label">负责人</label>
                        <span>{{formValidate.khfzr}}</span>
                    </div>
                    <div class="search-select fl mb10">
                        <label for class="search-label">联系方式</label>
                        <span>{{formValidate.lxfs}}</span>
                    </div>
                    <div style="clear:both"></div>
                    <div class="search-select fl mb10">
                        <label for class="search-label">电子邮件</label>
                        <span>{{formValidate.dzyj}}</span>
                    </div>
                    <div style="clear:both"></div>
                    <div class="search-select mb10">
                        <label for class="search-label">状态</label>
                        <span>{{formValidate.status}}</span>
                    </div>
                    <div class="search-select mb10">
                        <label for class="search-label">所在地区</label>
                        <span>{{formValidate.szdq}}</span>
                    </div>
                    <div class="search-select mb10">
                        <label for class="search-label">详细地址</label>
                        <span>{{formValidate.xxdz}}</span>
                    </div>
                </div>
            </div>
            <!--侧边查看 EOF -->
        </div>
    </div>
</template>
<script>
import http from '../../assets/js/http'     //引入通讯组件机制
import BcPage from '../common/page.vue'   //引入分页组件
import { checkOfNull } from '../../assets/js/assist';
import dropDown from '../common/dropdown.vue';
export default {
    data() {
        return {
            dropdata:
            {
                columns: [
                    {
                        title: '客户编号',
                        key: 'khkey',
                    },
                    {
                        title: '客户名称',
                        key: 'khmc',
                    }
                ],
                data: 'kh',
                labelName: '客户名称：',
                inputName: 'khmc',
                inputValue: '',
                url: '/getDropDownKhList'
            },
            isDisabled: false,// 控制样式是否可编辑,编辑数据时使用
            formValidate: {   // 新增表单内的所有字段
                'khkey': '',
                'khmc': '',
                'khqy': '',
                'khlx': '单次',
                'khdz': '',
                'khzt': '',
                'khfzr': '',
                'lxfs': '',
                'xxdz': '',
                'city': [],
                'dzyj': '',
                'khzt': '1',
                'title': '新增用户'
            },
            ruleValidate: {    //表单验证规则
                khmc: [
                    { required: true, message: '请填写客户名称', trigger: 'blur' }
                ],
                khfzr: [
                    { required: true, message: '请选择客户负责人', trigger: 'blur' }
                ],
                lxfs: [
                    { required: true, message: '请填写联系方式', trigger: 'blur' }
                ],
                // city: [
                //     { required: true, message: '请选择地区', trigger: 'change' }
                // ],
            },
            page: 1,
            total: 0,
            isAddKh: false,            //新增窗口默认显示为false；
            isEditKh: false,          //编辑窗口默认显示为false；
            sideBarShow: false,     //侧边查看效果默认为隐藏
            serchKhlx: '',         //搜索栏客户类型
            serchKhzt: '1',       //搜索栏客户状态
            tableData: this.search(1),          // 主体表格数据渲染部分内容
            tableColumns: [         // 主体表格表头数据部分start（后期更改）
                {
                    title: '客户编号',
                    key: 'khkey',
                    "sortable": true
                },
                {
                    title: '区域',
                    key: 'city',
                    "sortable": true
                },
                {
                    title: '客户名称',
                    key: 'khmc',
                    "sortable": true
                },
                {
                    title: '地址',
                    key: 'khdz',
                    "sortable": true
                },
                {
                    title: '客户类型',
                    key: 'khlx',
                },
                {
                    title: '状态',
                    key: 'zt',
                },
                {
                    title: '操作',
                    key: 'cz',
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
                                        this.viewUser(params.index)
                                    }
                                }
                            }, '查看'),
                            h('span', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginRight: '5px',
                                    color: '#3399cc',
                                    cursor: 'pointer'
                                },
                                on: {
                                    click: () => {
                                        this.editUser(params.index)
                                    }
                                }
                            }, '编辑')
                        ]);
                    },
                },
            ],
            create: '',             // 新增表单对象
            edit: {},              //编辑表单对象
            watch: {},           //查看表单对象
            City: this.cshCity(),
            datafiled: [        //查看 编辑所需所有字段
                'khkey',
                'khmc',
                'khqy',
                'khlx',
                'khdz',
                'khzt',
                'khfzr',
                'lxfs',
                'xxdz',
                'szdq',
                'dzyj',
                'sfname',
                'sfcode',
                'csname',
                'cscode',
                'qxname',
                'qxcode',
                'city'
            ]
        }
    },
    methods: {
        cshCity() { //初始化城市的级联
            this.apiGet('/getQy').then((el) => {
                let City = [];
                for (let i = 0, l = el.length; i < l; i++) {
                    City.push({
                        label: el[i].label,
                        value: el[i].value,
                    })
                    if (el[i].level !== 3) {//判断是否存在下级
                        City[i].children = []
                        City[i].loading = false
                    }
                }
                this.City = City;
            })
        },
        loadCity(item, callback) { //动态加载城市级联
            this.apiGet('/getQy', {
                params: { city: item.value }
            }).then((el) => {
                let City = [];
                item.loading = true;
                for (let i = 0, l = el.length; i < l; i++) {
                    City.push({
                        label: el[i].label,
                        value: el[i].value,
                    })
                    if (el[i].level !== 3) {
                        City[i].children = []
                        City[i].loading = false
                    }
                }
                item.children = City
                item.loading = false;
                callback();
            })

        },
        handleColse(name) {     //取消操作
            this.isAddKh = false;
            this.$refs[name].resetFields();
        },
        newAdd(name) {         // 新增用户
            this.formValidate.title = "新增用户"
            this.formValidate.city = []
            this.isEditKh = false;      //修改用户标志设置false
            this.isDisabled = false;    //修改界面所需
            this.isAddKh = true;
            this.$refs[name].resetFields();
        },
        saveUser(name, action) {                     //用户列表提交
            this.$refs[name].validate((valid) => {  // 表单验证如果成功的话，执行请求程序
                if (action == 'update') this.formValidate.khkey = this.formValidate._khkey // 通过action，判断列表是新增还是更新，
                if (valid) {
                    this.apiPost('/addKh?action=' + action, this.formValidate)      //通过action来判断表单类型，并且将表单提交给后台
                        .then((el) => {
                            if (el.errcode === 0) {
                                this.handleColse(name);             //执行取消操作
                                this.$Message.success(el.errmsg);   //弹出提示信息
                                this.search(1);                     //重新查询数据
                            } else {
                                this.$Message.error(el.errmsg);
                            }
                        })
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        },
        editUser(index) {                 //编辑用户列表
            this.isAddKh = true;
            this.isDisabled = true;
            this.isEditKh = true;
            this.formValidate.title = "编辑用户"
            //给编辑页循环赋值
            for (let i = 0, l = this.datafiled.length; i < l; i++) {
                this.formValidate[this.datafiled[i]] = this.tableData[index][this.datafiled[i]]//给页面查看字段动态赋值
            }
            //给城市输入框赋值
            this.formValidate.city = [this.formValidate.sfcode, this.formValidate.cscode, this.formValidate.qxcode]
            this.formValidate._khkey = this.formValidate.khkey
        },
        viewUser(index) {                //查看用户列表
            this.sideBarShow = true;
            //给查看页循环赋值
            for (let i = 0, l = this.datafiled.length; i < l; i++) {
                this.formValidate[this.datafiled[i]] = this.tableData[index][this.datafiled[i]]//给页面查看字段动态赋值
            }
            this.formValidate.city = checkOfNull(this.formValidate.sfname) + ' ' +
                checkOfNull(this.formValidate.csname) + ' ' +
                checkOfNull(this.formValidate.qxname)
            this.formValidate._khkey = this.formValidate.khkey
        },
        search(page = 1) {           //初始化table,并筛选用户列表
            this.page = page;
            let filter = {
                'page': this.page,
            };
            if (typeof (this.dropdata) !== 'undefined') {
                checkOfNull(this.dropdata.inputValue, filter, this.dropdata.inputName)
            }
            checkOfNull(this.serchKhlx, filter, 'khlx')
            checkOfNull(this.serchKhzt, filter, 'khzt')

            // checkOfNull(this.$refs.drop, filter, 'khzt')
            //通过get方式,从后台获取数据
            this.apiGet('/getKhList', {
                params: filter
            }).then((el) => {
                this.tableData = [];//初始化table数据
                this.total = el.total;//设置总条数,分页需要
                //给table循环遍历赋值
                for (let i = 0, l = el.kh.length; i < l; i++) {
                    let obj = {};    //定义临时json变量,给table赋值使用
                    //定义初始化数据字段名
                    //通过循环初始化字段,给table赋值
                    for (let a = 0, ll = this.datafiled.length; a < ll; a++) {
                        obj[this.datafiled[a]] = el.kh[i][this.datafiled[a]];//给临时json变量赋值
                    }
                    obj['city'] = checkOfNull(obj['sfname']) + ' ' + checkOfNull(obj['csname']) + ' ' + checkOfNull(obj['qxname'])

                    switch (obj['khlx']) {
                        case 1: {
                            obj['khlx'] = "托管"
                            break;
                        }
                        case 2: {
                            obj['khlx'] = "代理"
                            break;
                        }
                        case 3: {
                            obj['khlx'] = "单次"
                            break;
                        }
                        default: {
                            obj['khlx'] = "其他"
                            break;
                        }
                    }
                    this.tableData.push(obj)//把临时json变量的数据push到table所需要变量内
                }
            })
        },
        close() {                   // sideBaer关闭按钮
            this.sideBarShow = false;
        },
        closeOther() {   //点击其他区域关闭 下拉框和侧边查看栏
            this.sideBarShow = false;
        },
    },
    components: {
        'BcPage': BcPage,    // 引入分页组件，注册分页组件
        'dropDown': dropDown
    },
    mixins: [http]
}
</script>
<style scoped lang="less">
/*侧边栏 EOF*/

.mb10 {
    margin-bottom: 20px;
}

.khlbTit:hover {
    color: #39f;
}

.pldr {
    background: #21a67a;
    color: #fff;
}

.pldr:hover {
    background: #26bf8c;
    color: #fff;
}

.sideBar {
    position: absolute;
    top: 0;
    right: 0;
    width: 540px;
    height: 100%;
    z-index: 9999999999999999;
    background-color: #fff;
    box-shadow: 0 0 20px #ccc;
    box-sizing: border-box;
    .sideBar-head {
        border-bottom: 2px solid #ccc;
        line-height: 50px;
        font-size: 16px;
        color: #333;
        padding: 0 25px;
        box-sizing: border-box;
        span {
            cursor: pointer;
            font-size: 40px;
            color: rgb(202, 202, 202);
            font-weight: 300;
        }
    }
    .sideBar-body {
        box-sizing: border-box;
        padding: 20px 0 20px 30px;
        label {
            font-size: 14px;
            color: #000;
        }
        span {
            font-size: 14px;
            color: #999;
        }
    }
}






/*侧边栏 SOF*/
</style>



