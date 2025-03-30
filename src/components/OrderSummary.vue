<template>
  <section class="summary">
    <h2 class="order-summary">Order Summary</h2>
    <div class="content">
      <div class="summary-block">
        <div class="input-fields">
          <InputStore placeholder="Code" label="Discount code / Promo code" />
          <InputStore placeholder="Enter Card Number" label="Your bonus card number" buttonTitle="Apply" />
        </div>

        <div class="prices">
          <div class="price-row subtotal">
            <span class="price-label">Subtotal</span>
            <span class="price-amount">$2347</span>
          </div>

          <div class="taxes">
            <div class="price-row">
              <span class="price-label secondary">Estimated Tax</span>
              <span class="price-amount">$50</span>
            </div>
            <div class="price-row">
              <span class="price-label secondary">Estimated shipping & Handling</span>
              <span class="price-amount">$29</span>
            </div>
          </div>

          <div class="price-row total">
            <span class="price-label">Total</span>
            <span class="price-amount">$2426</span>
          </div>
        </div>
      </div>
      <ButtonStore class="checkout-button">Checkout</ButtonStore>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputStore from "../components/UI/InputStore.vue";

export default defineComponent({
  name: "OrderSummary",
  components: { InputStore },
});
</script>

<style scoped>
.summary {
  border-radius: 10px;
  border-color: rgba(235, 235, 235, 1);
  border-style: solid;
  border-width: 1px;
  width: 50%;
  max-width: 536px;
  padding: 56px 64px;
  font-weight: 400;
}

.order-summary {
  color: rgba(17, 17, 17, 1);
  font-size: 20px;
  font-family: ABeeZee, -apple-system, Roboto, Helvetica, sans-serif;
  line-height: 0.8;
}

.content {
  margin-top: 40px;
  width: 100%;
}

.summary-block {
  width: 100%;
}

.input-fields {
  width: 100%;
}

.prices {
  margin-top: 24px;
  width: 100%;
  font-size: 16px;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: ABeeZee, -apple-system, Roboto, Helvetica, sans-serif;
  letter-spacing: 0.48px;
}

.price-label {
  color: #000;
}

.price-label.secondary {
  color: rgba(84, 84, 84, 1);
  font-family: Abel, -apple-system, Roboto, Helvetica, sans-serif;
}

.price-amount {
  color: #000;
  line-height: 32px;
}

.taxes {
  margin-top: 16px;
}

.taxes .price-row + .price-row {
  margin-top: 8px;
}

.total {
  margin-top: 16px;
}

.checkout-button {
  width: 100%;
  margin-top: 48px;
  padding: 16px 56px;
  background-color: #000;
  color: #fff;
  border: none;
}

@media (max-width: 991px) {
  .summary {
    padding: 56px 20px;
  }

  .checkout-button {
    padding: 16px 20px;
    margin-top: 40px;
  }
}
</style>
