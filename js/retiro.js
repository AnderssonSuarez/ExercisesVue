var retiro = new Vue({
    el: "#retiro",
    data:{
        saldo: 500000,
        opcValor: 0,
        valor: 0,
        arrayValores: []
    },
    methods: {
        getValor(){
            if (this. opcValor == "1") {
                this.valor = 10000;
            }else if(this.opcValor == "2"){
                this.valor = 20000;
            }else if (this.opcValor == "3"){
                this.valor = 50000;
            }else if (this.opcValor == "4"){
                this.valor = 100000;
            }
        },
        validarSaldo(){
            this.getValor();
            if (this.valor > this.saldo) {
                Swal.fire(
                    'Error al retirar!',
                    'No tiene saldo suficiente!',
                    'error'
                )
                return true; 
            }else{
                return false;
            }
        }, 
        procesar(){
            var rta = this.validarSaldo();
            if (rta == false) {
                //console.log("No se puede retirar")
                this.retirarDinero();
                this.agregarDetalle();
            }else{
                //console.log("Se puede retirar");
            }
        },
        retirarDinero(){
            this.saldo -= this.valor;
            Swal.fire(
                "Operación exitosa!",
                "Su dinero fue retirado correctamente, el nuevo saldo es: " + this.saldo + " pesos",
                'success'
            )
        },
        agregarDetalle(){
            this.arrayValores.push(this.valor)
        }
    },
    computed: {

    }
})