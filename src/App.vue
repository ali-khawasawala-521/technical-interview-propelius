<template>
  <div>
    <DataFilter :tableHeader="tableHeader" @filterOut="filterData"></DataFilter>
    <DataTable :tableData="tableData" />
  </div>
</template>

<script>
import jsonData from "./data/data.json";
import DataTable from "./components/DataTable.vue";
import DataFilter from "./components/DataFilter.vue";

export default {
  name: "App",
  components: {
    DataTable,
    DataFilter,
  },
  data() {
    return {
      filtered: null,
      tableJson: jsonData,
    };
  },
  computed: {
    tableData() {
      if (this.filtered) {
        return this.filtered;
      } else {
        return this.tableJson;
      }
    },
    tableHeader() {
      if (this.tableData) {
        return Object.keys(this.tableData[0]);
      }
    },
  },
  methods: {
    filterData(filters) {
      var newData = null;
      var data = this.tableJson;

      if (filters.length > 0) {
        filters.forEach((item) => {
          if (item.search) {
            if (item.parameter == "*") {
              newData = data.filter((row) => {
                if (row[item.header].includes(item.search)) {
                  return row;
                }
              });
            } else if (item.parameter == "=") {
              newData = data.filter((row) => {
                if (row[item.header] == item.search) {
                  return row;
                }
              });
            } else if (item.parameter == ">") {
              newData = data.filter((row) => {
                if (!isNaN(row[item.header]) && !isNaN(item.search)) {
                  if (parseInt(row[item.header]) > parseInt(item.search)) {
                    return row;
                  }
                } else if (
                  Date.parse(row[item.header]) != NaN &&
                  Date.parse(item.search) != NaN &&
                  Date.parse(row[item.header]) > Date.parse(item.search)
                ) {
                  return row;
                }
              });
            } else if (item.parameter == "<") {
              newData = data.filter((row) => {
                if (!isNaN(row[item.header]) && !isNaN(item.search)) {
                  if (parseInt(row[item.header]) < parseInt(item.search)) {
                    return row;
                  }
                } else if (
                  Date.parse(row[item.header]) != NaN &&
                  Date.parse(item.search) != NaN &&
                  Date.parse(row[item.header]) < Date.parse(item.search)
                ) {
                  return row;
                }
              });
            }

            data = newData;
          }
        });
      } else {
        newData = null;
      }

      this.filtered = newData;
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
