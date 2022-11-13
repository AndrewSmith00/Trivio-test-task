<template>
  <div class="content-wrapper">
    <h2>Пользователи</h2>
    <div class="navigation">
      <SelectSort :value="sort" @input="v => sort = v"></SelectSort>
      <SearchInput :value="search" @input="v => search = v"></SearchInput>
    </div>
    <div v-for="user in filteredUsers" v-bind:key="user">
      <User :user="user"></User>
    </div>
    <div class="adding">
      <button class="adding__button" @click="showAdd=true">Добавить +</button>
      <Add v-if="showAdd" type="addUser" @close="showAdd=false"></Add>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import User from '../components/UserBlock.vue'
import SelectSort from '../components/SelectSort.vue'
import SearchInput from '../components/SearchInput.vue'
import Add from '../components/Modals/ModalAdd.vue'

export default defineComponent({
  name: "UsersView",
  components: {User, SelectSort, SearchInput, Add},
  data() {
    return {
      sort: "alphabetDownscaling",
      search: "",
      showAdd: false,
    };
  },
  computed: {
    sortedUsers() {
      function sortStrings(a: string, b: string, order: string) {
        if (order == "down") {
          if (a.toUpperCase() < b.toUpperCase()) return -1;
          if (a.toUpperCase() > b.toUpperCase()) return 1;

          return 0;
        } else {
          if (a.toUpperCase() < b.toUpperCase()) return 1;
          if (a.toUpperCase() > b.toUpperCase()) return -1;

          return 0;
        }
      }

      switch (this.sort) {
        case "alphabetDownscaling":
          return [...this.$store.state.users.usersList].sort((a, b) =>
            sortStrings(a.name, b.name, "down")
          );
        case "alphabetUpscaling":
          return [...this.$store.state.users.usersList].sort((a, b) =>
            sortStrings(a.name, b.name, "up")
          );
        case "dateDownscaling":
          return [...this.$store.state.users.usersList].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        case "dateUpscaling":
          return [...this.$store.state.users.usersList].sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );
        default:
          return [];
      }
    },

    filteredUsers():any {
        return this.sortedUsers.filter(user => (`${user.name}` + `${user.date}`).toUpperCase().includes(this.search.toUpperCase()))
    }
  },
});
</script>
