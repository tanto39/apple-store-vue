import { ref, computed, onMounted, watch } from 'vue';
import { Product } from '../types/Product';
import { useStore } from 'vuex';

export const usePriceFilter = () => {
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

  return {
    isInitialized,
    slider,
    minPrice,
    maxPrice,
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