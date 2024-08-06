<script setup lang="ts">
import { useRouter } from 'vue-router';
import { AuthService } from '../../../core/services/AuthService';

const router = useRouter();

const onLogout = () => {
  AuthService.logout();
  // router.push({ path: '/login' });
}

</script>
<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Application Bar</v-app-bar-title>
    <v-btn round color="primary" dark @click="onLogout">logout</v-btn>
  </v-app-bar>
</template>