<template>
  <v-app-bar
    fixed
    color="white"
    elevation="1"
    app
    clipped-right
    height="80"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="auto">
        <v-btn text>
          <v-img
            src="@/assets/instagram.png"
          />
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-text-field
          style="max-width: 300px;"
          label="search"
          solo
          clearable
          filled
          shaped
          hide-details="auto"
          class="mx-10"
        />
      </v-col>

      <v-col cols="auto">
        <v-btn text>
          <v-icon>mdi-home-outline</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon>mdi-send-circle-outline</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon>mdi-compass-outline</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon>mdi-cards-heart-outline</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: 'DefaultBar',
}
</script>

<style>

</style>
