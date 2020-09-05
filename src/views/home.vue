<template>
  <div class="home-wrapper w-full flex flex-col items-center justify-center">
    <div class="country-actions flex flex-col items-center justify-center w-full md:flex-row md:justify-between">
      <base-input
        placeholder="Search for a country"
        v-model:query="state.searchQuery"
      />

      <base-dropdown
        label="Filter by region"
        :options="state.regions"
        :selected="state.selectedFilter"
        @selected="onSelectedFilter"
      />
    </div>
    <div class="country-list">
      <country-card
        v-for="(country, key) in filteredContries"
        :key="key"
        :country="country"
      />
    </div>
  </div>
</template>

<script>
import { reactive, computed, readonly, onMounted } from 'vue'
import { useFetch } from '../hooks/usefetch.js'
import CountryCard from '../components/CountryCard.vue'
import BaseDropdown from '../components/BaseDropdown.vue'
import BaseInput from '../components/BaseInput.vue'

export default {
  name: 'HomePage',

  components: {
    CountryCard,
    BaseDropdown,
    BaseInput
  },

  setup() {
    const state = reactive({
      regions: [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania'
      ],
      selectedFilter: null,
      searchQuery: ''
    })
    const stateFetch = useFetch('https://restcountries.eu/rest/v2/all')

    const countries = computed(() => stateFetch.response || [])
  
    const filteredContries = computed(() => {
      const selectedFilter = state.selectedFilter
      const searchQuery = state.searchQuery.toLowerCase()

      const filteredData = countries.value.filter((country) => {
        const target = selectedFilter
          ? country.region === selectedFilter
          : country

        return target
          ? country.name.toLowerCase().includes(searchQuery)
          : false
      })

      return filteredData
    })

    const onSelectedFilter = (filter) => {
      state.selectedFilter = filter
    }

    return {
      state,
      filteredContries,
      onSelectedFilter
    }
  }
}
</script>

<style>
.home-wrapper {
  padding: 40px 20px;
}
.country-actions {
  padding-bottom: 40px;
}
.country-actions .base-dropdown {
  align-self: flex-start;
  width: 90%;
  max-width: 300px;
  margin-top: 30px;
}
.country-list {
  --card-size: 320px;

  padding: 0px 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--card-size));
  row-gap: 30px;
  margin: 0 auto;
  justify-content: center;
}
@screen md {
  .country-list {
    column-gap: 25px;
  }
  .country-actions .base-input {
    max-width: 400px;
  }
  .country-actions .base-dropdown {
    align-self: center;
    margin-top: 0;
  }
}
@screen lg {
  .home-wrapper {
    padding: 60px 50px;
    max-width: 1920px;
  }
  .country-list {
    --card-size: 350px;
  }
}
@screen xl {
  .home-wrapper {
    padding: 60px 70px;
  }
  .country-list {
    --card-size: 375px;
    max-width: 1920px;
    column-gap: 50px;
    row-gap: 50px;
  }
}
</style>
