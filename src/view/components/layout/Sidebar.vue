<template>
  <v-navigation-drawer fill-height app>

    <v-list density="compact" nav>
      <v-list-item to="/" prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
      <v-list-item to="/empleados" prepend-icon="mdi-account" title="Empleado" value="account"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>