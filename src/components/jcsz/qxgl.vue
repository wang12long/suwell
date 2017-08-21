<template>
	<div class="qxgl">
		<div class="qxgl-main">
			<!--顶部内容部分 SOF-->
            <div class="commonPart-head">
                <a href="javascript:;" class="fl">权限管理</a>
                <div class="right-btn fr" style="top:0">
                    <div class="khgl-right fr">
						<Button class="pldr" @click="modal1 = true">保存</Button>
                    </div>
                </div>
            </div>
            <!--顶部内容部分 EOF-->
			<div class="qxgl-jslb">
				<div class="qxgl-jslb-top">
					<span class="qxgl-jslb-top-span">角色列表</span>
					<a class="qxgl-jslb-a">+增加角色</a>
				</div>
				<div class="qxgl-jslb-big">
					<div class="left-jzlx-cent change_sbfl addbg leftUlAcity" style="position: relative;">
						<input type="hidden" class="tyong">护士长1
						<div class="gzgw-rightlinks" style="float: right;padding-right:10px">
							<a class="left-pjlx-cent write write_pj" key="1">编辑</a>
							<a class="left-pjlx-cent tyong tyong_yhqz" key="1">停用</a>
						</div>
						<p class="pjfl_input" id="1" key="1">
							<input name="yhqz_key" value="护士长1" key="1" class="yhqz_key">
							<a class="left-pjlx-cent-input qxiao" style="margin-right:3px;margin-left:4px;">取消</a>
							<a class="left-pjlx-cent-input save_yhqz" style="margin-right:5px;">保存</a>
						</p>
					</div>
				</div>
			</div>
			<div class="qxgl-jsqx">
				<div class="search-nav">
					<div class="jsqx">角色权限</div>
					<div class="qxgl-qxmc">
						<span class="qxmc">权限名称：</span>
						<input style="position:relative;" class="qxgl-jsqx-input" type="text" placeholder="名称/拼音简码" />
						<a href="javascript:void(0);">
							<img style="position:absolute;top:2%;left:347px;" src="../../assets/xiala.png" />
						</a>
					</div>
					<div class="search-submit fl" style="margin-left:60px;">
                        <a @click="tableDta" class="filter">筛选</a>
                    </div>
				</div>
				<div class="qxgl-xuanze" style="clear:both;">
					<div class="qxgl-tou1">
						<li style="list-style:none;" class="qxgl-common">
							<input style="margin:4px 5px 0 0;" type="checkbox" id="sb" yjcd="yjcd" class="sb" value="sb" name="gwqx">设备
						</li>
					</div>
				</div>
				<div class="qxgl-content1">
					<ul>
						<li class="qxgl-common">
							<input type="checkbox" sjcd="sb" id="sblr" class="sblr" value="sblr" name="gwqx">发哈萨克
						</li>
						<li class="qxgl-common">
							<input type="checkbox" sjcd="sb" id="sblr" class="sblr" value="sblr" name="gwqx">发哈萨克
						</li>
						<li class="qxgl-common">
							<input type="checkbox" sjcd="sb" id="sblr" class="sblr" value="sblr" name="gwqx">发哈萨克
						</li>
						<li class="qxgl-common">
							<input type="checkbox" sjcd="sb" id="sblr" class="sblr" value="sblr" name="gwqx">发哈萨克
						</li>
						<li class="qxgl-common">
							<input type="checkbox" sjcd="sb" id="sblr" class="sblr" value="sblr" name="gwqx">发哈萨克
						</li>
						<li class="qxgl-common">
							<input type="checkbox" sjcd="sb" id="sblr" class="sblr" value="sblr" name="gwqx">发哈萨克
						</li>
						<li class="qxgl-common">
							<input type="checkbox" sjcd="sb" id="sblr" class="sblr" value="sblr" name="gwqx">发哈萨克
						</li>
						<li class="qxgl-common">
							<input type="checkbox" sjcd="sb" id="sblr" class="sblr" value="sblr" name="gwqx">发哈萨克
						</li>
						<li class="qxgl-common">
							<input type="checkbox" sjcd="sb" id="sblr" class="sblr" value="sblr" name="gwqx">发哈萨克
						</li>
						<li class="qxgl-common">
							<input type="checkbox" sjcd="sb" id="sblr" class="sblr" value="sblr" name="gwqx">发哈萨克
						</li>
					</ul>
				</div>
			</div>
	
		</div>
	</div>
