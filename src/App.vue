<template>
  <div id="app">
    <v-app>
      <retailer-dialog
        style="position:absolute; bottom: 10px;left:45%;z-index:9999"
      ></retailer-dialog>
      <retailer-list
        :retailers="retailers"
        ref="retailerList"
        style="position:absolute; top: 0px;right: 0px;z-index:9999; height: 100%; background-color: white;"
      ></retailer-list>
      <GmapMap
        :center="{ lat: 49.0134297, lng: 12.1016236 }"
        :zoom="14"
        style="width: 100%; height: 100%"
        :options="{
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          styles: map
        }"
      >
        <GmapMarker
          :key="index"
          v-for="(m, index) in retailers"
          :position="m.position"
          :icon="{
            url: '/info-i_maps.png',
            scaledSize: { height: 32, width: 32 }
          }"
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
    lng: parseFloat(result.lng)
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
      retailer: {},
      map: [
        {
          featureType: "administrative.country",
          elementType: "geometry",
          stylers: [
            {
              color: "#AECDBF"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "geometry",
          stylers: [
            {
              color: "#AECDBF"
            }
          ]
        },
        {
          featureType: "administrative.locality",
          elementType: "geometry",
          stylers: [
            {
              color: "#AECDBF"
            }
          ]
        },
        {
          featureType: "administrative.neighborhood",
          elementType: "geometry",
          stylers: [
            {
              color: "#AECDBF"
            }
          ]
        },
        {
          featureType: "administrative.province",
          elementType: "geometry",
          stylers: [
            {
              color: "#AECDBF"
            }
          ]
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry",
          stylers: [
            {
              color: "#EEEDEB"
            }
          ]
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              color: "#C9D7CB"
            },
            {
              saturation: -20
            },
            {
              lightness: 40
            },
            {
              visibility: "on"
            },
            {
              weight: 1.5
            }
          ]
        },
        {
          featureType: "landscape.natural.landcover",
          elementType: "geometry",
          stylers: [
            {
              color: "#AECDBF"
            }
          ]
        },
        {
          featureType: "landscape.natural.terrain",
          elementType: "geometry",
          stylers: [
            {
              color: "#AECDBF"
            }
          ]
        },
        {
          featureType: "poi.attraction",
          elementType: "labels",
          stylers: [
            {
              color: "#C9D7CB"
            },
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.business",
          elementType: "geometry",
          stylers: [
            {
              color: "#C9D7CB"
            }
          ]
        },
        {
          featureType: "poi.business",
          elementType: "labels",
          stylers: [
            {
              color: "#C9D7CB"
            },
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.government",
          elementType: "geometry",
          stylers: [
            {
              color: "#C9D7CB"
            }
          ]
        },
        {
          featureType: "poi.government",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.medical",
          elementType: "geometry",
          stylers: [
            {
              color: "#E1C4C6"
            }
          ]
        },
        {
          featureType: "poi.medical",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#AECDBF"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "geometry",
          stylers: [
            {
              color: "#AECDBF"
            }
          ]
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.school",
          elementType: "geometry",
          stylers: [
            {
              color: "#AECDBF"
            }
          ]
        },
        {
          featureType: "poi.school",
          elementType: "labels",
          stylers: [
            {
              color: "#AECDBF"
            },
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.sports_complex",
          elementType: "geometry",
          stylers: [
            {
              color: "#AECDBF"
            }
          ]
        },
        {
          featureType: "poi.sports_complex",
          elementType: "labels",
          stylers: [
            {
              color: "#AECDBF"
            },
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#E9D5BC"
            },
            {
              saturation: 5
            },
            {
              lightness: 5
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels",
          stylers: [
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#A4BCBF"
            }
          ]
        }
      ]
    };
  },
  methods: {
    selectRetailer(retailer) {
      this.$refs.retailerList.selectRetailer(retailer);
    }
  },

  async mounted() {
    const { data } = await this.axios.get(
      "https://spreadsheets.google.com/feeds/list/1l6Lzh20BLcN_Gl4dvwmZ8cbmyJ5jIuIOx7Pn3KPN0pg/1/public/full?alt=json"
    );

    this.retailers = data.feed.entry.map((x) => ext(x)).filter((x) => x.aktiv);

    console.log(this.retailers);
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
