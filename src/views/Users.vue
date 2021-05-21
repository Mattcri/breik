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
            <th class="uppercase px-4 py-3 text-sm">Horas/semana</th>
          </tr>
        </thead>
        <tbody class="bg-gray-100">
          <tr
            v-for="(user, i) in userList"
            :key="i"
            :class="i % 2 == 0 ? 'bg-gray-200' : 'bg-gray-100'"
            class="border-b-2 border-gray-400"
          >
            <td class="px-4 py-3">
              {{ user.employeeId }}
            </td>
            <td class="px-4 py-3">{{ user.firstName }} {{ user.lastName }}</td>
            <td class="px-4 py-3">{{ user.location.name }}</td>
            <td class="px-4 py-3">{{ user.position.name }}</td>
            <td class="px-4 py-3 text-center">
              {{ calcHours(user.location) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ViewUser',
  data() {
    return {
      title: 'Vista de Usuarios',
    };
  },
  computed: {
    ...mapState(['userList', 'locations', 'positions']),
    // calcHours() {
    //   return this.userList.map((hours) => {
    //     let startTime = parseFloat(hours.location.startTime);
    //     let endTime = parseFloat(hours.location.endTime);
    //     if (endTime === 0) {
    //       endTime = 24;
    //     }
    //     return Math.abs(startTime - endTime);
    //   });
    // },
    // ...mapGetters(['orderAsc']),
  },
  methods: {
    ...mapActions(['updateUsers', 'getLocations', 'getPositions']),
    calcHours: function ({ startTime, endTime }) {
      startTime = parseFloat(startTime);
      endTime = parseFloat(endTime);
      if (endTime === 0) {
        endTime = 24;
      }
      return Math.abs((startTime - endTime) * 5);
    },
  },
  created() {
    Promise.all([this.getLocations(), this.getPositions(), this.updateUsers()]);
    // this.updateUsers().then(this.getLocations()).then(this.getPositions());
  },
};
</script>

<style>
table tbody tr:last-of-type {
  border: none;
}
</style>
