<style scoped >
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
        width:160px;
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
    
</style>
<template>
    <div class = "bmgl">
        <div class = "bmgl-main">
            <div class = "bmgl-header">
                <div class = "bmgl-left"><a href = "#">部门管理</a></div>
                <div class = "bmgl-right">
                    <Button class = "pldr">批量导入</Button>
                    <Button class = "add">添加一级部门</Button>
                </div>
            </div>
            <div class = "bmgl-middle">
                <div class = "bmgl-search">
                    <label id = "word">部门名称：</label>
                    <input type = "text" placeholder = "名称/编号/拼音简码" style = "position:relative;">
                    <a href = "javascript:void(0);">
                       <img style = "position:absolute;top:13.5%;left:250px;" src = "../../assets/xiala.png"/>     
                    </a>
                </div> 
               <!--  <div class = "bmgl-sx">
                    <a class = "bmgl-sxCurrent">筛选</a>
                </div> -->
                <div class="search-submit fl bmgl-sx" style="margin-left:20px;">
                    <a onclick="" class="filter">筛选</a>
                </div>
            </div>
            <div class = "bmgl-table">
                <Table size="large" :columns="columns1" :data="data1"></Table>
                <br>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                columns1: [
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
                        "key": "name",
                    },
                    {
                        "title": "部门地址",
                        "key": "age",
                    },
                    {
                        "title": "状态",
                        "key": "address",
                    },
                    {
                        "title": "操作",
                        "key": "name",
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
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    },
                    {
                        name: '周小伟',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        },
        methods: {
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: '原始数据'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: '排序和过滤后的数据',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: '自定义数据',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            }        
        }
    }
</script>