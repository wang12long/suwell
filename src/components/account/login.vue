<template>
    <Form ref="form" :model="form" :rules="ruleInline" inline>
        <Form-item prop="username">
            <Input type="text" v-model="form.username" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item prop="password">
            <Input type="password" v-model="form.password" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('form')">登录</Button>
        </Form-item>
    </Form>
</template>
<script>
import http from '../../assets/js/http'
export default {
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            ruleInline: {
                username: [
                    { required: true, message: '请填写用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请填写密码', trigger: 'blur' },
                    { type: 'string', min: 1, message: '密码长度不能小于6位', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleSubmit(name) {    
            let data = {}
            data.username = this.form.username
            data.password = this.form.password
            this.apiPost('/login', data).then((res) => {// 
                //只有登录验证成功才跳转
                if (typeof res.error !== 'undefined') {

                    }else{
                        storejs.set('userinfo',res)//把用户信息存入session
                        this.apiGet('/getCdAll').then((data) => {// 
                            // store.dispatch('setMenus',data)           
                            // store.dispatch('isLoading','true')
                            storejs.set('menus',data)

                            router.replace('/home')
                        })
                    }
                   
                  })
            }
        },
        mixins: [http]
}
</script>


