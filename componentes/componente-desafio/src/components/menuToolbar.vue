<template>
  <v-navigation-drawer app>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title"> Menu </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <MenuItems>
      <v-list dense class="pt-0">
        <v-list-item v-for="item in itensMenu" :key="item.titulo">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.titulo }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </MenuItems>
  </v-navigation-drawer>
</template>

<script>
import MenuItems from "./menuItems.vue";

export default {
  components: {
    MenuItems,
  },
  data() {
    return {
      itensMenu: [
        { titulo: "Início", icon: "mdi-view-dashboard" },
        { titulo: "Sobre", icon: "mdi-forum" },
      ],
    };
  },
};
</script>

<style>

</style>