import Vue from 'vue'
export default new Vue({
    methods: {
        mostraUsuario(usuario) {
            this.$emit('envieiUsuario', usuario)
        },
        quandoMostrar(callback) {
            this.$on('envieiUsuario', callback)
        }
    }
})