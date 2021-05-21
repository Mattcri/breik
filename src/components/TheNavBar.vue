<template>
  <div
    id="nav"
    class="sticky flex items-center p-3 space-x-3 bg-blue-500 w-full h-16"
  >
    <nav>
      <ul class="flex items-center">
        <li class="mx-2" v-for="(link, i) in links" :key="i">
          <router-link :to="{ name: link.route }">{{ link.name }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      { name: 'Inicio', route: 'Home' },
      { name: 'Usuarios', route: 'Users' },
      { name: 'Sucursales', route: 'Locations' },
      { name: 'Turnos', route: 'Turns' },
      { name: 'Calendario', route: 'Calendar' },
    ],
  }),
};
</script>
