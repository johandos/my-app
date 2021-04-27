<template>
  <div class="hello">
    <Header />
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-4">
                <DisplayBoard :numberOfBeers="numberOfBeers" @getAllBeers="getAllBeers()" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Beers v-if="beers.length > 0" :beers="beers" />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import DisplayBoard from './DisplayBoard.vue'
import Beers from './Beers.vue'
import { getAllBeers } from '../services/BeerService'

export default {
  name: 'Dashboard',
  components: {
    Header,
    DisplayBoard,
    Beers
  },
  data() {
      return {
          beers: [],
          numberOfBeers: 0
      }
  },
  methods: {
    getAllBeers() {
      getAllBeers().then(response => {
        this.beers = response
        this.numberOfBeers = this.beers.length
      })
    },
  },
  mounted () {
    this.getAllBeers();
  }
}
</script>