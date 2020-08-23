<template>
  <div class="country-list">
    <country-card
      v-for="(country, key) in state.countries"
      :key="key"
      :country="country"
    />
  </div>
</template>

<script>
import { reactive, readonly, onMounted } from 'vue'
import CountryCard from '../components/CountryCard.vue'

export default {
  name: 'HomePage',

  components: {
    CountryCard
  },

  setup() {
    const state = reactive({
      countries: []
    })

    const getCountries = () => {
      fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => {
          state.countries = data
          console.log(data[0])
        })
    }

    onMounted(() => {
      getCountries()
    })

    return {
      state
    }
  }
}
</script>

<style>
.country-list {
  padding: 40px 20px;
  max-width: 420px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 375px));
  row-gap: 30px;
}
</style>
