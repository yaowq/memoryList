<template>
  <div class="product-list">
    <div class='products'>
      {{product.id}}<br>
      {{product.name}}<br>
      {{product.score}}<br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {
      product: {}
    }
  },
  created() {
    let vm = this
    vm.product = vm.$route.query
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products {
  cursor: pointer
}
</style>
