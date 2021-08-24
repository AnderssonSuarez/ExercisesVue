var ejercicio3 = new Vue({
    el: "#ejercicio3",
    
    data:{
        opcion: "0",
        pPera: 600,
        pPina: 1800,
        cant: 1,
        total: 0,
        tPagar: 0,
        items: 0,
        isPagar: 0,
        vueltas: 0,
        tEfectivo: 0
    },

    methods: {
        calcularPrecio ()
        {
            if (this.opcion == "0")
            {
                this.total = this.cant * 0;
            }else if (this.opcion == "1"){
                this.total = this.cant * this.pPera;
            }else {
                this.total = this.cant * this.pPina;
            }
            this.tPagar += this.total;
            this.items += 1;
        },
        totalPagar()
        {
            this.isPagar = 1;
        },
        cambio()
        {
            if (this.efectivo < this.tPagar)
            {
                cambio = this.tPagar - this.efectivo;
                alert ("Falta " + cambio + " Pesos para realizar la compra")
            }else {
                cambio = this.efectivo - this.tPagar;
                alert ("Su cambio es: " + cambio + " Pesos")
            }
            this.isPagar = 0;
            this.tPagar = 0;
            this.total = 0;
        }
    }
}

)