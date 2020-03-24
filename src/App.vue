<template>
  <div id="app">
    <v-app>
      <retailer-dialog
        style="position:absolute; bottom: 10px;left:45%;z-index:9999"
      ></retailer-dialog>
      <retailer-list
        :retailers="retailers"
        style="position:absolute; top: 10px;left: 10px;z-index:9999"
        ref="retailerList"
      ></retailer-list>
      <GmapMap
        :center="{ lat: 49.0134297, lng: 12.1016236 }"
        :zoom="14"
        style="width: 100%; height: 100%"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in retailers"
          :position="m.position"
          :clickable="true"
          @click="selectRetailer(m)"
        />
      </GmapMap>
    </v-app>
  </div>
</template>

<script>
import RetailerDialog from "./components/RetailerDialog";
import RetailerList from "./components/RetailerList";

function ext(row) {
  const result = Object.keys(row).reduce((acc, x) => {
    if (x.startsWith("gsx$")) {
      acc[x.replace("gsx$", "")] = row[x].$t;
    }

    return acc;
  }, {});

  result.position = {
    lat: parseFloat(result.lat),
    lng: parseFloat(result.long)
  };

  return result;
}

export default {
  components: {
    RetailerDialog,
    RetailerList
  },
  data() {
    return {
      retailers: [],
      retailer: {}
    };
  },
  methods: {
    selectRetailer(retailer) {
      this.$refs.retailerList.selectRetailer(retailer);
    }
  },

  async mounted() {
    const { data } = await this.axios.get(
      "https://spreadsheets.google.com/feeds/list/1T8L7wSYH8vdw_ACNw2rT44PIiJ6hGxY2JM33XVVKox8/1/public/full?alt=json"
    );

    this.retailers = data.feed.entry.map((x) => ext(x));
  }
};
</script>

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
