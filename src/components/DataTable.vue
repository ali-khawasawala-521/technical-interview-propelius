<template>
  <div v-if="tableData">
    <table>
      <tr>
        <th v-for="header in Object.keys(tableData[0])" :key="header">
          {{ header }}
        </th>
      </tr>
      <tr v-for="row in tableData" :key="row.id">
        <td v-for="data in row" :key="data">
          {{ data }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Data Table",
  props: ["tableData"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

table,
th,
td {
  border: 1px solid black;
}

th,td {
  padding: 4px;
  text-transform: capitalize;
}

th {
  background-color: #006064;
  color: white;
}

tr:nth-child(even) {
  background-color: #b2ebf2;
}

tr:nth-child(odd) {
  background-color: #80deea;
}
</style>
