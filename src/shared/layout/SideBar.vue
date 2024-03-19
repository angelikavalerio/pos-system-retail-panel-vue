<script lang="ts" setup>
import { type Ref, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useMediaQuery } from '@vueuse/core';

const isNavBarCollapsed: Ref<Boolean> = ref(true)
const isMobile = useMediaQuery("(max-width: 720px)")

</script>
<template>
  <nav :class="{ collapsed: isNavBarCollapsed || isMobile }">
    <div class="nav-toggle">
      <p>Vendor Name</p>
      <button type="button" class="nav-toggle-btn icon-button" @click="isNavBarCollapsed = !isNavBarCollapsed">
        <font-awesome-icon icon="fa-solid fa-bars-staggered" size="xl" />
      </button>
    </div>
    <ul>
      <li>
        <a>
          <font-awesome-icon icon="fa-regular fa-circle-user" class="nav-icon" />
          <span>Staff Management</span>
        </a>
      </li>
      <li>
        <a>
          <font-awesome-icon icon="fa-regular fa-compass" class="nav-icon" />
          <span>Location Management</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style>
@import '@/shared/assets/variables.css';

nav {
  height: 100svh;
  width: 25rem;
  padding-block: 1rem;
  background: var(--background-secondary);
  transition: all .1s;


  .nav-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 2rem;
    height: 7rem;

    p {
      text-transform: uppercase;
    }

    .nav-toggle-btn {
      padding: 1rem;
      margin-right: -1rem;
    }
  }

  ul {
    padding: 0;
    list-style: none;
    overflow: hidden;
    width: 25rem;


    li {
      padding-inline: 2rem;
      padding-block: 1rem;
      transition: all .3s;

      &:hover {
        background-color: var(--color-primary);

      }

      &:hover a {
        color: white;
      }

      a .nav-icon {
        margin-right: 1rem;
      }
    }
  }
}

nav.collapsed {
  width: 8rem;

  .nav-toggle {
    p {
      width: 0;
      visibility: hidden;
    }

    .nav-toggle-btn {
      margin-right: 0;
    }
  }

  ul {
    width: 8rem;

    li {
      text-align: center;

      a span {
        display: none;
      }

      a .nav-icon {
        margin-right: 0;
        font-size: 2rem;
        color: var(--color-button-icon);
      }
    }
  }
}

@media only screen and (max-width: 720px) {
  nav.collapsed {
    position: absolute;
    bottom: 0;
    height: 6rem;
    width: calc(100% - 4rem);
    margin: 2rem;
    box-shadow: var(--box-shadow-color) 0px 0px 15px 0px;
    border-radius: 8px;

    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        padding-inline: 1.5rem;
      }
    }

    .nav-toggle {
      display: none;
    }
  }
}
</style>