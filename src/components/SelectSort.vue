<template>
    <div class="navigation__sort">
        <span class="title">Сортировать </span>
        <select v-model="selected">
          <option selected value="alphabetDownscaling">По имени | A-Z</option>
          <option value="alphabetUpscaling">По имени | Z-A</option>
          <option value="dateDownscaling">По дате &nbsp; &nbsp;| &darr;</option>
          <option value="dateUpscaling">По дате &nbsp; &nbsp;| &uarr;</option>
        </select>
      </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SelectSort',
    props: ['value'],

    computed: {
        selected: {
            get() {return this.value},
            set(v) {this.$emit('input', v)}
        }
    },
})
</script>