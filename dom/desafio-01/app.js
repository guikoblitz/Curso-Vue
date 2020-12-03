new Vue({
    el: '#desafio',
    data: {
        nome: 'Guilherme',
        idade: 25,
        link: 'https://media.playstation.com/is/image/SCEA/horizon-zero-dawn-impact-poster-ps4-us-07feb17?$native_nt$'
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3
        },
        aleatorio(){
            const aleat = Math.random() * 10
            return aleat
        }
    }
})