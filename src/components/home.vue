<template>
    <div class="layout">
        <div class="layout-menu-left">
            <leftMenu :menuData="menuData"></leftMenu>
        </div>
        <div class="layout-content" :style="{'margin-left':marginLeft}">
            <div class="layout-header" style="text-align:center; line-height:50px">
                <h2>深圳市百川信息技术有限公司</h2>
            </div>
            <div class="layout-content-main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import leftMenu from './common/menu.vue'
import http from '../assets/js/http'
export default {
    data() {
        return {
            menuData: [],
            height: '0',
            isShow: true,
        }
    },
    methods: {

    },
    computed: {
        marginLeft() {
            if (store.getters.getisShowSecondMenu == true) {
                return '220px';
            } else {
                return '70px';
            }
        },
        setHeight() {
            return `${window.outerHeight}px`;

        },
    },
    created() {
        if (!storejs.get('userinfo')) router.replace('/login')
        this.menuData = storejs.get('menus')
    },
    components: {
        'leftMenu': leftMenu
    },
    mixins: [http]
}
</script>
<style scoped>
.layout {
    background: #e6e9f0;
}

.layout-menu-left {
    background: #464c5b;
    width: 70px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0px;
}

.layout-content {
    /*display: flex;
    flex-direction: column;*/
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}

.layout-header {
    height: 50px;
    background: #fff;
}

.layout-content-main {
    /*flex: 1;*/
    border: 10px solid #e6e9f0;
    background: #fff;
    height: calc(100% - 50px);
    /*min-height: 840px;*/
}
</style>

