<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-left">{{ hoje }}</p>
      <div class="has-text-right">
        <p class="card-header-title" v-if="tarefas.length == 1">
          {{ tarefas.length }} tarefa
        </p>
        <p class="card-header-title" v-else>{{ tarefas.length }} tarefas</p>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <novo-todo @novaTarefa="adicionarTarefa"></novo-todo>
      </div>
      <div class="content">
        <todo-list
          :tarefas="tarefas"
          @check="checkTarefa"
          @remover="removerTarefa"
        ></todo-list>
      </div>
    </div>
  </div>
</template>

<script>
import NovoTodo from "./NovoTodo";
import TodoList from "./TodoList";

export default {
  components: {
    NovoTodo,
    TodoList,
  },
  name: "todo-card",
  data() {
    return {
      dias: [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
      ],
      meses: [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      tarefas: [],
    };
  },
  methods: {
    adicionarTarefa(tarefa) {
      const tarefaRepetida = (t) => t.description === tarefa;
      const tarefaÉNova = this.tarefas.filter(tarefaRepetida).length == 0;
      if (tarefaÉNova) {
        this.tarefas.push({ description: tarefa, checked: false });
      }
    },
    checkTarefa(index) {
      this.tarefas[index]["checked"] = !this.tarefas[index]["checked"];
    },
    removerTarefa(index) {
      this.tarefas.splice(index, 1);
    },
  },
  watch: {
    tarefas: {
      deep: true,
      handler() {
        localStorage.setItem("tarefas", JSON.stringify(this.tarefas));
      },
    },
  },
  computed: {
    hoje: function () {
      let novaData = new Date();
      return `${this.dias[novaData.getDay()]}, ${novaData.getDate()} de ${
        this.meses[novaData.getMonth()]
      }`;
    },
  },
  created() {
    const json = localStorage.getItem("tarefas");
    const array = JSON.parse(json);
    this.tarefas = Array.isArray(array) ? array : [];
  },
};
</script>

<style>
.card {
  border-radius: 10px;
}

.card-header-title {
  color: #636368;
}
</style>