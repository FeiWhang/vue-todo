<template>
    <div class="Header">
        <header class="header">
            <h1>{{ title }}</h1>
            <input
                class="new-todo"
                placeholder="What needs to be done?"
                type="text"
                v-on:keyup.enter="handleTodoSubmit"
            />
        </header>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "Header",
    props: ["title"],
    methods: {
        ...mapActions(["onAddTodoClicked"]),

        handleTodoSubmit(e) {
            this.onAddTodoClicked(e.target.value.trim());
            e.target.value = "";
        },
    },
};
</script>

<style lang="scss" scoped></style>
