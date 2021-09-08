var app = new Vue({
    el: "#app",
    data: 
    {
      num1: null,
      num2: null,
      rta: null
    }, 
    methods: 
    {
      sumar ()
      {
        this.rta = this.num1 + this.num2;
      },
      restar ()
      {
        this.rta = this.num1 - this.num2;
      }, 
      multiplicar ()
      {
        this.rta = this.num1 * this.num2;
      }, 
      dividir ()
      {
        if (this.num2 == 0)
        {
          this.rta = "No se puede dividir por cero";
        }else
        {
          this.rta = this.num1 / this.num2;
        }
      },
    }

  });