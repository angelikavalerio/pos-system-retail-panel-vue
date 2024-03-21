<script lang="ts" setup>
import type { Product } from '@/ProductManagement/types';
import type { DataTableColumn } from '../types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { type Ref, ref, onMounted, onUnmounted } from 'vue'

defineProps({
  data: {
    type: Array as () => Product[],
    default: []
  },
  columns: {
    type: Array as () => DataTableColumn[],
    default: []
  }
})

const isHideColumnDropdownShown: Ref<Boolean> = ref(false)

function hideDropdownOnOutsideClick(event: Event) {
  const hideColumnToggle = document.querySelector(".hide-column-btn")
  const hideColumnForm = document.querySelector(".form-hide-column")

  const el = event.target as HTMLButtonElement

  if ((hideColumnToggle && !hideColumnToggle.contains(el)) && (hideColumnForm && !hideColumnForm.contains(el))) {
    isHideColumnDropdownShown.value = false
  }
}

function toggleHideColumnDropdown() {
  isHideColumnDropdownShown.value = !isHideColumnDropdownShown.value
}

onMounted(() => {
  document.addEventListener("click", hideDropdownOnOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener("click", hideDropdownOnOutsideClick)
})

</script>

<template>
  <div class="filter mt-md">
    <button-component class="hide-column-btn" style="padding: 0;" label="Hide Column" :plain="true"
      @onClick="toggleHideColumnDropdown">
      <template #icon>
        <font-awesome-icon icon="fa-solid fa-table-columns" />
      </template>
    </button-component>
    <form class="form-hide-column" v-if="isHideColumnDropdownShown">
      <div v-for="(col, index) in columns" :key="`${col}-${index}-hide`">
        <input type="checkbox" :name="col.name" :id="col.name" />
        <label class="column-hide-checkbox-label" :for="col.name">{{ col.headerTitle }}</label>
      </div>
    </form>
  </div>
  <div class="table-wrapper mt-xs">
    <table>
      <thead>
        <tr>
          <th v-for="(col, index) in columns" :key="`${col}-${index}`">
            {{ col.headerTitle }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data" :key="`${row}-${index}`">
          <td v-for="(col, index) in columns" :key="`${col}-${index}`">
            {{ col.name === "productPrice" ? '&#8369;' : undefined }}
            {{ row[col.name as keyof typeof row] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<style>
.filter {
  display: inline-block;
  position: relative;
  min-width: 15rem;

}

.form-hide-column {
  position: absolute;
  top: 3.5rem;
  padding: 1rem 2rem;
  background-color: var(--background-secondary);
  border-radius: 4px;
}

.form-hide-column div {
  display: flex;
}

.form-hide-column input,
.form-hide-column label {
  cursor: pointer;
}

.column-hide-checkbox-label {
  margin-left: 8px;
  font-size: 1.2rem;
}

.table-wrapper {
  border-radius: 4px;
  border: 1px solid var(--border-color);
  overflow-x: auto;
}

.table-wrapper::-webkit-scrollbar {
  background: var(--background-primary);
  height: 5px;
}

.table-wrapper::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 2rem;
}

table {
  border-collapse: collapse;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  text-align: left;
  font-size: 1.3rem;
  width: 100%;
}

thead {
  background-color: var(--background-secondary);
}

tr:hover {
  background-color: var(--background-secondary);
}

td,
th {
  padding: 1rem 2rem;
  border: 1px solid var(--border-color);
}
</style>