var ejerFactura = new Vue({
    el: "#ejerFactura",
    data:{
        nombre: "",
        estrato: "",
        opcValor: "0",
        cantidad: null,
        prMetro: 0,
        cargoFijo: 0,
        arrayValores: []
    },
    methods:{
        getEstrato(){
            if (this.opcValor == "1") {
                this.prMetro = 250;
                this.estrato = "Estrato 1";
                this.cargoFijo = 2300;
            }else if (this.opcValor == "2"){
                this.prMetro = 350;
                this.estrato = "Estrato 2";
                this.cargoFijo = 3200;
            }else {
                this.prMetro = 460;
                this.estrato = "Estrato 3";
                this.cargoFijo = 3900;
            }
        },
        tPagar(){
            var total = this.cargoFijo - (this.cargoFijo * 0.4) + this.cantidad * this.prMetro;
            this.regFactura(total);
        },
        regFactura(total){
            this.arrayValores.push({Cliente: this.nombre, Estrato: this.estrato, CFijo: this.cargoFijo, Precio: this.prMetro, Cantidad: this.cantidad, Total: total}) 
        }
    }
})