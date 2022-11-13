<template>
  <transition name="fade">
    <div class="modal-backdrop">
      <div class="modal">
        <header>
          Удалить
          <span v-if="type == 'deleteUser'">пользователя</span>
          <span v-else>компанию</span>
          {{ value.name }}?
        </header>
        <footer class="modal__footer">
          <div class="input-wrapper">
            <button class="cancel__button" type="button" @click="$emit('close')">Отмена</button>
            <button class="deleting__button" @click="deleteContent(value.id)">Удалить</button>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalDelete",
  props: ["value", "type"],
  methods: {
    deleteContent(id: number) {
      console.log(this.type);
      if (this.type === "deleteUser") {
        this.$store.commit("deleteUser", id);
      } else if (this.type === "deleteCompany") {
        this.$store.commit("deleteCompany", id);
      }
      this.$emit("close");
    },
  },
});
</script>

<style>
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
  width: 60%;
}
</style>
