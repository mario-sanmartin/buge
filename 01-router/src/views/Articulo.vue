<template>
    <div>
        <h1>Art</h1>
        <titulo texto="Parametro" />
        <h2>Parametro: {{$route.params.id}}</h2>
    </div>
</template>

<script>
import titulo from '../components/Titulo';
export default {
components:{
    titulo
}
}
</script>

<style>

</style>