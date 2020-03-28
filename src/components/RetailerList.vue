<template>
  <div style="height:100%;display:flex; flex-direction:column;">
    <v-flex>
      <div style="background-color: #4ba797;" class="pa-4">
        <img
          src="https://www.vrhood.de/wp-content/uploads/2020/03/vrhood-logo-white.svg"
          style="height:80px;"
        />
      </div>

      <div class="px-4 pb-2">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Suche"
          single-line
          hide-details
        ></v-text-field>
      </div>
      <v-data-table
        :headers="headers"
        :items="retailers"
        :items-per-page="10"
        :search="search"
        @click:row="(item) => $emit('selectRetailer', item)"
      >
      </v-data-table>
    </v-flex>

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
          value: "name"
        },
        {
          text: "Branche",
          align: "start",
          sortable: true,
          value: "branche"
        }
      ]
    };
  },

  computed: {},

  watch: {},

  methods: {},

  async mounted() {}
};
</script>

<style scoped>
.impress {
  text-align: center;
  z-index: 99999;
  margin-top: auto;
  min-height: 120px;
  position: relative;
}

.impress a {
  color: black;
}
</style>
