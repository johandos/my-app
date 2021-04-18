<template>
    <div class="container">
      <h2>Users</h2>
      <md-table v-model="searched" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
        <md-table-toolbar>
          <div class="md-toolbar-section-start">
            <h1 class="md-title">Users</h1>
          </div>

          <md-field md-clearable class="md-toolbar-section-end">
            <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
          </md-field>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Name" md-sort-by="name.first">{{ item.name.first + " " + item.name.last }}</md-table-cell>
          <md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
          <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
          <md-table-cell md-label="Nacionalidad" md-sort-by="location.country">{{ item.location.country  }}</md-table-cell>
          <md-table-cell md-label="Fecha Nacimiento" md-sort-by="dob.date">{{ item.dob.date }}</md-table-cell>
          <md-table-cell md-label="Fecha Registro" md-sort-by="registered.date">{{ item.registered.date }}</md-table-cell>
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
      return items.filter(item => toLower(item.name.first).includes(toLower(term)))
    }

    return items
  }
  export default {
    name: 'Users',
    props: ['users'],
    data() {
      return {
        search: null,
        searched: [],
      }
    },
    methods: {
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.users.first, this.search)
      }
    },
    created () {
      this.searched = this.users
    }
  }
</script>