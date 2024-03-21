<script lang="ts" setup>
import { type Product } from './types';
import { type DataTableColumn } from '@/shared/types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const mockProductDataValues: Array<Product> = [
  {
    productID: 1234,
    productName: "Burger",
    productGroup: "Burgers",
    productPrice: 110,
    stockNumber: 11
  },
  {
    productID: 4567,
    productName: "Fries",
    productGroup: "Sides",
    productPrice: 65,
    stockNumber: 54
  },
  {
    productID: 8910,
    productName: "Milktea",
    productGroup: "Drinks",
    productPrice: 140.55,
    stockNumber: 95
  },
  {
    productID: 1112,
    productName: "Samgyup",
    productGroup: "Meals",
    productPrice: 299,
    stockNumber: 15
  },
]

const mockProductDataColumns: Array<DataTableColumn> = [
  {
    name: "productID",
    headerTitle: "ID",
  },
  {
    name: "productImage",
    headerTitle: "Image",
    type: "image"
  },
  {
    name: "productName",
    headerTitle: "Product Name"
  },
  {
    name: "productGroup",
    headerTitle: "Product Group"
  },
  {
    name: "productPrice",
    headerTitle: "Price"
  },
  {
    name: "stockNumber",
    headerTitle: "Stock"
  }
]
</script>

<template>
  <main>
    <h2 class="page-title">Product Management</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div class="product-operations mt-md">
      <button-component>
        <template #icon>
          <font-awesome-icon icon="fa-solid fa-plus" />
        </template>
      </button-component>
      <form class="search" role="search">
        <label for="search">Search</label>
        <input type="search" id="search" placeholder="Search...">
        <button-component class="single-input-button" label="Search" />
      </form>
    </div>
    <data-table class="mt-sm" :data="mockProductDataValues" :columns="mockProductDataColumns" />
    <pagination />
  </main>

</template>

<style>
main {
  margin-top: 2rem;
  padding-bottom: 10rem;

  h2.page-title {
    font-size: 3rem;
  }

  div.product-operations {
    display: flex;
    justify-content: space-between;
  }

  button.single-input-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  form.search label {
    position: absolute;
    z-index: -1;
    visibility: hidden;
  }


  form input,
  form select {
    color: var(--color-text);
    background-color: var(--background-secondary);
    border: 1px solid var(--border-color);
    outline: none;
    padding: 7px 12px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
}
</style>