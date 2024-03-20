<template>
  <table>
    <thead>
      <tr>
        <th>Header</th>
        <th>Header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Value</td>
        <td>Value</td>
      </tr>
    </tbody>
  </table>
</template>

<style>
table {
  border-collapse: collapse;
  border-radius: 4px;
  border-style: hidden;
  box-shadow: 0 0 0 1px var(--border-color);

  width: 100%;

}

thead {
  background-color: var(--background-secondary);
}

td,
th {
  padding: 1rem 2rem;
  border: 1px solid var(--border-color);
}
</style>