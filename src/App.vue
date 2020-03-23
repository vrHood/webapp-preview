<template>
  <div id="app">
    <GmapMap
      :center="{ lat: 49.0134297, lng: 12.1016236 }"
      :zoom="14"
      style="width: 100%; height: 100%"
    >
    </GmapMap>
  </div>
</template>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}
</style>
