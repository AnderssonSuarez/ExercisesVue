var ejercicio2 = new Vue({
    el: "#ejercicio2",

    data: {
        numcopias: null,
        valparcial: null,
        valortot: null,
        error: null
    },

    methods: {
        total(){
            if (this.numcopias >= 1 && this.numcopias <= 50)
            {
                this.valparcial = 50;
                this.valortot = this.numcopias * this.valparcial;
            }else if (this.numcopias > 50)
            {
                this.valparcial = 30;
                this.valortot = this.numcopias * this.valparcial;
            }else
            {
                this.error = "Ingresó una cantidad negativa o cero, inténtelo de nuevo"
            }
        }
    }
}
)