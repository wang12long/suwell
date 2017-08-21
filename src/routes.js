import Login from './components/account/login.vue'
import Home from './components/home.vue'

import csgl from './components/Jcsz/csgl';
import bmgl from './components/Jcsz/bmglmain';
import qyxxgl from './components/Jcsz/qyxxgl';
import qxgl from './components/jcsz/qxgl';
import rylb from './components/jcsz/rylb';
import khgl from './components/khgl/khgl';
import scsj from './components/wxgl/scsj';
import dcwx from './components/wxgl/dcwx';
import wxdgl from './components/tjcx/wxjccx';
import ndwxfytj from './components/tjcx/ndwxfytj.vue';
import wxgstj from './components/tjcx/wxgstj.vue'
import wxfyfx from './components/tjcx/wxfyfx.vue'

import Csgl from './components/jcsz/csgl';
import Bmgl from './components/jcsz/bmglmain';
import QyxxGl from './components/jcsz/qyxxgl';
import Qxgl from './components/jcsz/qxgl';
import Rylb from './components/jcsz/rylb';
import Khgl from './components/khgl/khgl';
import Scsj from './components/wxgl/scsj';
import Dcwx from './components/wxgl/dcwx';


const routes = [
    { path: '/', component: Login, meta: { hideLeft: false } },
    { path: '/home', component: Home, meta: { hideLeft: false } },
    {
        path: '/home',
        component: Home,
        children: [
            { path: '/csgl', component: csgl, meta: { hideLeft: false } },
            { path: '/bmgl', component: bmgl, meta: { hideLeft: false } },
            { path: '/qyxxgl', component: qyxxgl, meta: { hideLeft: false } },
            { path: '/qxgl', component: qxgl, meta: { hideLeft: false } },
            { path: '/rylb', component: rylb, meta: { hideLeft: false } },
        ]
    },
    {
        path: '/home',
        component: Home,
        children: [
            { path: '/khgl', component: khgl, meta: { hideLeft: false } },
        ]
    },
    {
        path: '/home',
        component: Home,
        children: [
            { path: '/dcwx', component: dcwx, meta: { hideLeft: false } },
            { path: '/scsj', component: wxdgl, meta: { hideLeft: false } },
        ]
    },
    {
        path: '/home',
        component: Home,
        children: [
            { path: '/wxdgl', component: wxdgl, meta: { hideLeft: false } },
            { path: '/ndwxfytj', component: ndwxfytj, meta: { hideLeft: false } },
            { path: '/wxgstj', component: wxgstj, meta: { hideLeft: false } },
            { path: '/wxfyfx', component: wxfyfx, meta: { hideLeft: false } },
        ]
    },























];

export default routes