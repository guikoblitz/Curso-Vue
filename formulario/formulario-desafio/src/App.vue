<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <div class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
        <NomeCompleto v-model="nomeCompleto" />
        <Rotulo nome="E-mail">
          <input type="text" v-model.trim="email" placeholder="Digite seu e-mail" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input type="password" v-model.trim="senha" placeholder="Digite sua senha"/>
        </Rotulo>
        <Rotulo nome="Armazenar Dados">
          <span class="checking"
            ><input type="radio" value="Sim" v-model="armazenar" />Sim</span
          >
          <span><input type="radio" value="Não" v-model="armazenar" />Não</span>
        </Rotulo>

        <hr />

        <button @click.prevent="enviado = !enviado">Enviar</button>
      </div>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="Nome">
          <span>{{ nomeCompleto.nome }}</span>
        </Rotulo>
        <Rotulo nome="Sobrenome">
          <span>{{ nomeCompleto.sobrenome }}</span>
        </Rotulo>
        <Rotulo nome="E-mail">
          <span>{{ email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ senha }}</span>
        </Rotulo>
        <Rotulo nome="Armazenar Dados">
          <span>{{ armazenar }}</span>
        </Rotulo>
        <button @click.prevent="enviado = !enviado">Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import NomeCompleto from "./components/NomeCompleto.vue";

export default {
  name: "app",
  components: { Rotulo, NomeCompleto },
  data() {
    return {
      nomeCompleto: {
        nome: "",
        sobrenome: "",
      },
      email: "",
      senha: "",
      armazenar: true,
      enviado: false,
    };
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

.painel button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.checking {
  margin-right: 40px;
}
</style>
