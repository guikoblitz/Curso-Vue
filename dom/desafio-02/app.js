new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Estou te alertando')
        },
        armazenarValor(e) {
            this.valor = e.target.value
        }
    }
})