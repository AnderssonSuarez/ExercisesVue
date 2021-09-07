var ejerCompra = new Vue({
    el: "#ejerCompra",
    data: {
        prTv: 720000,
        prLava: 430000,
        opcion: 1,
        total: 0,
        cant: null,
        nomProd: "",
        prProd: 0,
        arrayCompras: []
    },
    methods: {  
        pagar(){
            if (this.opcion == "1") {
                this.total = this.cant * this.prTv;
                this.nomProd = "Televisor";
                this.prProd = this.prTv;
            }else {
                this.total = this.cant * this.prLava;
                this.nomProd = "Lavadora";
                this.prProd = this.prLava;
            }
            this.agregarDetalle();
        },
        agregarDetalle(){
            this.arrayCompras.push({Nombre: this.nomProd, Cantidad: this.cant, Precio: this.prProd, Total: this.total});
        }
    }
})