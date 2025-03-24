<template>
  <label :class="['checkbox-field', { 'checkbox-field_selected': modelValue }]">
    <div
      :class="['checkbox-indicator', { 'checkbox-indicator_selected': modelValue }]"
      role="checkbox"
      :aria-checked="modelValue"
    ></div>
    <div class="checkbox-label">
      <span class="label-text">{{ label }}</span>
      <span class="count-text">{{ count }}</span>
    </div>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  count: number;
  modelValue?: boolean;
}>();

defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();
</script>

<style scoped>
.checkbox-field {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #000000;
  font-weight: 400;
  line-height: 24px;
}

.checkbox-indicator {
  border-radius: 3px;
  border: 1px solid rgba(211, 211, 211, 1);
  align-self: stretch;
  display: flex;
  min-height: 16px;
  margin: auto 0;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
}

.checkbox-indicator_selected {
  background: #000000 url("../../assets/check.svg") center center no-repeat;
  border: none;
}

.checkbox-label {
  align-self: stretch;
  margin: auto 0;
  flex: 1;
}

.label-text {
  font-size: 15px;
}

.count-text {
  font-size: 12px;
  color: rgba(146, 146, 146, 1);
  margin-left: 4px;
}
</style>
