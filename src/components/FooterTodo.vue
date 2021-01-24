<template>
    <div class="FooterTodo">
        <footer class="footer">
            <!-- This should be `0 items left` by default -->
            <span class="todo-count"
                ><strong>{{ numTodos }}</strong> item left</span
            >
            <!-- Remove this if you don't implement routing -->
            <ul class="filters">
                <li>
                    <a
                        :class="{ selected: index == currentViewIndex }"
                        :href="view.link"
                        v-for="(view, index) in views"
                        :key="index"
                        v-on:click="handleViewClicked(index)"
                        >{{ view.title }}</a
                    >
                </li>
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            <button
                class="clear-completed"
                v-on:click="handleTodoClearCompleted"
                v-if="completedCount > 0"
            >
                Clear completed
            </button>
        </footer>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "FooterTodo",
    computed: {
        ...mapGetters([
            "numTodos",
            "views",
            "currentViewIndex",
            "completedCount",
        ]),
    },
    methods: {
        ...mapActions(["onClearCompletedTodoClicked", "onViewClicked"]),

        handleTodoClearCompleted() {
            this.onClearCompletedTodoClicked();
        },

        handleViewClicked(index) {
            this.onViewClicked(index);
        },
    },
};
</script>

<style lang="scss" scoped></style>
