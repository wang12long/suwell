<template>
    <div class="qyxxgl">
        <div class="qyxxgl-main">
             <!--顶部内容部分 SOF-->
            <div class="commonPart-head">
                <a href="javascript:;" class="fl">企业信息管理</a>
                <div class="right-btn fr" style="top:0">
                    <div class="khgl-right fr">
                        <Button class="pldr" @click="modal1 = true">保存</Button>
                    </div>
                </div>
            </div>
            <!--顶部内容部分 EOF-->
            <div class="qyxxgl-form">
                <div class="qyxxgl-list-first">
                    <div class="qyxxgl-title">企业LOGO</div>
                    <div class="qyxxgl-photo">
                        <img src="../../assets/logo.png" alt/>
                    </div>
                    <div class="qyxxgl-shezhi">
                        <a href="javascript:void(0);" onclick="$('#logo').click();"> 设置</a>
                        <input id="logo" type="file" onchange="getPhoto(this)" name="logo" style="display:none;">
                    </div>
                </div>
                <div class="qyxxgl-list-second">
                    <div class="qyxxgl-qymc">企业名称</div>
                    <div class="qyxxgl-gongsi">
                        <p>深圳市百川信息有限公司</p>
                        <input type="hidden" value="">
                    </div>
                </div>
                <div class="qyxxgl-list-third">
                    <div class="qyxxgl-qymc">企业地址</div>
                    <div class="qyxxgl-address">
                        <input style="border: none;width:555px;outline:none;" id="qydz-input" name="qyxx_qydz" value="深圳市罗湖区老街" class="qyxxgl-borer">
                    </div>
                    <div class="qyxxgl-xg" v-on:click="qydz">
                        <a href="javascript:void(0)">修改</a>
                    </div>
                </div>
                <div class="qyxxgl-list-fouth">
                    <div class="qyxxgl-qylxr">企业联系人</div>
                    <div class="qyxxgl-name">
                        <input style="border: none;margin-left:13px;outline:none;width:360px;" id="qylxr-input" name="qyxx_qydz" value="科比" class="qyxxgl-borer">
                    </div>
                    <div class="qyxxgl-xg" v-on:click="qylxr">
                        <a href="javascript:void(0)">修改</a>
                    </div>
                </div>
                <div class="qyxxgl-list-five">
                    <div class="qyxxgl-lxfs">联系方式</div>
                    <div class="qyxxgl-number">
                        <input style="border: none;outline:none;width:360px;" id="lxfs-input" name="qyxx_qydz" value="13245678901" class="qyxxgl-borer">
                    </div>
                    <div class="qyxxgl-xg" v-on:click="lxfs">
                        <a href="javascript:void(0)">修改</a>
                    </div>
                </div>
                <div class="qyxxgl-list-six">
                    <div class="qyxxgl-lxfs">企业邮箱</div>
                    <div class="qyxxgl-number">
                        <input style="border: none;outline:none;width:360px;" id="qyyx-input" name="qyxx_qydz" value="123@11.com" class="qyxxgl-borer">
                    </div>
                    <div class="qyxxgl-xg" v-on:click="qyyx">
                        <a href="javascript:void(0)">修改</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped >
.pldr {
    background: #21a67a;
    outline: none;
}

.qyxxgl-list-first {
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    height: 130px;
}

.qyxxgl-title {
    font-size: 14px;
    color: #333333;
    width: 120px;
    padding: 55px 0px;
    float: left;
    margin-left: 101px;
}

.qyxxgl-qymc,
.qyxxgl-lxfs {
    font-size: 14px;
    color: #333333;
    width: 120px;
    padding: 20px 0px;
    float: left;
    margin-left: 113px;
}

.qyxxgl-qylxr {
    font-size: 14px;
    color: #333333;
    width: 120px;
    padding: 20px 0px;
    float: left;
    margin-left: 100px;
}

.qyxxgl-photo {
    float: left;
    padding: 14px 0px;
    margin-left: 60px;
}

.qyxxgl-photo>img {
    width: 127px;
    height: 102px;
}

.qyxxgl-shezhi {
    font-size: 14px;
    float: right;
    padding: 55px 0px;
    margin-right: 3%;
}

.qyxxgl-list-second,
.qyxxgl-list-third,
.qyxxgl-list-fouth,
.qyxxgl-list-five,
.qyxxgl-list-six {
    clear: both;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    height: 60px;
}

.qyxxgl-gongsi,
.qyxxgl-name {
    float: left;
    padding: 17px 0px;
    font-size: 16px;
    margin-left: 60px;
}

.qyxxgl-gongsi>p {
    color: #475059;
}

.qyxxgl-list-third>input {
    height: 25px;
    font-size: 15px;
    color: #475059;
}

.qyxxgl-address,
.qyxxgl-number {
    float: left;
    padding: 17px 0px;
    font-size: 16px;
    margin-left: 60px;
}

.qyxxgl-xg {
    font-size: 14px;
    float: right;
    padding: 20px 0px;
    margin-right: 3%;
}
</style>

<script>
export default {
    data() {
        return {
            modal1: '',
            modal1: false,
        }
    },
    methods: {
        qydz: function () {
            document.getElementById("qydz-input").style.border = "none";
        },
        qylxr: function () {
            document.getElementById("qylxr-input").style.border = "none";
        },
        lxfs: function () {
            document.getElementById("lxfs-input").style.border = "none";
        },
        qyyx: function () {
            document.getElementById("qyyx-input").style.border = "none";
        },
    }
}
</script>