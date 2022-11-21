<template>
  <div class="content-wrapper">
    <h2>Рабочий стол</h2>

    <div class="content content_block">
      <h3>Командировки легко и без переплат</h3>

      <p>
        Мы делаем все, чтобы вы могли сосредоточиться на главном. Оформить
        деловую поездку и отчитаться по ней можно за считанные минуты
      </p>
      <p>Все услуги в одном месте по лучшим ценам</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DesktopView",
  components: {},
});
</script>

<style lang="scss">
.content_block {
  display: block;
}

p {
  padding-bottom: 20px;
}
</style>
