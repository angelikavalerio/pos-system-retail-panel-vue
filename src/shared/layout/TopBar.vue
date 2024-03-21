<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { type Ref, ref, onMounted, onUnmounted } from 'vue'
import { useMediaQuery, usePreferredDark } from '@vueuse/core';

const isProfileMenuShown: Ref<Boolean> = ref(false)
const isConfigMenuShown: Ref<Boolean> = ref(false)
const isDarkMode: Ref<Boolean> = ref(usePreferredDark())
const isMobile = useMediaQuery("(max-width: 800px)")

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.querySelector('body')?.classList.add('dark')
    document.querySelector('body')?.classList.remove('light')
  } else {
    document.querySelector('body')?.classList.remove('dark')
    document.querySelector('body')?.classList.add('light')
  }
}

function closeMenuOnOutsideClick(event: Event) {
  const profileMenuBtn = document.querySelector(".profile-menu-toggle")
  const configMenuBtn = document.querySelector(".config-menu-toggle")

  const el = event.target as HTMLButtonElement

  if (profileMenuBtn && !profileMenuBtn.contains(el)) {
    isProfileMenuShown.value = false
  }

  if (configMenuBtn && !configMenuBtn.contains(el)) {
    isConfigMenuShown.value = false
  }
}

onMounted(() => {
  toggleDarkMode()
  document.addEventListener("click", closeMenuOnOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener("click", closeMenuOnOutsideClick)
})
</script>

<template>
  <header>
    <div class="site-name">
      <h1>POS Vendor Portal</h1>
    </div>
    <div class="controls">
      <button type="button" v-show="isMobile" class="icon-button config-menu-toggle"
        @click="isConfigMenuShown = !isConfigMenuShown">
        <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" size="lg" />
      </button>
      <menu v-show="isConfigMenuShown && isMobile" class="topbar-menu">
        <li><a @click="toggleDarkMode">Toggle {{ isDarkMode ? 'Light' : 'Dark' }} Mode</a></li>
      </menu>
      <div class="controls-btn-group">
        <button type="button" class="icon-button" @click="toggleDarkMode">
          <FontAwesomeIcon :icon="isDarkMode ? faSun : faMoon" size="lg" />
        </button>
      </div>
    </div>
    <div class="profile">
      <img src="@/shared/assets/images/user_icon.jpg" class="user-icon" alt="Logo">
      <div class="profile-details">
        <p><strong>Jane Doe</strong></p>
        <p>Administrator</p>
      </div>
      <button class="icon-button profile-menu-toggle" @click="isProfileMenuShown = !isProfileMenuShown">
        <FontAwesomeIcon :icon="isProfileMenuShown ? faCaretUp : faCaretDown" size="lg" />
      </button>
      <menu v-show="isProfileMenuShown" class="topbar-menu">
        <li><a href="#">View Profile</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </menu>
    </div>
  </header>
</template>

<style lang="css">
header {
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 8rem;

  div.site-name {
    margin-right: auto;

    h1 {
      color: var(--color-heading-primary);
    }
  }

  div:not(.site-name) {
    display: flex;
    align-items: center;
  }

  button.icon-button {
    padding: 5px 8px;
  }

  div.controls {
    position: relative;
  }

  div.profile {
    position: relative;
    gap: 1rem;

    img.user-icon {
      width: 4rem;
      height: 4rem;
      border-radius: 2rem;
    }

    .profile-details {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }


  }
}

menu.topbar-menu {
  position: absolute;
  top: 80%;
  right: 1rem;
  z-index: 999;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  list-style: none;
  min-width: 14rem;
  width: 100%;
  padding: 1rem;
  background-color: var(--background-secondary);

  li {

    &:hover {
      background-color: var(--primary);
    }

    &:hover a {
      color: white;
    }

    a {
      display: block;
      padding-inline: 2rem;
    }
  }
}

@media only screen and (max-width: 800px) {
  header {
    gap: 1rem;

    div.controls {

      menu {
        min-width: 19rem;
      }

      .controls-btn-group {
        display: none;
      }
    }

    div.profile {
      gap: 2px;

      div.profile-details {
        display: none;
      }
    }
  }
}
</style>
