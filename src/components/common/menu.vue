<template>
  <div>
    <div class="logo">
      <img src="./images/logo.png" alt="">
    </div>
    <div class="menu">
      <ul>
        <li :class="[menu.cdkey,{setOpen,opened: openName == menu.cdkey}]" v-for="menu in menuData" @click="onExpand(menu.cdkey)">
          <i></i>
          <p>{{menu.cdmc}}</p>
        </li>
      </ul>
    </div>
    <div class="menu-second" v-show="isShow">
      <ul>
        <li v-for="menu in menuData" :ref="menu.cdkey" :class="{ 'active' : openName == menu.cdkey,
                 'passive': openName !== menu.cdkey}">
          <div class="menu-second-title">{{menu.cdmc}}</div>
          <router-link class="menu-second-link" :to="zcd.cdkey" v-for="zcd in menu.zcd" :key="zcd.id">
            <span>{{zcd.cdmc}}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
 
<script>
export default {
  props: ['menuData'],
  data() {
    return {
      openname: '',
      isShow: false,
      isActive: false,
      openName: ''
    }
  },
  computed: {
    setOpen() {

      this.onExpand(this.$route.meta.module, true);
    },
    setActive() {
      return 'display:' + this.active.display;
    }
  },
  methods: {
    onExpand(name, isOne) {
      
      for (let i in this.$refs) {
        if (name == i) {

          this.$refs[i][0].style.display = 'block'

        } else {
          this.$refs[i][0].style.display = 'none'
        }
      }
      this.openName = name
      let path = this.$route.meta.module
      
      if (!isOne) {
        if (this.isShow == true && store.getters.getPreSelect == name) {
          this.isShow = false
          store.dispatch('showSecondMenu', false)
        } else {
          this.isShow = true
          store.dispatch('showSecondMenu', true)
        }
        store.dispatch('preSelect', name)
      } else {
        if (typeof (name) != 'undefined') {
          this.isShow = true;
          store.dispatch('showSecondMenu', true)
        } else {
          this.isShow = false;
          store.dispatch('showSecondMenu', false)
        }
        store.dispatch('preSelect', name)
      }

    },
  },

}
</script>

<style scoped>
.logo {
  height: 54px;
  width: 70px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.active {
  display: inline-block;
}

.passive {
  display: none;
}

.menu ul li {
  color: #fff;
  cursor: pointer;
  height: 64px;
  position: relative;
}

.menu ul li p {
  color: #8f9bb3;
  position: relative;
  text-align: center;
  top: 42px;
}

.menu li i {
  background-image: url("./images/menu.png");
  background-repeat: no-repeat;
  height: 29px;
  left: 20px;
  position: absolute;
  top: 10px;
  width: 29px;
}

.menu li.opened p {
  color: #fff;
}

.menu li.kh i {
  background-position: -29px -130px;
}

.menu li.kh.opened i,
.menu li.kh i:hover {
  background-position: -109px -130px;
}

.menu li.wxgl i {
  background-position: -29px -204px;
}

.menu li.wxgl.opened i,
.menu li.wxgl i:hover {
  background-position: -109px -204px;
}

.menu li.pjgl i {
  background-position: -29px -284px;
}

.menu li.pjgl.opened i,
.menu li.pjgl i:hover {
  background-position: -109px -284px;
}

.menu li.tjcx i {
  background-position: -29px -362px;
}

.menu li.tjcx.opened i,
.menu li.tjcx i:hover {
  background-position: -109px -362px;
}

.menu li.jcsz i {
  background-position: -29px -450px;
}

.menu li.jcsz.opened i,
.menu li.jcsz i:hover {
  background-position: -109px -450px;
}

.menu-second {
  width: 150px;
  background: #fff;
  position: absolute;
  text-align: center;
  top: 0;
  left: 70px;
  height: 100%;
  box-shadow: 4px 4px 4px rgba(150, 150, 150, .1);
  z-index: 1000;
}

.menu-second-title {
  text-align: center;
  line-height: 54px;
  font-size: 16px;
  color: #333;
}

.menu-second-link {
  display: block;
  width: 150px;
  height: 36px;
  background: url('./images/round.png') no-repeat 20px center;
  background-position: 20px center;
  text-align: left;
  padding-left: 36px;
  font-size: 14px;
}

.router-link-active {
  background-color: #ebebeb !important;
}

.menu-second-link span {
  display: inline-block;
  margin-right: 10px;
  line-height: 36px;
  color: #666;
}
</style>