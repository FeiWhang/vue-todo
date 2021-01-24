<template>
    <div>
        <section class="todoapp">
            <Header :title="title" />
            <!-- This section should be hidden by default and shown when there are todos -->
            <MainTodo />
            <!-- This footer should hidden by default and shown when there are todos -->
            <FooterTodo />
        </section>
        <footer class="info">
            <p>Double-click to edit a todo</p>
            <!-- Remove the below line ↓ -->
            <p>
                Template by <a href="http://sindresorhus.com">Sindre Sorhus</a>
            </p>
            <!-- Change this out with your name and url ↓ -->
            <p>Created by <a href="http://todomvc.com">you</a></p>
            <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
    </div>
</template>

<script>
import Header from "./Header";
import MainTodo from "./MainTodo";
import FooterTodo from "./FooterTodo";

export default {
    name: "todo",
    components: { Header, MainTodo, FooterTodo },
    data() {
        return {
            title: "Hello!",
        };
    },
};
</script>
