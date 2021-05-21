<template>
  <div>
    <h1 class="text-2xl text-green-500 mb-6">{{ title }}</h1>
    <div class="overflow-auto rounded-t-lg shadow">
      <table class="min-w-full border-collapse">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="text-left uppercase px-4 py-3 text-sm">Turno Nombre</th>
            <th class="text-left uppercase px-4 py-3 text-sm">Hora Entrada</th>
            <th class="text-left uppercase px-4 py-3 text-sm">Hora Salida</th>
            <th class="text-left uppercase px-4 py-3 text-sm">Descanso</th>
            <th class="text-left uppercase px-4 py-3 text-sm">
              Horas trabajadas
            </th>
            <th class="text-left uppercase px-4 py-3 text-sm">Sucursales</th>
          </tr>
        </thead>
        <tbody class="bg-gray-100">
          <tr
            v-for="(turn, i) in turnList"
            :key="i"
            :class="i % 2 == 0 ? 'bg-gray-200' : 'bg-gray-100'"
            class="border-b-2 border-gray-400"
          >
            <td class="px-4 py-3">{{ turn.name }}</td>
            <td class="px-4 py-3">{{ turn.checkIn }}</td>
            <td class="px-4 py-3">{{ turn.checkOut }}</td>
            <td class="px-4 py-3">{{ turn.breakTime }} min</td>
            <td class="px-4 py-3">{{ workHours(turn) }} hrs</td>
            <td class="px-4 py-3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ViewTurns',
  data() {
    return {
      title: 'Plantillas',
    };
  },
  computed: {
    ...mapState(['turnList', 'locations']),
  },
  methods: {
    ...mapActions(['getTurnsList', 'getLocations']),
    workHours: function ({ checkIn, checkOut, breakTime }) {
      checkIn = parseFloat(checkIn);
      checkOut = parseFloat(checkOut);
      breakTime = breakTime / 60;
      let totalHours = checkOut - checkIn;
      return Math.abs(totalHours - breakTime);
    },
    // locationsName: function ({ locationId }) {
    //   this.locations.forEach((position) => {
    //     position.find((id) => {
    //       id.id == locationId;
    //     });
    //   });
    // },
  },
  created() {
    Promise.all([this.getLocations(), this.getTurnsList()]);
  },
};
</script>

<style>
table tbody tr:last-of-type {
  border: none;
}
</style>
