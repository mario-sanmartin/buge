<template>
  <div>
  <h1>Blog</h1>
  <titulo texto="Sauroncito"/>
  <!-- <button @click="consumirApa">Consumir PastaBase</button> -->
  <ul v-for="articulo in arrayBlog" :key="articulo.id">
    <router-link id="articuno" :to="`/blog/${articulo.id}`">
    <li>{{articulo.title}}</li>
    </router-link>
  </ul>
  </div>
</template>

<script>
import titulo from '../components/Titulo'
export default {
    components:{
        titulo
    },
    data(){
      return{
        arrayBlog:[]
      }
    },
    methods:{
      async consumirApa(){
          try {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const array = await data.json()
            this.arrayBlog = array;
          } catch (error) {
            console.log(error);
          }
      }
    },
       created(){
        this.consumirApa();
    },
}
</script>

<style scoped>
button{
  color: black;
  background: red;
  border-radius: 80px;
}

button:hover{
  background: blueviolet;
}

li{
color: #080707;
}

li:hover{
  color: red;
}

</style>