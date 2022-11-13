<template>
  <div class="header">
    <div class="wrapper">
      <nav>
        <router-link to="/"
          ><img src="../assets/logo.png" alt="" />
        </router-link>
        <div class="links">
          <router-link to="/">Рабочий стол</router-link>
          <router-link to="/companies">Компании</router-link>
          <router-link to="/users">Пользователи</router-link>
        </div>
      </nav>

      <div class=" tools header__tools">
        <button class="tool">
          <img src="../assets/tools/loupe.svg" alt="" />
        </button>
        <button class="tool">
          <img src="../assets/tools/alert.svg" alt="" />
        </button>
        <button class="tool">
          <img src="../assets/tools/heart.svg" alt="" />
        </button>
        <button class="tool">
          <img src="../assets/tools/headphones.svg" alt="" />
        </button>
        <button class="tool">
          <img src="../assets/tools/items.svg" alt="" />
        </button>
        <button class="tool">
          <img src="../assets/tools/aa.svg" alt="" />
        </button>
      </div>
      <Menu></Menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Menu from "./HamburgerMenu.vue";

export default defineComponent({
  name: "HeaderPanel",
  components: { Menu },
});
</script>

<style lang="scss">
.header {
  width: 100%;
  padding: 10px 0;
  margin: 0 0 4em 0;
  border-bottom: 3px solid transparent;
  box-shadow: 0 0 2px 0 #b4bbc4;
  background-color: #fff;

  .wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
}

nav {
  display: flex;
  align-items: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    color: #aeb7c2;
    margin: 0 35px 0 0;
    cursor: pointer;

    &.router-link-exact-active {
      color: #362192;
    }
  }
}

.tools {
  align-items: center;
}

.tool {
    background-color: #fff;
    border: none;
    padding: 7px 7px;
    border-radius: 7px;
    transition: .4s ;
    cursor: pointer;
  }

  .tool:hover {
    background-color: #ebebeb;
  }

@media screen and (max-width: 633px) {
  .links {
    display: none;
  }
}

@media screen and (max-width: 633px) {
  .header__tools {
    display: none;
  }
}
</style>
