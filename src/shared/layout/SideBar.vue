<script lang="ts" setup>
import { type Ref, ref, watchEffect, onMounted } from 'vue'
import { RouterLink, type RouteLocationRaw, useRoute } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useMediaQuery } from '@vueuse/core';

const isNavBarCollapsed: Ref<Boolean> = ref(true)
const isMobile = useMediaQuery("(max-width: 800px)")
const route = useRoute()
const currentTab: Ref<RouteLocationRaw> = ref("/fallback")

onMounted(() => {
  setTimeout(() => {
    currentTab.value = route.path
  }, 100)
})

interface NavigationItem {
  name: String,
  path: RouteLocationRaw,
  icon: String
}

const navigationItems: NavigationItem[] = [
  {
    name: "Dashboard",
    path: "/",
    icon: "fa-solid fa-house"
  },
  {
    name: "Product Management",
    path: "/product-management",
    icon: "fa-solid fa-cart-shopping"
  },
  {
    name: "Staff Management",
    path: "/staff-management",
    icon: "fa-regular fa-circle-user"
  },
  {
    name: "Location Management",
    path: "/location-management",
    icon: "fa-regular fa-compass"
  }

]

</script>
<template>
  <nav :class="[{ collapsed: isNavBarCollapsed || isMobile }, 'sidebar']">
    <div class="nav-toggle">
      <p>Vendor Name</p>
      <button type="button" class="nav-toggle-btn icon-button" @click="isNavBarCollapsed = !isNavBarCollapsed">
        <font-awesome-icon icon="fa-solid fa-bars-staggered" size="xl" />
      </button>
    </div>
    <ul>
      <li v-for="(   nav, index   ) in    navigationItems   " :key="index"
        :class="{ selected: currentTab === nav.path }" @click="currentTab = nav.path">
        <router-link :to="nav.path">
          <font-awesome-icon :icon="nav.icon" class="nav-icon" />
          <span>{{ nav.name }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style>
nav.sidebar {
  width: 30.5rem;
  height: 100svh;
  padding-block: 1rem;
  background: var(--background-secondary);
  overflow: hidden;
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
    width: 30rem;
    padding: 0;
    list-style: none;
    overflow: hidden;

    li.selected {
      background-color: var(--primary);

      a {
        color: var(--color-nav-button-hover);
      }
    }


    li {
      transition: all .3s;

      &:hover {
        background-color: var(--primary);
      }

      &:hover a {
        color: var(--color-nav-button-hover);
      }

      a {
        display: block;
        padding: 1rem 2rem;
        color: var(--color-nav-button);
      }

      a .nav-icon {
        margin-right: 1rem;
      }
    }
  }
}

nav.collapsed {
  width: 8.5rem;

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

      a {
        justify-content: center;
      }


      a span {
        display: none;
      }

      a .nav-icon {
        margin-right: 0;
        font-size: 1.5rem;
      }
    }
  }
}

@media only screen and (max-width: 800px) {
  nav.collapsed {
    position: fixed;
    bottom: 0;
    height: 6rem;
    width: calc(100% - 4rem);
    margin: 2rem;
    box-shadow: var(--box-shadow-color) 0px 2px 8px 0px;
    border-radius: 8px;

    ul {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      li.selected {
        background-color: var(--background-secondary);

        a {
          color: var(--primary);

          .nav-icon {
            filter: drop-shadow(3px 3px 8px var(--primary));
          }
        }
      }

      li a .nav-icon {
        filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.337));
      }
    }

    .nav-toggle {
      display: none;
    }
  }
}
</style>