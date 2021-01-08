<template>
    <div>
        <h1>Art</h1>
        <titulo texto="Parametro" />
        <!-- <h2>Parametro: {{$route.params.id}}</h2> -->
        <h2><i>{{articulo.title}}</i></h2>
        <h3>{{articulo.body}}</h3>
    </div>
</template>

<script>
import titulo from '../components/Titulo';
export default {
components:{
    titulo
    },
    data() {
        return {
            articulo: {}
        }
    },
    methods:{
        async consumirArticulo(){
            try {
                const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                const objeto = await data.json()
                this.articulo = objeto;
            } catch (error) {
                console.log(error);
            }
        }

    },
            created(){
            this.consumirArticulo()
        }


}
</script>

<style>

</style>