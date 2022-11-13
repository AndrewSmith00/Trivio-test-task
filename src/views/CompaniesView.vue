<template>
  <div class="content-wrapper">
    <h2>Компании</h2>

    <div class="navigation">
      <SelectSort :value="sort" @input="v => sort = v"></SelectSort>
      <SearchInput :value="search" @input="v => search = v"></SearchInput>
    </div>

    <div v-for="company in filteredCompanies" v-bind:key="company">
      <Company :company="company"></Company>
    </div>
    <div class="adding">
      <button class="adding__button" @click="showAdd=true">Добавить +</button>
      <Add v-if="showAdd" type="addCompany" @close="showAdd=false"></Add>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Company from '../components/CompanyBlock.vue'
import SelectSort from '../components/SelectSort.vue'
import SearchInput from '../components/SearchInput.vue'
import Add from '../components/Modals/ModalAdd.vue'

export default defineComponent({
  name: "CompaniesView",
  components: { Company, SelectSort, SearchInput, Add },
  data() {
    return {
      sort: "alphabetDownscaling",
      search: "",
      showAdd: false,
    };
  },
  computed: {
    sortedCompanies() {
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
          return [...this.$store.state.companies.companiesList].sort((a, b) =>
            sortStrings(a.name, b.name, "down")
          );
        case "alphabetUpscaling":
          return [...this.$store.state.companies.companiesList].sort((a, b) =>
            sortStrings(a.name, b.name, "up")
          );
        case "dateDownscaling":
          return [...this.$store.state.companies.companiesList].sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          );
        case "dateUpscaling":
          return [...this.$store.state.companies.companiesList].sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          );
        default:
          return [];
      }
    },

    filteredCompanies(): any {
      return this.sortedCompanies.filter((company) =>
        (`${company.name}` + `${company.date}`)
          .toUpperCase()
          .includes(this.search.toUpperCase())
      );
    },
  },
});
</script>

<style lang="scss">
@mixin input-background {
  background-color: rgb(242, 246, 253);
  border: none;
  border-radius: 8px;
}

@mixin navigation-font {
  padding: 0 10px 0 10px;
  font-size: 16px;
}

.navigation {
  width: inherit;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navigation__sort {
  @include navigation-font;

  select {
    @include navigation-font;
    @include input-background;
    color: #515280;
    padding: 7px 0px 7px 0px;
    transition: 0.4s;
    cursor: pointer;
  }

  option {
    @include navigation-font;
    background-color: rgb(242, 246, 253);
  }

  select:hover {
    background-color: rgb(218, 216, 231);
  }
}

.navigation__search {
  input {
    @include navigation-font;
    @include input-background;
    width: 80px;
    padding: 7px 20px 7px 0px;
    text-align: right;
    transition: 0.4s;
    cursor: text;
  }

  input:hover {
    background-color: rgb(218, 216, 231);
  }

  input::placeholder {
    @include navigation-font;
    color: #515280;
  }
}

@media screen and (max-width: 465px) {
  .title {
    display: none;
  }
}
</style>
