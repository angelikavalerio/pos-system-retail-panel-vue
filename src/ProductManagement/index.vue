<template>
  <main>
    <h2 class="page-title">Product Management</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div class="mt-md">
      <button-component />
      <form>
        <label for="search">Search</label>
        <input type="search" id="search" placeholder="Search...">
        <button-component class="single-input-button" label="Search" />
      </form>
    </div>
    <data-table class="mt-sm" />
  </main>

</template>

<style>
main {
  margin-top: 2rem;

  h2.page-title {
    font-size: 3rem;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  button.single-input-button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  form label {
    position: absolute;
    z-index: -1;
    visibility: hidden;
  }


  form input {
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