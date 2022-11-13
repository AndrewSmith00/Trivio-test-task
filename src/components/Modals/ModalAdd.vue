<template>
  <transition name="fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header>Добавление элемента</header>
        <main>
          <form id="form" action="submit" @submit.prevent="addElement">
            <div class="input-wrapper">
              <label for="name">Введите имя 
                <span v-if="type=='addUser'">пользователя</span>
                <span v-else>компании</span>:
            </label>
              <input
                name="name"
                type="text"
                v-model="name"
                placeholder="Имя"
                onfocus="this.placeholder=''"
                onblur="this.placeholder='Имя'"
              />
            </div>

            <div class="input-wrapper">
              <label for="date">Введите дату <span v-if="type=='addUser'">рождения</span>
                <span v-else>создания</span>:</label>
              <input name="date" type="date" v-model="date" />
            </div>

            <div class="input-wrapper" v-if="type === 'addUser'">
              <label for="company">Введите компанию:<br /></label>
              <select v-model="company">
                <option
                  v-for="company in companies"
                  v-bind:key="company"
                  :value="company.name"
                >
                  {{ company.name }}
                </option>
              </select>
            </div>
          </form>
        </main>
        <footer class="modal__footer">
          <div class="input-wrapper">
            <button
              class="cancel__button"
              type="button"
              @click="$emit('close')"
            >
              Отмена
            </button>
            <button class="submit__button" type="submit" form="form">
              Добавить
            </button>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalAdd",
  props: ["type"],

  data() {
    return {
      name: "",
      date: null,
      company: "",
    };
  },

  computed: {
    companies() {
      return this.$store.state.companies.companiesList;
    },
  },

  methods: {
    addElement() {
      if (
        this.type === "addUser" &&
        this.name !== "" &&
        this.date !== null &&
        this.company !== ""
      ) {
        let newId = this.$store.getters.getNewUserId;

        let newUser = {
          name: this.name,
          date: this.date,
          company: this.company,
          id: newId,
        };
        this.$store.commit("pushUser", newUser);
      } else if (
        this.type === "addCompany" &&
        this.name !== "" &&
        this.date !== null
      ) {
        let newId = this.$store.getters.getNewCompanyId;

        let newCompany = {
          name: this.name,
          date: this.date,
          id: newId,
        };
        this.$store.commit("pushCompany", newCompany);
      }
      this.$emit("close");
    },
  },
});
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 70%;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;

  header {
    margin: 20px auto;
    padding: 0 30px;
  }

  label {
    display: inline-block;
  }

  select,
  input {
    min-width: 45%;
    border: 1px solid #ebebeb;
    border-radius: 8px;
    padding: 7px 7px 7px 0px;
    transition: 0.4s;
    cursor: pointer;
    text-align: right;
  }
}

.input-wrapper {
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1 150px;
}
</style>
