<template>
  <div class="spec-row">
    <div class="spec-label">{{ label }}</div>
    <div class="spec-value">
      <div v-if="Array.isArray(value)">
        <div class="spec-value__item" v-for="(item, index) in value" :key="index">
          {{ item }}
        </div>
      </div>
      <div class="spec-value__item" v-else>
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

export interface SpecificationRowProps {
  label: string;
  value: string | string[];
}

defineProps<SpecificationRowProps>();
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
}

.spec-value__item {
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
