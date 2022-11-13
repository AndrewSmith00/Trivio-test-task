<template>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" v-model="isOpen" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <transition name="fade" appear>
      <ul v-if="isOpen" class="menu__box">
        <li>
          <router-link to="/" class="menu__item">Рабочий стол</router-link>
        </li>
        <li>
          <router-link to="companies" class="menu__item">Компании</router-link>
        </li>
        <li>
          <router-link to="users" class="menu__item">Пользователи</router-link>
        </li>

        <li>
          <div class="tools">
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
        </li>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HamburgerMenu",

  data() {
    return {
      isOpen: false,
    };
  },
});
</script>

<style lang="scss">
#menu__toggle {
  opacity: 0;
}

.hamburger-menu {
  display: none;
}
.menu__btn {
  display: flex;
  align-items: center;
  position: fixed;
  top: 13px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}

.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
  transition: 0.4s;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}

.menu__box {
  position: fixed;
  left: 0;
  top: 52px;
  width: 100vw;
  height: fit-content;
  margin: 0;
  padding: 20px 0;
  list-style: none;
  text-align: center;
  background-color: #fff;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.menu__item {
  display: block;
  padding: 12px 24px;
  color: #333;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.4s;
}
.menu__item:hover {
  background-color: #cfd8dc;
}

.menu__item.tools:hover {
  background-color: #fff;
}

#menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}

.fade-enter-active,
.fade-leave-actice {
  transition: all 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  transition: all 0.4s ease-out;
  opacity: 0;
}

@media screen and (max-width: 633px) {
  .hamburger-menu {
    display: block;
  }
}
</style>
