<template>
  <div style="height: 90%" v-if="retailers.length">
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
        :items-per-page="5"
        class="elevation-1"
        style="height:100%"
      >
        <template v-slot:item.actions="{ item }"
          ><v-btn @click="select(item)" text
            ><v-icon>mdi-eye-outline</v-icon></v-btn
          ></template
        >
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog" max-width="1000">
      <v-card v-if="retailer.namenderfirma">
        <v-card-text class="pa-4">
          <v-row>
            <v-col cols="4">
              <h2>{{ retailer.namenderfirma }}</h2>
              <v-row>
                <v-col cols="1">
                  <v-icon>mdi-map-marker</v-icon>
                </v-col>
                <v-col>
                  {{ retailer.straßeundhausnummer }}<br />
                  {{ retailer.postleitzahl }} {{ retailer.stadt }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="1">
                  <v-icon>mdi-email-outline</v-icon>
                </v-col>
                <v-col>
                  {{ retailer["e-mail"] }}
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="6">
              <iframe
                width="560"
                height="315"
                :src="retailer.youtubevideo"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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
    retailers: Array,
    retailer: Object
  },

  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "namenderfirma"
        },
        {
          text: "Kategorie",
          align: "start",
          sortable: false,
          value: "namenderfirma"
        },
        { text: "", value: "actions", sortable: false }
      ]
    };
  },

  computed: {},

  watch: {
    retailer() {
      this.dialog = true;
    }
  },

  methods: {
    select: {
      deep: true,
      handler() {
        this.dialog = true;
      }
    }
  },

  async mounted() {}
};
</script>

<style scoped></style>