</template>

<style scoped>

.pldr {
	background: #21a67a;
	outline: none;
}

.qxgl .qxgl-jslb {
	width: 240px;
	height: 820px;
	overflow-y: auto;
	overflow-x: hidden;
	border-right: 8px solid #e4e4e4 !important;
	float: left;
}

.qxgl .qxgl-jslb .qxgl-jslb-top {
	width: 100%;
	height: 50px;
	line-height: 50px;
	border-bottom: 1px solid gainsboro;
}

.qxgl .qxgl-jslb .qxgl-jslb-top .qxgl-jslb-top-span {
	margin-left: 20px;
	font-weight: 900;
	font-size: 14px;
}

.qxgl .qxgl-jslb .qxgl-jslb-top .qxgl-jslb-a {
	color: #3399cc;
	float: right;
	margin-right: 10px;
}

.qxgl .qxgl-jslb a {
	text-decoration: none;
	outline: none;
	cursor: pointer;
	color: #298ff8;
}

.qxgl .qxgl-jslb-big {
	position: relative;
}

.qxgl .qxgl-jslb-big .leftUlAcity {
	color: #333;
}

.qxgl .qxgl-jslb-big .addbg {
	background-color: #ebebeb !important;
	height: 40px;
	line-height: 40px;
	padding-left: 20px;
}

.qxgl .qxgl-jslb-big .left-gzlx-cent {
	width: 100%;
}

.qxgl .qxgl-jslb-big .gzgw-rightlinks {
	position: relative;
	opacity: 1;
	float: right;
	padding-right: 5px;
}

.qxgl .qxgl-jslb-big .leftUlAcity a {
	color: #21a8e5;
}

a {
	text-decoration: none;
	outline: none;
	cursor: pointer;
}

.qxgl .qxgl-jslb-big .pjfl_input {
	position: absolute;
	display: none;
	top: 0;
	height: 40px;
	width: 100%;
	line-height: 40px;
	left: 15px;
}

.qxgl .qxgl-jslb-big .yhqz_key {
	padding-left: 9px;
	height: 30px;
	width: 150px;
	border: 1px solid #e6e6e6;
	border-radius: 4px;
	color: #333;
}

.qxgl .qxgl-jsqx {
	height: 823px;
	left: 247px;
	position: absolute;
	float: left;
	width: 85%;
}

.qxgl .qxgl-jsqx .search-nav {
	border-bottom: 5px solid #e4e4e4;
	width: 100%;
	height: 50px;
	padding: 10px 0 10px 30px;
}

.qxgl .qxgl-jsqx .jsqx {
	float: left;
	width: 60px;
	font-size: 14px;
	margin-right: 50px;
	font-weight: 700;
	height: 30px;
	line-height: 30px;
}

.qxgl .qxgl-jsqx .qxgl-qxmc,
.qxgl-sx {
	float: left;
}

.qxgl .qxgl-jsqx .qxgl-qxmc .qxmc {
	width: 70px;
	text-align: right;
	margin-right: 5px;
	font-size: 12px;
	margin-top: 10px;
	height: 30px;
	line-height: 30px;
	color: #333;
}

.qxgl .qxgl-jsqx .qxgl-jsqx-input {
	width: 160px;
	height: 30px;
	line-height: 30px;
	border-radius: 5px;
	border: 1px #e6e6e6 solid;
	padding-left: 10px;
	outline: none;
}

.qxgl .qxgl-xuanze .qxgl-tou1 {
	width: 100%;
	font-size: 14px;
	padding: 20px 0 0 30px;
	border-bottom: 1px solid #e4e4e4;
	clear: both;
}

.qxgl .qxgl-content1 {
	width: 100%;
	font-size: 14px;
	height: 40px;
	padding: 10px 0 0 55px;
}

.qxgl-common {
	padding-bottom: 10px;
}

li {
	list-style: none;
}

.qxgl-content1>ul>li {
	margin-right: 35px;
	float: left;
	margin-bottom: 10px;
	width: 150px;
}

.qxgl-content1>ul>li>input {

	margin-right: 5px;
}

input[type=checkbox] {
	margin: 4px 0 0;
	line-height: normal;
}

.qxgl-tou1 li,
.qxgl-content1 li {
	color: #333;
	font-size: 14px;
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

<script>
export default {
	data() {
		return {

		}
	},
	methods: {

	}
}
</script>