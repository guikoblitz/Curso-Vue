<template>
  <div class="row">
    <div class="columns">
      <div class="column">
        <transition-group :name="tipoAnimacao" appear>
          <div
            class="field is-grouped"
            v-for="(tarefa, index) in tarefas"
            :key="tarefa.description"
          >
            <p class="control">
              <a
                class="button is-rounded is-small check-button"
                :class="{ 'is-success': tarefa.checked }"
                @click="check(index)"
              >
                <span class="icon is-small"> </span>
              </a>
            </p>

            <p
              class="control is-expanded"
              :class="{
                'animate__animated animate__shakeX animate__faster': tarefa.checked,
                checked: tarefa.checked,
              }"
            >
              {{ tarefa.description }}
            </p>

            <p class="control">
              <a class="button is-danger is-small" @click="remover(index)">
                <span class="icon is-small">
                  <i class="fa fa-trash"></i>
                </span>
              </a>
            </p>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tarefas: { type: Array },
  },
  name: "todo-list",
  data() {
    return {
      tipoAnimacao: "fade",
    };
  },
  methods: {
    check(index) {
      this.$emit("check", index);
    },
    remover(index) {
      this.tipoAnimacao = "fade";
      this.$emit("remover", index);
      setInterval(() => {
        this.tipoAnimacao = "slide";
      }, 500);
    },
  },
  created() {
    setInterval(() => {
      this.tipoAnimacao = "slide";
    }, 500);
  },
};
</script>

<style scoped>
.button {
  border-radius: 50%;
}

.checked {
  text-decoration: line-through;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  transition: opacity 2s;
  animation: slide-in 2s ease;
}

.slide-leave-active {
  position: absolute;
  width: 100%;
  transition: opacity 2s;
  animation: slide-out 2s ease;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}

.slide-move {
  transition: transform 1s;
}
</style>