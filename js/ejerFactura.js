var ejerFactura = new Vue({
    el: "#ejerFactura",
    data:{
        nombre: "",
        estrato: "",
        opcValor: "0",
        cantidad: null,
        prMetro: 0,
        edo: true,
        promEstra1: 0,
        promEstra2: 0,
        promEstra3: 0,
        acuEstra1: 0,
        contEstra1: 0,
        acuEstra2: 0,
        contEstra2: 0,
        acuEstra3: 0,
        contEstra3: 0,
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
            this.promMetros();
            this.regFactura(total);
        },
        regFactura(total){
            this.arrayValores.push({Cliente: this.nombre, Estrato: this.estrato, CFijo: this.cargoFijo, Precio: this.prMetro, Cantidad: this.cantidad, Total: total}) 
        },
        promMetros(){
            if(this.estrato == "Estrato 1"){
                this.acuEstra1 += this.cantidad;
                this.contEstra1 ++;
            }else if (this.estrato == "Estrato 2"){
                this.acuEstra2 += this.cantidad;
                this.contEstra2 ++;
            }if (this.estrato == "Estrato 3"){
                this.acuEstra3 += this.cantidad;
                this.contEstra3 ++;
            }
        },
        isEdoFalse(){
            this.edo = false;
            this.promEstra1 = this.acuEstra1 / this.contEstra1;
        },
        isEdoTrue(){
            this.edo = true;
        }
    },
    computed:{
        totalPagar: function (){
            var resultado = 0;
            for (var i = 0; i < this.arrayValores.length; i++){
                resultado += this.arrayValores[i].Total;
            } 
            return resultado;
        },
        totalCantidad: function (){
            var resultado = 0;
            for (var i = 0; i < this.arrayValores.length; i++){
                resultado += this.arrayValores[i].Cantidad;
            } 
            return resultado;
        }
    }
})