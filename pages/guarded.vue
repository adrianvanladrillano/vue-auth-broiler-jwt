<template>
  <div>
    <v-container style="min-height: 100vh" class="mt-10">
      <v-row justify="center">
        <v-col cols="12" xl="5">
          <v-card
            class="px-10 py-10"
            style="height: 100%"
            color="cyan darken-4"
            dark
          >
            <v-row align="center">
              <v-col cols="2">
                <v-img src="/logo.png" contain></v-img>
              </v-col>

              <v-col>
                <h1 class="display-1">Welcome, {{ $auth.user.name }}</h1>
                <p class="body-2 grey--text text--lighten-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem error odio architecto repudiandae voluptas atque
                  mollitia blanditiis! Quasi ex sequi reprehenderit voluptatum
                  ad dolore facere labore, inventore in sed repellat.
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>

        <v-col cols="12" xl="3">
          <v-card style="height: 100%" color="green accent-3">
            <v-card-text>
              <div>
                <v-list-item two-line class="px-0">
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                      {{ $auth.user.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>Name</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item two-line class="px-0">
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                      {{ $auth.user.email }}
                    </v-list-item-title>
                    <v-list-item-subtitle>Email</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item two-line class="px-0">
                  <v-list-item-content>
                    <v-list-item-title class="font-weight-medium">
                      {{ $auth.loggedIn }}
                    </v-list-item-title>
                    <v-list-item-subtitle>Logged in</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="8">
          <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col v-for="n in 4" :key="n" cols="12" xl="2">
          <v-card>
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
          </v-card>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col v-for="n in 4" :key="n" cols="12" xl="2">
          <v-card>
            <v-skeleton-loader class="mx-auto" type="card"></v-skeleton-loader>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <v-row style="height: 100vh" justify="center" align="center">
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

    <v-row>
      <v-col cols="3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ullam
        voluptatem rem placeat, natus dolores in asperiores nesciunt, labore quo
        tempora laboriosam odio voluptatibus sed impedit accusantium modi, non
        numquam?
      </v-col>

      <v-col cols="3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ullam
        voluptatem rem placeat, natus dolores in asperiores nesciunt, labore quo
        tempora laboriosam odio voluptatibus sed impedit accusantium modi, non
        numquam?
      </v-col>

      <v-col cols="3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ullam
        voluptatem rem placeat, natus dolores in asperiores nesciunt, labore quo
        tempora laboriosam odio voluptatibus sed impedit accusantium modi, non
        numquam?
      </v-col>

      <v-col cols="3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque ullam
        voluptatem rem placeat, natus dolores in asperiores nesciunt, labore quo
        tempora laboriosam odio voluptatibus sed impedit accusantium modi, non
        numquam?
      </v-col>
    </v-row> -->
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data() {
    return {}
  }
}
</script>