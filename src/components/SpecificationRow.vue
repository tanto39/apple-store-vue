<template>
  <div class="spec-row">
    <div class="spec-label">{{ spec.characteristic }}</div>
    <div class="spec-value">
        {{ `${spec.value} ${spec.unit_type}` }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Characteristic } from "../types/Product";

export default defineComponent({
  name: "SpecificationRow",
  props: {
    spec: {
      type: Object as () => Characteristic,
      required: true,
    },
  }
});
</script>

<style scoped>
.spec-row {
  display: flex;
  padding-bottom: 8px;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-bottom: 0.5px solid #cdcdcd;
}

.spec-label {
  color: #000;
  font-family: Abel;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.spec-value {
  text-align: right;
  color: #000;
  font-family: Abel, Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
}

@media (max-width: 991px) {
  .spec-label {
    font-size: 15px;
  }
  .spec-value {
    font-size: 14px;
  }
}

@media (max-width: 640px) {
  .spec-label {
    font-size: 14px;
  }
  .spec-value {
    font-size: 13px;
  }
}
</style>
