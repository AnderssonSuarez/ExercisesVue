var admision = new Vue({
    el: "#admision",
    data: {
        isBoton: 0,
        arrayNotas: [],
        nPreg: null,
        nRtas: null
    },
    methods: {
        ocultarTabla(){
            this.isBoton = 1;
        },
        agregarItem(){
            this.arrayNotas.push({nPreg: this.nPreg, nRtas: this.nRtas})
        },
        eliminar(data=[], id){
            Swal.fire({
                title: '¿Está seguro de eliminar el registro de ?' + data['nPreg'] + " preguntas y " + data['nRtas'] + " respuestas " ,
                text: "Este proceso NO es reversible!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, eliminar!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.arrayNotas.splice(id, 1);
                    Swal.fire(
                    'Eliminado!',
                    'El registro ha sido eliminado correctamente',
                    'success'
                )
                }
            })
        }
    }
})