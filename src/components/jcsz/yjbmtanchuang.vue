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
</style>
<template>
    <div class = "bmgl">
        <div class = "bmgl-main">
            <div class = "bmgl-header">
                <div class = "bmgl-left"><a href = "#">部门管理</a></div>
                <div class = "bmgl-right">
                    <Button class = "pldr" @click="modal1 = true">批量导入</Button>
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
                    <Button class = "add">添加一级部门</Button>
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
            
        </div>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                modal1: false
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