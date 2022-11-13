<template>
  <div class="navigation__search">
    <input
      type="text"
      placeholder="Поиск"
      onfocus="this.placeholder=''"
      onblur="this.placeholder='Поиск'"
      v-model="search"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SearchInput',
    props: ["value"],

    computed: {
        search: {
            get() { return this.value; },
            set(v) { this.$emit('input', v); }
        }
    }
})
</script>