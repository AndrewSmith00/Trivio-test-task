<template>
    <div class="content">
        <div class="name">{{ user.name }}</div>
        <div class="date">Дата рождения: {{ user.date }}</div>
        <div class="user__company">Компания: {{user.company}}</div>
        <div class="editing">
          <button class="editing__button" @click="showEdit=true">Редактировать</button>
          <Edit v-if="showEdit" :value="user" type="editUser" @close="showEdit=false">
          </Edit>
        </div>
        <div class="deliting">
          <button class="deleting__button" @click="showDelete=true">Удалить</button>
          <Delete v-if="showDelete" :value="user" type="deleteUser" @close="showDelete=false"></Delete>
        </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Delete from '../components/Modals/ModalDelete.vue'
import Edit from '../components/Modals/ModalEdit.vue'

export default defineComponent({
    name: "CompanyBlock",
    props: ["user"],
    components: { Delete, Edit },

    data() {
      return {
        showDelete: false,
        showEdit: false,
      }
    }
})
</script>