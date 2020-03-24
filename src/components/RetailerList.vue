<template>
  <div v-if="retailers.length">
    <v-card>
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
        style="height:100%"
        :search="search"
      >
        <template v-slot:item.actions="{ item }"
          ><v-btn @click="selectRetailer(item)" text
            ><v-icon>mdi-eye-outline</v-icon></v-btn
          ></template
        >
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog" max-width="1000">
      <v-card v-if="retailer.name">
        <v-card-text class="pa-4">
          <v-row>
            <v-col cols="4">
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
                    >{{ retailer.facebook }}</a
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
                    >{{ retailer.insta }}</a
                  >
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="6">
              <h2 class="primary--text">Geschichte</h2>
              {{ retailer.geschichte }}

              <h2 class="mt-4 primary--text">Sortiment</h2>
              {{ retailer.sortiment }}

              <div class="mt-4 ml-3">
                <v-row> Bestellung: {{ retailer.bestellung }}</v-row>
                <v-row> Bezahlen: {{ retailer.bezahlen }}</v-row>
                <v-row> Lieferung: {{ retailer.lieferung }}</v-row>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <div style="position: relativ:bottom: 0px;" class="impress">
      <v-btn
        class="primary mb-3"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSd2N11xmbKPPcTXwX92BobqYvlkzyYt7bXLvNsSk6LJD1Sf6g/viewform"
      >
        Händler Registrierung</v-btn
      ><br />
      <a href="https://www.vrhood.de/impressum" target="_blank">IMPRESSUM</a> |
      <a href="https://www.vrhood.de/datenschutz" target="_blank"
        >DATENSCHUTZ</a
      >
    </div>
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

.impress {
  position: absolute;
  bottom: 15px;
  width: 100%;
  text-align: center;
}

.impress a {
  color: black;
}

.icon-col {
  max-width: 50px;
}
</style>
