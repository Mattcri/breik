<template>
  <div>
    <h1 class="text-2xl text-red-400 mb-6">{{ title }}</h1>
    <div class="overflow-auto rounded-t-lg shadow">
      <table class="min-w-full border-collapse">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="text-left uppercase px-4 py-3 text-sm">Id</th>
            <th class="text-left uppercase px-4 py-3 text-sm">Nombre</th>
            <th class="text-left uppercase px-4 py-3 text-sm">Sucursales</th>
            <th class="text-left uppercase px-4 py-3 text-sm">Cargos</th>
            <!-- <th class="uppercase px-4 py-3 text-sm">Horas</th> -->
          </tr>
        </thead>
        <tbody class="bg-gray-100">
          <tr
            v-for="(user, i) in userList"
            :key="i"
            :class="i % 2 == 0 ? 'bg-gray-200' : 'bg-gray-100'"
          >
            <td class="px-4 py-3 border-b-2 border-gray-400">
              {{ user.employeeId }}
            </td>
            <td class="px-4 py-3">{{ user.firstName }} {{ user.lastName }}</td>
            <td class="px-4 py-3"></td>
            <td class="px-4 py-3"></td>
            <!-- <td class="px-4 py-3">hola@gmail.com</td> -->
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <p>{{ orderAsc }}</p> -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'ViewUser',
  data() {
    return {
      title: 'Vista de Usuarios',
    };
  },
  computed: {
    ...mapState(['userList', 'locations']),
    ...mapGetters(['orderAsc']),
  },
  methods: {
    ...mapActions(['updateUsers', 'getLocations']),
  },
  created() {
    this.getLocations();
    this.updateUsers();
  },
  // mounted() {
  // },
};
</script>
