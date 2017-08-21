<template>
    <ul :class="simpleWrapClasses" :style="styles" v-if="simple">
        <li
            :title="t('i.page.prev')"
            :class="prevClasses"
            @click="prev">
            <a><i class="ivu-icon ivu-icon-ios-arrow-left"></i></a>
        </li>
        <div :class="simplePagerClasses" :title="currentPage + '/' + allPages">
            <input
                type="text"
                :value="currentPage"
                @keydown="keyDown"
                @keyup="keyUp"
                @change="keyUp">
            <span>/</span>
            {{ allPages }}
        </div>
        <li
            :title="t('i.page.next')"
            :class="nextClasses"
            @click="next">
            <a><i class="ivu-icon ivu-icon-ios-arrow-right"></i></a>
        </li>
    </ul>
    <ul :class="wrapClasses" :style="styles" v-else>
        <span :class="[prefixCls + '-total']" v-if="showTotal">
            <slot>{{ t('i.page.total') }} {{ total }} <template v-if="total <= 1">{{ t('i.page.item') }}</template><template v-else>{{ t('i.page.items') }}</template></slot>
        </span>
        <li
            title="上一页"
            :class="prevClasses"
            @click="prev">
            <a><i class="ivu-icon ivu-icon-ios-arrow-left"></i></a>
        </li>
        <li title="1" :class="firstPageClasses" @click="changePage(1)"><a>1</a></li>
        <li title="向前 5 页" v-if="currentPage - 3 > 1 && allPages>7" :class="[prefixCls + '-item-jump-prev']" @click="fastPrev"><a><i class="ivu-icon ivu-icon-ios-arrow-left"></i></a></li>
        <!--当总页数小于7 SOF -->
        <li :title="2" v-if="allPages < 8 && allPages > 2" :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==2)?(prefixCls + '-item-active'):''
        ]" @click="changePage(2)"><a>{{ 2 }}</a></li>

         <li :title="3" v-if="allPages < 8 && allPages>3" :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==3)?(prefixCls + '-item-active'):''
        ]" @click="changePage(3)"><a>{{ 3 }}</a></li>

         <li :title="4" v-if="allPages < 8 && allPages>4" :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==4)?(prefixCls + '-item-active'):''
        ]" @click="changePage(4)"><a>{{ 4 }}</a></li>

         <li :title="5" v-if="allPages < 8 && allPages>5" :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==5)?(prefixCls + '-item-active'):''
        ]" @click="changePage(5)"><a>{{ 5 }}</a></li>

        <li :title="6" v-if="allPages < 8 && allPages>6" :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==6)?(prefixCls + '-item-active'):''
        ]" @click="changePage(6)"><a>{{ 6 }}</a></li>

        <li :title="7" v-if="allPages < 8 && allPages>7" :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==7)?(prefixCls + '-item-active'):''
        ]" @click="changePage(7)"><a>{{ 7 }}</a></li>
        <!--当总页数小于7 EOF -->


        <!--当前页小于5 SOF -->
        <li :title="2" v-if="currentPage < 5 && allPages>7" :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==2)?(prefixCls + '-item-active'):''
        ]" @click="changePage(2)"><a>{{ 2 }}</a></li>

        <li :title="3" v-if="currentPage < 5 && allPages>7" :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==3)?(prefixCls + '-item-active'):''
        ]" @click="changePage(3)"><a>{{ 3 }}</a></li>

        <li :title="4" v-if="currentPage < 5 && allPages>7" :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==4)?(prefixCls + '-item-active'):''
        ]" @click="changePage(4)"><a>{{ 4 }}</a></li>

        <li :title="5" v-if="currentPage < 5 && allPages>7" :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==5)?(prefixCls + '-item-active'):''
        ]" @click="changePage(5)"><a>{{ 5 }}</a></li>

        <li :title="6" v-if="currentPage < 5 && allPages>7" :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==6)?(prefixCls + '-item-active'):''
        ]" @click="changePage(6)"><a>{{ 6 }}</a></li>
        <!--当前页小于5 EOF -->

        <!--当前页大于5小于n-5 SOF -->
        <li :title="currentPage-1" v-if="4 < currentPage && currentPage+3< allPages && allPages>7" :class="[prefixCls + '-item'
        ]" @click="changePage(currentPage-1)"><a>{{ currentPage-1 }}</a></li>

        <li :title="currentPage" v-if="4 < currentPage && currentPage+3< allPages && allPages>7" :class="[prefixCls + '-item',
        (currentPage != 1 && currentPage != allPages )?(prefixCls + '-item-active'):''
        ]" @click="changePage(currentPage)"><a>{{ currentPage }}</a></li>

        <li :title="currentPage+1" v-if="4 < currentPage && currentPage+3< allPages && allPages>7" :class="[prefixCls + '-item'
        ]" @click="changePage(currentPage+1)"><a>{{ currentPage+1 }}</a></li>   

        <!--当前页大于5小于n-5 EOF -->

        <!--最后5页 SOF -->
        <li :title="allPages-4" v-if="currentPage + 4 > allPages && allPages>7  " :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==(allPages-4))?(prefixCls + '-item-active'):''
        ]" @click="changePage(allPages-4)"><a>{{ allPages-4 }}</a></li>

        <li :title="allPages-3" v-if="currentPage + 4 > allPages && allPages>7 " :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==(allPages-3))?(prefixCls + '-item-active'):''
        ]" @click="changePage(allPages-3)"><a>{{ allPages-3 }}</a></li>

        <li :title="allPages-2" v-if="currentPage + 4 > allPages && allPages>7 " :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==(allPages-2))?(prefixCls + '-item-active'):''
        ]" @click="changePage(allPages-2)"><a>{{ allPages-2 }}</a></li>

        <li :title="allPages-1" v-if="currentPage + 4 > allPages && allPages>7" :class="[prefixCls + '-item',
            (currentPage != 1 && currentPage != allPages && currentPage==(allPages-1))?(prefixCls + '-item-active'):''
        ]" @click="changePage(allPages-1)"><a>{{ allPages-1 }}</a></li>
        <!--最后5页 EOF -->

        <li title="向后 5 页" v-if="currentPage + 3 < allPages && allPages>7" :class="[prefixCls + '-item-jump-next']" @click="fastNext"><a><i class="ivu-icon ivu-icon-ios-arrow-right"></i></a></li>

        <li :title="allPages" v-if="allPages > 1" :class="lastPageClasses" @click="changePage(allPages)"><a>{{ allPages }}</a></li>
        <li
            title="下一页"
            :class="nextClasses"
            @click="next">
            <a><i class="ivu-icon ivu-icon-ios-arrow-right"></i></a>
        </li>

        <div v-if="showSizer || showElevator" :class="optsClasses">
        <div v-if="showSizer" :class="sizerClasses">
            <Select v-model="currentPageSize" :size="size" :placement="placement" @on-change="changeSize">
                <i-option v-for="item in pageSizeOpts" :key="item" :value="item" style="text-align:center;">{{ item }} {{ t('i.page.page') }}</i-option>
            </Select>
        </div>
        <div v-if="showElevator" :class="ElevatorClasses">
            跳至<input type="text" 
                    class="ivu-input-wrapper ivu-input-type ivu-input"
                    :value="currentPage" @keyup.enter="enterPage">页
        </div>
    </div>
      <!--   <Options
            :show-sizer="showSizer"
            :page-size="currentPageSize"
            :page-size-opts="pageSizeOpts"
            :placement="placement"
            :show-elevator="showElevator"
            :_current.once="currentPage"
            :current="currentPage"
            :all-pages="allPages"
            :is-small="isSmall"
            @on-size="onSize"
            @on-page="onPage"> -->
        </Options>
    </ul>
