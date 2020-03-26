<template>
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
                <a :href="retailer.insta" target="_blank" class="limit-text">{{
                  formatUrlText(retailer.insta)
                }}</a>
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
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "",

  components: {},

  props: {},

  data() {
    return {
      retailer: {},
      dialog: false
    };
  },

  computed: {},

  watch: {},

  methods: {
    selectRetailer(retailer) {
      this.dialog = true;
      this.retailer = retailer;
    },
    formatUrlText(text) {
      return text
        .replace("https://", "")
        .replace("http://", "")
        .split("/")[1];
    }
  }
});
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
</style>
