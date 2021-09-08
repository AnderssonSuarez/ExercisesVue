var ejercicio1 = new Vue ({

el: "#ejercicio1",

data: {
    valcompra: null,
    valdes: null,
    total: null,
    error: null
},
methods: 
{
    totalp ()
    {
        if (this.valcompra >= 1000000) 
        {
            this.total = this.valcompra - this.valdes;
        }else if (this.valcompra < 1000000 && this.valcompra >= 0)
        {
            this.error = "El valor de la compra no aplica para descuento";
            this.total = this.valcompra;
        }else if (this.valcompra < 0)
        {
            this.error = "Ingresó una cifra negativa, inténtelo nuevamente";
        }
    }
}


}




)