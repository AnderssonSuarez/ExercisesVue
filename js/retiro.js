var retiro = new Vue({
    el: "#retiro",
    data:{
        saldo: 500000,
        opcValor: 0
    },
    methods: {
        mensaje(){
            Swal.fire(
                'Good job!',
                'You checked your balance!',
                'success'
            )
        },
        validarSaldo(){
            
        }
    }
})