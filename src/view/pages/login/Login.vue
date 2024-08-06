<script setup lang="ts">
import { ref } from 'vue'
import { AuthService } from '../../../core/services/AuthService';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const onSubmit = () => {
  console.log(username.value, password.value)
  AuthService.login(username.value, password.value);
}

</script>
<template>
  <h1>Login</h1>
  <div>
    <v-text-field
      name="username"
      label="Username"
      id="username"
      v-model="username"
    ></v-text-field>

    <v-text-field
    v-model="password"
      name="password"
      label="Password"
      id="password" 
      type="password"
    ></v-text-field>

    <v-btn @click="onSubmit">Submit</v-btn>
  </div>
</template>