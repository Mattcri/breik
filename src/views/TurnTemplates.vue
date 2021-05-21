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
          <tr>
            <td class="px-4 py-3"></td>
            <td class="px-4 py-3"></td>
            <td class="px-4 py-3"></td>
            <td class="px-4 py-3"></td>
            <td class="px-4 py-3"></td>
            <td class="px-4 py-3"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewTurns',
  data() {
    return {
      title: 'Plantillas',
    };
  },
};
</script>
