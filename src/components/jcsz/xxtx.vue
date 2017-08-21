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
</style>
<template>
    <div class = "bmgl">
        <div class = "bmgl-main">
            <div class = "bmgl-header">
                <div class = "bmgl-left"><a href = "#">部门管理</a></div>
                <div class = "bmgl-right">
                    <Button class = "pldr" @click="modal1 = true">批量导入</Button>
                    <Modal v-model="modal1" title="消息提醒" @on-ok="ok" @on-cancel="cancel">
                        <div class = "xxtx">您正在执行停用操作 , 确定要停用吗</div>  
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