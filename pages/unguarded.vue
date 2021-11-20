<template>
  <div>
    <v-row style="height: 100vh" justify="center" align="center">
      <v-col cols="4">
        <v-card class="px-10 py-10">
          <div align="center">
            <v-img width="200" height="200" src="/logo.png"></v-img>
          </div>
          <h1 class="text-h5 text-center">
            You cannot access this page if you don't have a valid JWT Token
          </h1>
          <p class="body-2 text--secondary mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            error minima autem reiciendis laboriosam velit dolor, officia aut
            doloremque ex assumenda exercitationem quae dolorum nulla odio. Hic
            placeat fugiat quidem?
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>