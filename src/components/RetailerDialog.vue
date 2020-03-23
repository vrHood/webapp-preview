<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">
          Als Händler registrieren
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSckW5I1Ib5ls0z6OtoqvTAfprCX7hpYVjeITSaoiOf0M07v_A/viewform?embedded=true"
            width="100%"
            height="873"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            >Loading…</iframe
          >
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>
