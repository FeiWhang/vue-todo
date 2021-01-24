const state = {
    todos: [],
};

const getters = {
    todos: (state) => state.todos,
    numTodos: (state) => state.todos.length,
    completedCount: (state) =>
        state.todos.filter((todo) => todo.completed).length,
};

const actions = {
    onAddTodoClicked({ commit }, label) {
        commit("addTodo", label);
    },
    onDeleteTodoClicked({ commit }, index) {
        commit("deleteTodo", index);
    },
    onCheckTodoClicked({ commit }, index) {
        commit("checkTodo", index);
    },
    onCompleteAllTodosClicked({ commit }) {
        commit("completeAllTodo");
    },
    onClearCompletedTodoClicked({ commit }) {
        commit("clearCompletedTodo");
    },
};

const mutations = {
    addTodo(state, label) {
        state.todos.push({ label: label, completed: false });
    },
    deleteTodo(state, index) {
        state.todos.splice(index, 1);
    },
    checkTodo(state, index) {
        state.todos[index].completed = !state.todos[index].completed;
    },
    completeAllTodo(state) {
        state.todos.forEach((todo) => (todo.completed = true));
    },
    clearCompletedTodo(state) {
        state.todos = state.todos.filter((todo) => !todo.completed);
    },
};

export default {
    state,
    actions,
    getters,
    mutations,
};
