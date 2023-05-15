import Vue from 'vue';
import Vuex from 'vuex';

// 使用插件一次
Vue.use(Vuex);

// 引入小仓库
import home from '@/store/home';
import search from '@/store/search';
// 对外暴露Store类的一个实例
export default new Vuex.Store({
    // 实现Vuex仓库  模块  开发存储数据
    modules: {
        home,
        search,
    }
});

