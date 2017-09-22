<template>
  <div class="product-list">
    <input type="text" v-model="price">
    <router-link v-for='(item,index) in products' :key='index' :to="{path:'detail',params:item,query:item}" tag='div' class='products'>
      {{item.id}} -- {{item.name}} -- {{item.score}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'productList',
  data() {
    return {
      products: [],
      price: 0,
      scrollTop: 0
    }
  },
  created() {
    let vm = this
    vm.products = vm.mockProducts(100);
    console.log('created')
  },
  methods: {
    mockProducts(n) {
      let products = [];
      for (let i = 100; i < 100 + n; i++) {
        products.push({
          id: i,
          name: '同学' + i,
          score: 430 + i
        })
      }
      return products
    }
  },
  mounted: function() {
    console.log('mounted')
  },
  activated: function() {
    console.log('activated')
    let vm = this
    document.body.scrollTop = vm.scrollTop
  },
  deactivated: function() {
    console.log('deactivated')
  },
  beforeRouteUpdate() {
    console.log('beforeRouteUpdate')
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave', document.body.scrollTop)
    let vm = this
    vm.scrollTop = document.body.scrollTop
    next()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products {
  cursor: pointer
}

.products:hover {
  color: blue
}
</style>
