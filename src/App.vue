<template>
  <div>
    <DataFilter :tableHeader="tableHeader" @filterOut="filterData"></DataFilter>
    <DataTable :tableData="tableData" :tableHeader="tableHeader"/>
  </div>
</template>

<script>
// Data
import jsonData from "./data/data.json";

// Component
import DataTable from "./components/DataTable.vue";
import DataFilter from "./components/DataFilter.vue";

// Composable
import getHeader from "./composable/getHeader"
import filterTable from "./composable/filterData"

export default {
  name: "App",
  components: {
    DataTable,
    DataFilter,
  },
  data() {
    return {
      filtered: null
    };
  },
  computed: {
    tableData() {
      return this.filtered ? this.filtered : jsonData;
    },
    tableHeader() {
      return getHeader(jsonData[0]);
      }
  },
  methods: {
    filterData(filters) {
      var data = jsonData;

      filters.forEach(filterItem => {
        data = filterTable(data, filterItem)
      })

      data == [] ? null : data
      this.filtered = data
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
