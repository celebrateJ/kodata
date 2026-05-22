import { createStore } from 'vuex';

const store = createStore({
  state: {
    menuList : [],
    subMenuList : []
  },
  getters: {
    getSubMenuList: (state) => state.subMenuList,
    getMenuList: (state) => state.menuList,
  },
  mutations: {
    setSubMenuList(state, subMenu) {
      state.subMenuList = subMenu;
    },
    setMenuList(state, menu) {
      state.menuList = menu;
    },
  },
  actions: {
    updateSubMenuList({ commit }, subMenu) {
      commit('setSubMenuList', subMenu);
    },
    updateMenuList({ commit }, menu) {
      commit('setMenuList', menu);
    },
  },
});

export default store;