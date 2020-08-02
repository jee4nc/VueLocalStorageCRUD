const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Practice VueJS with LocalStorage',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function () {
            console.log('You clicked', this.nuevaTarea)
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = "";
        }
    }
})