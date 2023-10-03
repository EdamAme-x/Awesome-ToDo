<script>
let title = "Awesome";
let todos = [{
    title: "Make this.",
    check: true
}];

function Add() {
    todos = [...todos, {
        title: title,
        check: false
    }]
}

function Del(index) {
    todos = todos.filter((_c, i) => i !== index)
}
</script>

<main>
  <input bind:value={title} />
  <button on:click={Add}>Add</button>
  <div>
    {#each todos as todo, index}
    <div class="todo">
        <h2>{todo.title}</h2> <!-- Todo: line-through -->
        <input type="checkbox" checked={todo.check} class="check"/>
        <button on:click={() => {Del(index)}} class="del">Del</button>
    </div>
    {/each}
  </div>
</main>

<style>
.todo {
    display: flex;
}

.check {
    width: 30px;
    margin-left: 10px;
}

.del {
    height: 50px;
    margin: auto 0 auto 10px;
}
</style>