</template>
<script>

    const prefixCls = 'ivu-page';
     function isValueNumber (value) {
            return (/^[1-9][0-9]*$/).test(value + '');
        }
    export default {
        name: 'Page',
        props: {
            current: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                default: 0
            },
            pageSize: {
                type: Number,
                default: 10
            },
            pageSizeOpts: {
                type: Array,
                default () {
                    return [10, 20, 30, 40];
                }
            },
            placement: {
                validator (value) {
                    return value;
                },
                default: 'bottom'
            },
            size: {
                validator (value) {
                    return value;
                }
            },
            simple: {
                type: Boolean,
                default: false
            },
            showTotal: {
                type: Boolean,
                default: false
            },
            showElevator: {
                type: Boolean,
                default: false
            },
            showSizer: {
                type: Boolean,
                default: false
            },
            className: {
                type: String
            },
            styles: {
                type: Object
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                currentPage: this.current,
                currentPageSize: this.pageSize
            };
        },
        watch: {
            current (val) {
                this.currentPage = val;
            },
            pageSize (val) {
                this.currentPageSize = val;
            }
        },
        computed: {
            sizerClasses () {
                return [
                    `${prefixCls}-options-sizer`
                ];
            },
            ElevatorClasses () {
                return [
                    `${prefixCls}-options-elevator`
                ];
            },
            optsClasses () {
                return [
                    `${prefixCls}-options`
                ];
            },
            isSmall () {
                return !!this.size;
            },
            allPages () {
                const allPage = Math.ceil(this.total / this.currentPageSize);
                return (allPage === 0) ? 1 : allPage;
            },
            simpleWrapClasses () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-simple`,
                    {
                        [`${this.className}`]: !!this.className
                    }
                ];
            },
            simplePagerClasses () {
                return `${prefixCls}-simple-pager`;
            },
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${this.className}`]: !!this.className,
                        'mini': !!this.size
                    }
                ];
            },
            prevClasses () {
                return [
                    `${prefixCls}-prev`,
                    {
                        [`${prefixCls}-disabled`]: this.currentPage === 1
                    }
                ];
            },
            nextClasses () {
                return [
                    `${prefixCls}-next`,
                    {
                        [`${prefixCls}-disabled`]: this.currentPage === this.allPages
                    }
                ];
            },
            firstPageClasses () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.currentPage === 1
                    }
                ];
            },
            lastPageClasses () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.currentPage === this.allPages
                    }
                ];
            }
        },
        methods: {
            t(...args){
                return args;
            },
            enterPage(event){
                let val = event.target.value.trim();
                let page = 0;

                if (isValueNumber(val)) {
                    val = Number(val);
                    if (val != this.current) {
                        const allPages = this.allPages;
                        if (val > allPages) {
                            page = allPages;
                        } else {
                            page = val;
                        }
                    }
                } else {
                    page = 1;
                }
                this.changePage(page)
                if (page) {
                    event.target.value = page;
                }
            },
            changePage (page) {
                if (this.currentPage != page) {
                    this.currentPage = page;
                }
                this.$emit('on-change', page);
            },
            prev () {
                const current = this.currentPage;
                if (current <= 1) {
                    return false;
                }
                this.changePage(current - 1);
            },
            next () {
                const current = this.currentPage;
                if (current >= this.allPages) {
                    return false;
                }
                this.changePage(current + 1);
            },
            fastPrev () {
                const page = this.currentPage - 5;
                if (page > 0) {
                    this.changePage(page);
                } else {
                    this.changePage(1);
                }
            },
            fastNext () {
                const page = this.currentPage + 5;
                if (page > this.allPages) {
                    this.changePage(this.allPages);
                } else {
                    this.changePage(page);
                }
            },
            onSize (pageSize) {
                this.currentPageSize = pageSize;
                this.$emit('on-page-size-change', pageSize);
                this.changePage(1);
            },
            onPage (page) {
                this.changePage(page);
            },
            keyDown (e) {
                const key = e.keyCode;
                const condition = (key >= 48 && key <= 57) || key == 8 || key == 37 || key == 39;

                if (!condition) {
                    e.preventDefault();
                }
            },
            keyUp (e) {
                const key = e.keyCode;
                const val = parseInt(e.target.value);

                if (key === 38) {
                    this.prev();
                } else if (key === 40) {
                    this.next();
                } else if (key == 13) {
                    let page = 1;

                    if (val > this.allPages) {
                        page = this.allPages;
                    } else if (val <= 0) {
                        page = 1;
                    } else {
                        page = val;
                    }
                    e.target.value = page;
                    this.changePage(page);
                }
            }
        }
    };
</script>
