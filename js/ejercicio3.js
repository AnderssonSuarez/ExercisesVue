var ejercicio3 = new Vue({
    el: "#ejercicio3",
    
    data:{
        cpiñas: null, 
        cperas: null, 
        valcompra: null,
        desc: null, 
        totalpag: null,
        error: null
    },

    methods: {
        totp ()
        {
            this.valcompra = (this.cperas * 600) + (this.cpiñas * 1800);
            if (this.valcompra > 10000)
            {
                this.desc = this.valcompra * 0.1;
                this.totalpag = this.valcompra + this.desc;
            } else if (this.valcompra >= 0 && this.valcompra <= 10000)
            {
                this.totalpag = this.valcompra;
                this.desc = 0;
            }else if (this.valcompra < 0)
            {
                this.valcompra = 0;
                this.error = "Ha introducido una cantidad negativa, inténtelo nuevamente"
            }
        }
    }
}

)