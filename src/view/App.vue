<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AppBar from './components/layout/AppBar.vue'
import Sidebar from './components/layout/Sidebar.vue'
import { AuthService } from '../core/services/AuthService';

const isAuthenticated = ref(false);

onMounted(() => {
  console.log(isAuthenticated.value)
  isAuthenticated.value = AuthService.isAuthenticated();
  console.log(isAuthenticated.value)
})

</script>

<template>
  <v-responsive class="border rounded">
    <v-app v-if="isAuthenticated">
      <AppBar />
      <Sidebar />
      <v-main>
        <v-container fill-height>
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
    <v-app v-else>
      <RouterView />
    </v-app>
  </v-responsive>
</template>
