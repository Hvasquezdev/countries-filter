<template>
  <div class="the-navbar w-full flex items-center justify-between">
    <div class="left-nav">
      <h1 class="brand-title font-bold font-body">
        What in the world?
      </h1>
    </div>
    <div class="right-nav"></div>
  </div>
</template>

<script>
export default {
  name: 'TheNavbar'
}
</script>

<style>
.the-navbar {
  background-color: var(--bg-elements);
  box-shadow: 0 0 6px var(--bg-page);
  padding: 25px 15px;
}
.the-navbar > * {
  color: var(--color-text);
}
.the-navbar .left-nav .brand-title {
  font-size: 18px;
}
</style>