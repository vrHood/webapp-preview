<template>
  <div v-if="retailers" style="height:100%;display:flex; flex-direction:column">
    <div style="background-color: #4ba797;" class="pa-4">
      <img
        src="https://www.vrhood.de/wp-content/uploads/2020/03/vrhood-logo-white.svg"
        style="height:80px;"
      />
    </div>
    <v-card-title>
      Händler
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Suche"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="retailers"
      :items-per-page="25"
      :search="search"
    >
      <template v-slot:item.actions="{ item }"
        ><v-btn @click="selectRetailer(item)" text
          ><v-icon>mdi-eye-outline</v-icon></v-btn
        ></template
      >
    </v-data-table>

    <div class="impress">
      <v-btn
        class="primary mb-3"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSd2N11xmbKPPcTXwX92BobqYvlkzyYt7bXLvNsSk6LJD1Sf6g/viewform"
      >
        Händler Registrierung</v-btn
      ><br />
      <a href="https://www.vrhood.de/impressum" target="_blank">IMPRESSUM</a>
      |
      <a href="https://www.vrhood.de/datenschutz" target="_blank"
        >DATENSCHUTZ</a
      >
    </div>

    <!---    <v-card style="position:absolute; bottom: 10px;left:45%;z-index:9999">

    </v-card>-->

    <v-dialog v-model="dialog" max-width="1000">
      <v-card v-if="retailer.name">
        <v-card-text class="pa-4">
          <v-row>
            <v-col cols="12" lg="4">
              <h1 class="primary--text ml-1 mb-4">{{ retailer.name }}</h1>

              <v-row>
                <v-col class="icon-col">
                  <v-icon>mdi-map-marker</v-icon>
                </v-col>
                <v-col>
                  {{ retailer.straße }}<br />
                  {{ retailer.plz }} {{ retailer.stadt }}
                </v-col>
              </v-row>

              <v-row>
                <v-col class="icon-col">
                  <v-icon>mdi-phone-outline</v-icon>
                </v-col>
                <v-col>
                  {{ retailer.festnetz }}<br />
                  {{ retailer.mobil }}
                </v-col>
              </v-row>

              <v-row>
                <v-col class="icon-col">
                  <v-icon>mdi-email-outline</v-icon>
                </v-col>
                <v-col>
                  <a
                    :href="`mailto: ${retailer.emailkunden}`"
                    target="_blank"
                    class="limit-text"
                    >{{ retailer.emailkunden }}</a
                  >
                </v-col>
              </v-row>

              <v-row v-if="retailer.webseite">
                <v-col class="icon-col">
                  <v-icon>mdi-web</v-icon>
                </v-col>
                <v-col>
                  <a
                    :href="retailer.webseite"
                    target="_blank"
                    class="limit-text"
                    >{{ retailer.webseite }}</a
                  >
                </v-col>
              </v-row>

              <v-row v-if="retailer.facebook">
                <v-col class="icon-col">
                  <v-icon>mdi-facebook</v-icon>
                </v-col>
                <v-col>
                  <a
                    :href="retailer.facebook"
                    target="_blank"
                    class="limit-text"
                    >{{ formatUrlText(retailer.facebook) }}</a
                  >
                </v-col>
              </v-row>

              <v-row v-if="retailer.insta">
                <v-col class="icon-col">
                  <v-icon>mdi-instagram</v-icon>
                </v-col>
                <v-col>
                  <a
                    :href="retailer.insta"
                    target="_blank"
                    class="limit-text"
                    >{{ formatUrlText(retailer.insta) }}</a
                  >
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" lg="8">
              <div v-if="retailer.geschichte">
                <h2 class="primary--text">Geschichte</h2>
                {{ retailer.geschichte }}
              </div>

              <div v-if="retailer.sortiment">
                <h2 class="mt-4 primary--text">Sortiment</h2>
                {{ retailer.sortiment }}
              </div>

              <div class="mt-4 ml-3">
                <v-row class="mt-1">
                  <b class="width-list">Bestellung: </b>
                  {{ retailer.bestellung }}</v-row
                >
                <v-row class="mt-1">
                  <b class="width-list">Bezahlen: </b>
                  {{ retailer.bezahlen }}</v-row
                >
                <v-row class="mt-1">
                  <b class="width-list">Lieferung: </b>
                  {{ retailer.lieferung }}</v-row
                >
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "",

  components: {},

  props: {
    retailers: Array
  },

  data() {
    return {
      drawer: true,
      retailer: {},
      search: "",
      dialog: false,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"
        },
        {
          text: "Branche",
          align: "start",
          sortable: true,
          value: "branche"
        },
        { text: "", value: "actions", sortable: false }
      ]
    };
  },

  computed: {},

  watch: {},

  methods: {
    formatUrlText(text) {
      return text
        .replace("https://", "")
        .replace("http://", "")
        .split("/")[1];
    },
    selectRetailer(retailer) {
      this.dialog = true;
      this.retailer = retailer;
    }
  },

  async mounted() {}
};
</script>

<style scoped>
.limit-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
  display: block;
}

.icon-col {
  max-width: 50px;
}

.width-list {
  display: inline-block;
  width: 90px;
}

.impress {
  text-align: center;
  z-index: 99999;
  height: 80px;
  margin-top: auto;
}

.impress a {
  color: black;
}
</style>
