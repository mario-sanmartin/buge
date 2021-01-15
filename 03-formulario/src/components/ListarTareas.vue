<template>
  <table class="table">
    <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Categorias</th>
        <th scope="col">estado</th>
        <th scope="col">Numero</th>
        <th scope="col">Acciones</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in tareas" :key="item.id">
            <th>{{item.id}}</th>
            <td>{{item.nombre}}</td>
            <td>
                <span v-for="(cat,index) in item.categoria" :key="index">
                    {{
                        item.categoria.length === index + 1 ? cat : cat +', '
                        
                    }}
                </span>
            </td>
            <td>{{item.estado}}</td>
            <td>{{item.numero}}</td>
            <td>Acciones</td>
        </tr>
  </tbody>
</table>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState(['tareas'])
    }


}
</script>