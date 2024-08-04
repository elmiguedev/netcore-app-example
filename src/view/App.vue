<script setup lang="ts">
import AppBar from './components/layout/AppBar.vue'
import Sidebar from './components/layout/Sidebar.vue'
</script>

<template>
  <v-responsive class="border rounded">
    <v-app>
      <AppBar />
      <Sidebar />
      <v-main>
        <v-container fill-height>
          <RouterView />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>
