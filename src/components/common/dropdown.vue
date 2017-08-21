<template>

    <div on-click="close" >
    
    <label for class="search-label">{{labelName}}</label>
        <Input v-model="inputValue" class="z-index"  @on-focus="showTable(1)" @on-change="showTable(1)" ></Input>
        <div class="shell-Window z-index" >
            <Table 
                class="drop-table"
                v-show="isTableShow" 
                width="300"  
                border 
                highlight-row
                @on-row-click="selectTable" 
                :data="tableData" 
                :columns="columns" >
            </Table>
            <BcPage  
                v-show="isTableShow" 
                @on-change="showTable" 
                :current='page' 
                :total="total" 
                show-elevator 
                simple
                style="float:right; margin: 15px 30px 0 0;">
            </BcPage>
            
        </div>
        <div :class="{mask:isTableShow}" @click="maskClose"></div>
    </div>
</template>
<script type="text/javascript">
import http from '../../assets/js/http'
import BcPage from '../common/page.vue'   //引入分页组件
export default {
    props: ['dropdata'],//父组件固定参数,包含[inputName,labelName,columns,total]
    data() {
        return {
            page:0,
            total:0,//总条数,分页使用
            inputName:this.dropdata.inputName,//搜索使用
            inputValue:'',//input的值
            labelName:this.dropdata.labelName,//label名字
            columns: this.dropdata.columns,//从父组件传来的列数据
            tableData: [],//table数据
            isTableShow: false,//控制table显示
        }
    },
    methods: {
        showTable(page=1){ 
            this.page = page;
            this.isTableShow=true
            this.tableData = [];//初始化table数据
            let search={}
            search['page'] = page;
            search[this.inputName]=this.inputValue
            this.apiGet(this.dropdata.url, {
                params: search
            }).then((el) => {
                this.total = el.total;//设置总条数,分页需要
                let _data=this.dropdata.data
                    _data=el[_data]
                let _columns=this.dropdata.columns
                let _key=[]
                let _title=[]

                for(let i=0,l=_columns.length;i<l;i++){
                    _key[i]=_columns[i].key
                    _title[i]=_columns[i].title
                     
                }
                  for (let i = 0, l = _data.length; i < l; i++) {
                    let _obj = {};    //定义临时json变量,给table赋值使用
                    for (let ii = 0, ll = _key.length; ii < ll; ii++) {
                        _obj[_key[ii]]=_data[i][_key[ii]]
                    }
                        this.tableData.push(_obj)
                   }
            })
            
            
        },
        selectTable(currentRow,index){
            this.inputValue=currentRow[this.inputName]
            this.isTableShow=false
        },
        maskClose(){
            this.isTableShow = false;
        }
    },
    mounted () {
        document.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)) this.isTableShow = false;
        })
    },
    watch:{
        inputValue(curVal,oldVal){
            this.dropdata.inputValue=curVal
        }
    },
    components: {
        'BcPage': BcPage,    // 引入分页组件，注册分页组件
    },
    mixins: [http]

}
</script>
<style >
/*.ivu-table-row{
    height:30px;
}*/
.drop-table .ivu-table-tbody .ivu-table-row td{
    height:30px;
}
.mask{
    height: 100%;
    width: 100%;
    position:absolute; 
    left: 0;
    right: 0;
    /*top:200px;*/
    background:rgba(0,0,0,0);
    z-index:100; 

 } 
.z-index{
    z-index:101; 
}    
.shell-Window {
    background-color: #fff;
    position:absolute;

}

</style>