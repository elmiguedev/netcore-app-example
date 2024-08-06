<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { EmpleadoService } from '../../../core/services/EmpleadoService';
const empleados = ref([]);
onMounted(() => {
  EmpleadoService.getEmpleados().then(data => {
    console.log(data)  
    empleados.value = data
  });
})

</script>
<template>
  <h1>Empleados</h1>
  <div>
    <ul>
      <li v-for="empleado in empleados">{{empleado.nombre}}</li>
    </ul>
  </div>
</template>