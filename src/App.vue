<template>
  <side-bar />
  <div class="main">
    <top-bar />
    <router-view />
  </div>
</template>

<style>
@import '@/shared/assets/variables.css';

#app {
  display: flex;
}

.main {
  width: 100%;
  padding-inline: 2rem;
  border-left: 1px solid var(--border-color);
}
</style>
