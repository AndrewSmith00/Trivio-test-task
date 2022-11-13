<template>
  <transition name="fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header>Изменение элемента</header>
        <main>
          <form id="form" action="submit" @submit.prevent="changeElement">
            <div class="input-wrapper">
              <label for="name">Новое имя <span v-if="type=='editUser'">пользователя</span>
                <span v-else>компании</span>:</label>
              <input name="name" type="text" v-model="name" />
            </div>

            <div class="input-wrapper">
              <label for="date">Новая дата <span v-if="type=='editUser'">рождения</span>
                <span v-else>создания</span>:</label>
              <input name="date" type="date" v-model="date" />
            </div>

            <div class="input-wrapper" v-if="type === 'editUser'">
              <label for="company">Новая компания:<br /></label>
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
          <button class="cancel__button" @click="$emit('close')">Отмена</button>
          <button class="submit__button" type="submit" form="form" >Изменить</button>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalEdit",
  props: ["type", "value"],
  data() {
    return {
      name: this.value.name,
      date: this.value.date,
      company: this.value.company,
    };
  },
  methods: {
    changeElement() {
      if (
        this.type === "editUser" &&
        this.name !== "" &&
        this.date !== null &&
        this.company !== ""
      ) {
        let changedUser = {
          name: this.name,
          date: this.date,
          company: this.company,
          id: this.value.id,
        };
        this.$store.commit("changeUser", changedUser);
      } else if (
        this.type === "editCompany" &&
        this.name !== "" &&
        this.date !== null
      ) {
        let changedCompany = {
          name: this.name,
          date: this.date,
          id: this.value.id,
        };
        this.$store.commit("changeCompany", changedCompany);
      }
      this.$emit("close");
    },
  },

  computed: {
    companies() {
      return this.$store.state.companies.companiesList;
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
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 80%;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid rgb(227, 231, 233);
  color: blue;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid rgb(227, 231, 233);
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: red;
  background: transparent;
}

.btn-open-modal {
  color: white;
  background: green;
  border: 1px solid green;
  border-radius: 4px;
  margin: 20px auto;
  padding: 5px;
  width: 40%;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
