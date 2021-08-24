var ejercicio3 = new Vue({
    el: "#ejercicio3",
    
    data:{
        opcion: "0",
        pPera: 600,
        pPina: 1800,
        cant: 1,
        total: 0,
        tPagar: 0,
        items: 0
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
            
        }
    }
}

)