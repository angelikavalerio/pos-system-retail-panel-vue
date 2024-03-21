<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <nav class="pagination">
    <div class="pagination-row-number">
      <form class="pagination-form row-number-form">
        <label for="row-number" id="page-number-input-label">Page Number</label>
        <select name="row-number" value="10" id="row-number" aria-labelledby="row-number-input-label">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <p>rows per page</p>
      </form>
    </div>
    <div class="pagination-nav-controls">
      <a>
        <font-awesome-icon icon="fa-solid fa-angles-left" />
      </a>
      <a>
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </a>
      <form class="pagination-form page-number-form">
        <label for="page-number" id="page-number-input-label">Page Number</label>
        <input type="number" name="page-number" value="1" id="page-number" min="1"
          aria-labelledby="page-number-input-label">
        <p>of 11</p>
      </form>
      <a>
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </a>
      <a>
        <font-awesome-icon icon="fa-solid fa-angles-right" />
      </a>

    </div>
    <div class="pagination-results">
      <p>Showing 400 results</p>
    </div>
  </nav>
</template>
<style>
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem;
  font-size: 1.2rem;
  border: 1px solid var(--border-color);
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.pagination .pagination-row-number {
  text-align: left
}

.pagination .pagination-results p {
  text-align: right;
}

.pagination-nav-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  a:hover {
    color: var(--background-hover-button-primary);
    filter: drop-shadow(0 0 2px var(--primary));
  }
}

.pagination-form {
  display: flex;
  justify-content: center;
  align-items: center;
}

.row-number-form {
  justify-content: left;
}

.pagination-form input,
.pagination-form select {
  width: 7rem;
  margin-right: 8px;
}

.pagination-form label {
  position: absolute;
  margin-right: -5rem;
  visibility: hidden;
  z-index: -1;
}

@media only screen and (max-width: 350px) {
  .pagination div {
    width: 100%;

    .row-number-form {
      justify-content: center;
    }
  }

  .pagination>.pagination-results p {
    text-align: center
  }
}
</style>