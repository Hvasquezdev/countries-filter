<template>
  <div class="country-card flex flex-col">
    <img :src="country.flag" :alt="country.name">

    <div class="card-content w-full flex flex-col items-start justify-center">
      <h3 class="card-title">{{ country.name }}</h3>

      <ul class="card-list">
        <li>
          Population:
          <span class="font-light">{{ country.population }}</span>
        </li>
        <li>
          Region:
          <span class="font-light">{{ country.region }}</span>
        </li>
        <li>
          Capital:
          <span class="font-light">{{ country.capital }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',
  
  props: {
    country: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>
.country-card {
  border-radius: 8px;
  max-width: 420px;
  background-color: var(--bg-elements);
  color: var(--color-text);
  box-shadow: 0 0 6px var(--bg-page);
}
.country-card img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.country-card .card-content {
  padding: 35px 25px 45px 25px;
  text-align: left;
}
.country-card .card-content .card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}
.country-card .card-content .card-list {
  font-size: 18px;
}
.country-card .card-content .card-list li:not(:last-child) {
  margin-bottom: 5px;
}
</style>