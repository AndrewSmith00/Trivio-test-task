<template>
  
    <div class="content">
        <div class="name">{{ company.name }}</div>
        <div class="date">Дата основания: {{ company.date }}</div>
        <div class="editing">
          <button class="editing__button" @click="showEdit=true">Редактировать</button>
          <Edit v-if="showEdit" :value="company" type="editCompany" @close="showEdit=false">
          </Edit>
        </div>
        <div class="deliting">
          <button class="deleting__button" @click="showDelete=true">Удалить</button>
          <Delete v-if="showDelete" :value="company" type="deleteCompany" @close="showDelete=false"></Delete>
        </div>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Edit from '../components/Modals/ModalEdit.vue';
import Delete from '../components/Modals/ModalDelete.vue'

export default defineComponent({
    name: "CompanyBlock",
    props: ["company"],
    components: {Edit, Delete},

    data() {
      return {
        showEdit: false,
        showDelete: false,
        showAdd: false,
      }
    }
})
</script>