<template>
  <div class="price-filter" v-if="isInitialized">
    <div class="range-inputs">
      <div class="range-labels">
        <span class="range-label">From</span>
        <span class="range-label range-label--to">To</span>
      </div>
      <div class="range-values">
        <input
          type="text"
          v-model="minPriceFormatted"
          class="range-input"
          @input="handleMinInput"
        />
        <div class="range-separator"></div>
        <input
          type="text"
          v-model="maxPriceFormatted"
          class="range-input"
          @input="handleMaxInput"
        />
      </div>
    </div>
    <div class="range-slider" ref="slider">
      <div class="slider-track"></div>
      <div class="slider-progress" :style="progressStyle"></div>
      <div
        class="slider-thumb"
        :style="minThumbStyle"
        @mousedown="startDrag('min')"
      ></div>
      <div
        class="slider-thumb"
        :style="maxThumbStyle"
        @mousedown="startDrag('max')"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue';
import { Product } from '../types/Product';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PriceFilter',
  emits: ['update:price'],
  setup(_, { emit }) {
    const store = useStore();
    const isInitialized = ref(false);

    // Получаем минимальную и максимальную цену из Vuex
    const minMaxPrices = computed(() => {
      const products = store.state.category.products as Product[];
      if (!products.length) return [0, 0];
      
      const prices = products.map(p => p.discount_price || p.price);
      return [Math.min(...prices), Math.max(...prices)];
    });

    const minLimit = ref(0);
    const maxLimit = ref(0);
    const minPrice = ref(1299);
    const maxPrice = ref(1299);
    
    // Инициализация лимитов
    watch(minMaxPrices, ([newMin, newMax]) => {
      minLimit.value = newMin;
      maxLimit.value = newMax;
      minPrice.value = newMin;
      maxPrice.value = newMax;
      isInitialized.value = true;
    }, { immediate: true });

    const slider = ref<HTMLElement | null>(null);
    const dragging = ref<'min' | 'max' | null>(null);
    const sliderWidth = ref(0);

    // Форматирование значений для отображения
    const formatPrice = (value: number) => 
      value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    const minPriceFormatted = computed(() => formatPrice(minPrice.value));
    const maxPriceFormatted = computed(() => formatPrice(maxPrice.value));

    // Стили для позиционирования элементов
    const minThumbStyle = computed(() => ({
      left: `${((minPrice.value - minLimit.value) / (maxLimit.value - minLimit.value)) * 100}%`
    }));

    const maxThumbStyle = computed(() => ({
      left: `${((maxPrice.value - minLimit.value) / (maxLimit.value - minLimit.value)) * 100}%`
    }));

    const progressStyle = computed(() => ({
      width: `${((maxPrice.value - minPrice.value) / (maxLimit.value - minLimit.value)) * 100}%`,
      left: `${((minPrice.value - minLimit.value) / (maxLimit.value - minLimit.value)) * 100}%`
    }));

    // Обработка ввода
    const parseInput = (value: string) => 
      parseInt(value.replace(/\s/g, '')) || 0;

    const handleMinInput = (event: Event) => {
      const value = parseInput((event.target as HTMLInputElement).value);
      minPrice.value = Math.min(value, maxPrice.value);
    };

    const handleMaxInput = (event: Event) => {
      const value = parseInput((event.target as HTMLInputElement).value);
      maxPrice.value = Math.max(value, minPrice.value);
    };

    // Логика перетаскивания
    const startDrag = (type: 'min' | 'max') => {
      dragging.value = type;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!dragging.value || !slider.value) return;

      const rect = slider.value.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const percentage = Math.min(Math.max(x / rect.width, 0), 1);
      const newValue = minLimit.value + percentage * (maxLimit.value - minLimit.value);

      if (dragging.value === 'min') {
        minPrice.value = Math.min(newValue, maxPrice.value);
      } else {
        maxPrice.value = Math.max(newValue, minPrice.value);
      }
    };

    const stopDrag = () => {
      dragging.value = null;
    };

    // Инициализация
    onMounted(() => {
      if (slider.value) {
        sliderWidth.value = slider.value.offsetWidth;
      }
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', stopDrag);
    });

    // Отправка изменений
    watch([minPrice, maxPrice], () => {
      emit('update:price', [minPrice.value, maxPrice.value]);
    });

    return {
      isInitialized,
      slider,
      minPriceFormatted,
      maxPriceFormatted,
      minThumbStyle,
      maxThumbStyle,
      progressStyle,
      handleMinInput,
      handleMaxInput,
      startDrag
    };
  }
});
</script>


<style scoped>
.price-filter {
  margin-top: 24px;
  width: 100%;
}
.range-inputs {
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.07px;
  line-height: 24px;
}
.range-labels {
  display: flex;
  width: 100%;
  align-items: end;
  gap: 40px 100px;
  justify-content: space-between;
}
.range-label {
  color: rgba(167, 167, 167, 1);
}
.range-label--to {
  color: rgba(167, 167, 167, 1);
}
.range-values {
  display: flex;
  margin-top: 8px;
  width: 100%;
  align-items: center;
  color: #000;
  text-align: right;
  justify-content: space-between;
}
.range-input {
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(159, 159, 159, 1);
  padding: 8px;
  width: 106px;
  text-align: left;
  font-family: inherit;
}
.range-separator {
  border: 1px solid rgba(231, 231, 231, 1);
  align-self: stretch;
  margin: auto 0;
  width: 20px;
  height: 1px;
}
.range-slider {
  position: relative;
  display: flex;
  margin-top: 16px;
  width: 100%;
  align-items: start;
  gap: 40px 99px;
  justify-content: start;
  height: 12px;
}
.slider-track {
  border-radius: 2px;
  background-color: rgba(206, 206, 206, 1);
  position: absolute;
  width: 100%;
  height: 4px;
  top: 4px;
}
.slider-progress {
  border-radius: 2px;
  background-color: rgba(65, 65, 65, 1);
  position: absolute;
  width: 70%;
  height: 4px;
  top: 4px;
  left: 0;
}
.slider-thumb {
  background-color: #000;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  cursor: pointer;
}
.slider-thumb:first-child {
  left: 0;
}
.slider-thumb:last-child {
  left: 70%;
}
</style>
