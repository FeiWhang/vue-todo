const state = {
    currentViewIndex: 0,
    views: [
        { title: "All", link: "#/" },
        { title: "Active", link: "#/active" },
        { title: "Completed", link: "#/completed" },
    ],
};

const getters = {
    views: (state) => state.views,
    currentViewIndex: (state) => state.currentViewIndex,
};

const actions = {
    onViewClicked({ commit }, index) {
        commit("changeView", index);
    },
};

const mutations = {
    changeView(state, index) {
        state.currentViewIndex = index;
    },
};

export default {
    state,
    actions,
    getters,
    mutations,
};
