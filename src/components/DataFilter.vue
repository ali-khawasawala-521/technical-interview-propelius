<template>
  <div class="container">
    <span>Filter: </span>
    <button class="formBtn add" @click="addFilter">Add New</button>
    <form>
      <div v-for="(fields, idx) in filters" :key="idx">
        <select v-model="fields.header" @change="filterData">
          <option :value="header" v-for="header in tableHeader" :key="header">
            {{ header }}
          </option>
        </select>
        <select v-model="fields.parameter" @change="filterData">
          <option
            :value="param.operator"
            v-for="param in parameters"
            :key="param.parameter"
          >
            {{ param.name }}
          </option>
        </select>
        <input type="text" v-model="fields.search" @keyup="filterData" />
        <button class="formBtn remove" @click.prevent="removeFilter(idx)">
          x
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Data Filter",
  data() {
    return {
      filters: [],
      parameters: [
        { name: "Equals", operator: "=" },
        { name: "Includes", operator: "*" },
        { name: "Greater Than", operator: ">" },
        { name: "Less Than", operator: "<" },
      ],
    };
  },
  props: ["tableHeader"],
  methods: {
    addFilter() {
      this.filters.push({ header: "", parameter: "", search: "" });
    },
    removeFilter(index) {
      this.filters.splice(index, 1);
      this.filterData();
    },
    filterData() {
      this.$emit("filterOut", this.filters);
    },
  },
};
</script>

<style>
.container {
  margin: 8px auto;
}
.formBtn {
  color: white;
  min-width: 30px;
  min-height: 30px;
  border: none;
  border-radius: 20px;
  margin: 8px;
  padding: 8px;
  cursor: pointer;
}

.formBtn.add {
  background-color: #27ae60;
}

.formBtn.remove {
  background-color: #c0392b;
}
</style>