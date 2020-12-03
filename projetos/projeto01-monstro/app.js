new Vue({
    el: '#jogo',
    data: {
        estaRodando: false,
        vidaJogador: 100,
        vidaMonstro: 100,
        logs: []
    },
    computed: {
        jogoAcabou() {
            return this.vidaJogador <= 0 || this.vidaMonstro <= 0
        }
    },
    methods: {
        iniciarJogo() {
            this.vidaJogador = 100,
                this.vidaMonstro = 100,
                this.estaRodando = true,
                this.logs = []
        },
        infligirDano(especial) {
            const danoJogador = especial == true ? this.calcularAleat(11, 15) : this.calcularAleat(5, 10)
            const danoMonstro = this.calcularAleat(7, 12)
            this.vidaMonstro = Math.max(this.vidaMonstro - danoJogador, 0)
            this.registrarLog(`Você infligiu ${danoJogador} de dano`, 'player')
            if (this.vidaMonstro > 0) {
                this.vidaJogador = Math.max(this.vidaJogador - danoMonstro, 0)
                this.registrarLog(`O monstro infligiu ${danoMonstro} de dano`, 'monster')
            }
            console.log(this.logs.texto)
            return this.vidaJogador, this.vidaMonstro
        },
        calcularAleat(min, max) {
            const valor = Math.random() * (max - min) + min
            return Math.round(valor)
        },
        curar() {
            const cura = this.calcularAleat(13, 15)
            this.vidaJogador = Math.min(this.vidaJogador + cura, 100)
            this.registrarLog(`Você recebeu ${cura} de cura`, 'player')
        },
        turnoDeCura() {
            this.curar()
            const danoMonstro = this.calcularAleat(7, 12)
            this.vidaJogador = Math.max(this.vidaJogador - danoMonstro, 0)
            this.registrarLog(`O monstro infligiu ${danoMonstro} de dano`, 'monster')
        },
        registrarLog(texto, cls) {
            this.logs.unshift({ texto, cls })
        }
    },
    watch: {
        jogoAcabou(valor) {
            if (valor) this.estaRodando = false
        }
    }
})