<template>
  <div>
    <h1 class="text-2xl text-purple-600 mb-6">{{ title }}</h1>
    <div class="overflow-auto rounded-t-lg shadow">
      <table class="min-w-full border-collapse">
        <thead class="bg-gray-800 text-white">
          <tr>
            <th class="text-left uppercase px-4 py-3 text-sm">
              Nombre Sucursal
            </th>
            <th class="text-left uppercase px-4 py-3 text-sm">Horarios</th>
            <th class="text-left uppercase px-4 py-3 text-sm">Dirección</th>
            <th class="text-left uppercase px-4 py-3 text-sm">n°usuarios</th>
          </tr>
        </thead>
        <tbody class="bg-gray-100">
          <tr
            v-for="(branch, i) in branchOfficesList"
            :key="i"
            :class="i % 2 == 0 ? 'bg-gray-200' : 'bg-gray-100'"
            class="border-b-2 border-gray-400"
          >
            <td class="px-4 py-3">{{ branch.name }}</td>
            <td class="px-4 py-3">
              <b>Entrada:</b> {{ branch.startTime }} - <b>Salida:</b>
              {{ branch.endTime }}
            </td>
            <td class="px-4 py-3">
              {{ branch.address1 }}, {{ branch.address2 }}
              {{ branch.commune }}
            </td>
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
  name: 'ViewBranchOffices',
  data() {
    return {
      title: 'Sucursales',
    };
  },
  computed: {
    ...mapState(['branchOfficesList']),
  },
  methods: {
    ...mapActions(['getBranchOffices', 'getLocations', 'getPositions']),
  },
  created() {
    Promise.all([
      this.getLocations(),
      this.getPositions(),
      this.getBranchOffices(),
    ]);
  },
};
</script>

<style>
table tbody tr:last-of-type {
  border: none;
}
</style>
