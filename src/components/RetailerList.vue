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
      :items-per-page="10"
      :search="search"
    >
      <template v-slot:item.actions="{ item }"
        ><v-btn @click="$emit('selectRetailer', item)" text
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
        },
        { text: "", value: "actions", sortable: false }
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
  height: 80px;
  margin-top: auto;
}

.impress a {
  color: black;
}
</style>
