<script setup>
import { ref } from "vue";
import Todo from "./components/Todo.vue";

const title = ref("Awesome");

const todos = ref([
  {
    title: "Make this.",
    check: true,
  },
]);

function add() {
  todos.value.push({
    title,
    check: false,
  });
}

function toggle(index) {
  todos.value[index].check = !todos.value[index].check;
}
</script>

<template>
  <div>
    <input v-bind:value="title" />
    <button v-on:click="add()">Add</button>
  </div>
  <div>
    <div v-for="(todo, index) in todos" class="todo">
      <h2 :style="'text-decoration: ' + (todo.check ? 'line-through' : 'none')">
        {{ todo.title }}
      </h2>
      <input class="check" type="checkbox" :checked="todo.check" @change="toggle(index)" />
      <button class="del" @click="todos.splice(index, 1)">Del</button>
    </div>
  </div>
</template>

<style scoped>
.todo {
  display: flex;
}

.check {
  width: 30px;
  margin-left: 10px;
}

.del {
  height: 50px;
  margin: auto 0;
  margin-left: 10px;
}
</style>
