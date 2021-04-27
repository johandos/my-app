<template>
    <div class="container">
      <h2>Beers</h2>
      <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
        <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <h1 class="md-title">Beers</h1>
          </div>

          <md-field md-clearable class="md-toolbar-section-end">
            <md-input placeholder="Search by name..." v-model="search" @input="searchByName" />
            <md-input placeholder="Search by food..." v-model="search" @input="searchByFood" />
          </md-field>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Name" md-sort-by="name.first">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Tagline" md-sort-by="tagline">{{ item.tagline }}</md-table-cell>
          <md-table-cell md-label="Value" md-sort-by="gender">{{ item.method.fermentation.temp.value + " " + item.method.fermentation.temp.unit }}</md-table-cell>
          <md-table-cell md-label="Image" md-sort-by="location.country"><img :src="item.image_url"  width="25rem;"/> </md-table-cell>
          <md-table-cell md-label="Brewed" md-sort-by="dob.date">{{ item.first_brewed }}</md-table-cell>
          <md-table-cell md-label="Food" md-sort-by="dob.date">
            <ul id="example-1">
              <li v-for="(item, key) in item.food_pairing" :key="'item'+ key">
                {{ item }}
              </li>
            </ul>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
</template>

<script>
  const toLower = text => {
    return text.toString().toLowerCase()
  }
  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item =>
          toLower(item.name).includes(toLower(term)))
    }

    return items
  }
  const searchByFood = (items, term) => {
    if (term) {
      return items.filter(item =>
          toLower(item.food_pairing).includes(toLower(term)))
    }

    return items
  }
  export default {
    name: 'Beers',
    props: ['beers'],
    data() {
      return {
        search: null,
        searched: [],
      }
    },
    methods:{
      searchByName(){
        this.searched = searchByName(this.beers, this.search)
      },
      searchByFood(){
        this.searched = searchByFood(this.beers, this.search)
      }
    },
    created () {
      this.searched = this.beers
    }
  }
</script>