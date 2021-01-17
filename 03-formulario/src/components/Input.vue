 <template>
  <div>
          <input
      type="text"
      placeholder="Ingrese nombre"
      class="form-control my-2"
      v-model.trim="tarea.nombre"
      >

      <div class="form-check form-check-inline">
        <input
        type="checkbox"
        id="check-1"
        class="form-check-input"
        v-model="tarea.categoria"
        value="javascript"
        >
        <label
        for="check-1"
        class="form-input-check"
        >javascript</label>
      </div>

      <div class="form-check form-check-inline">
        <input
        type="checkbox"
        id="check-2"
        class="form-check-input"
        v-model="tarea.categoria"
        value="node"

        >
        <label
        for="check-2"
        class="form-input-check"
        >Node</label>
      </div>

      <div class="mt-2">
          <div class="form-check form-check-inline">
              <input
              type="radio"
              id="radio-1"
              value="urgente"
              v-model="tarea.estado"
              class="form-check-input"
              >

              <label for="radio-1" class="form-check-label">Urgente</label>
          </div>

          <div class="form-check form-check-inline">
              <input
              type="radio"
              id="radio-2"
              value="relajo"
              v-model="tarea.estado"
              class="form-check-input"
              >

              <label for="radio-2" class="form-check-label">Relajo</label>
          </div>
      </div>

      <div class="mt-2">
          <input
          type="number"
          class="form-control"
          v-model.number="tarea.numero"
          >
      </div>
      <button
         class="btn btn-dark mt-2 btn-block"
         type="submit"
         :disabled="bloquearBtn"
         >
          Procesar
      </button>
  </div>
 </template>
 
 <script>
 export default {
     props:{
         tarea: Object
     },
       computed:{
    bloquearBtn(){
      return this.tarea.nombre.trim() === "" ? true: false
    }
  }
 }
 </script>
 
 <style>
 
 </style>