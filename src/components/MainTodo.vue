<template>
    <div class="MainTodo">
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" />
            <label for="toggle-all" v-on:click="handleAllTodosComplete"
                >Mark all as complete</label
            >
            <ul class="todo-list">
                <!-- These are here just to show the structure of the list items -->
                <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
                <li
                    :class="{ completed: todo.completed }"
                    v-for="(todo, index) in todos"
                    :key="index"
                >
                    <div
                        class="view"
                        v-if="
                            currentViewIndex == 0
                                ? true
                                : currentViewIndex == 1
                                ? !todo.completed
                                : todo.completed
                        "
                    >
                        <input
                            class="toggle"
                            type="checkbox"
                            :checked="todo.completed"
                            v-on:click="handleTodoCheck(index)"
                        />
                        <label>{{ todo.label }}</label>
                        <button
                            class="destroy"
                            v-on:click="handleTodoDelete(index)"
                        ></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template" />
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "MainTodo",
    computed: {
        ...mapGetters(["todos", "currentViewIndex"]),
    },
    methods: {
        ...mapActions([
            "onDeleteTodoClicked",
            "onCheckTodoClicked",
            "onCompleteAllTodosClicked",
        ]),

        handleTodoDelete(index) {
            this.onDeleteTodoClicked(index);
        },
        handleTodoCheck(index) {
            this.onCheckTodoClicked(index);
        },
        handleAllTodosComplete() {
            this.onCompleteAllTodosClicked();
        },
    },
};
</script>
