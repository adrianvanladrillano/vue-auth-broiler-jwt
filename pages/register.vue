<template>
  <div>
    <v-row style="height: 100vh">
      <v-col
        cols="12"
        xl="5"
        :class="$vuetify.breakpoint.mobile ? '' : 'px-15'"
      >
        <v-layout
          fill-height
          column
          justify-space-between
          :class="$vuetify.breakpoint.mobile ? ' py-10' : 'px-15 py-10'"
        >
          <v-row class="px-10">
            <v-col>
              <v-row>
                <v-col>
                  <v-img src="/logo.png" width="100" contain></v-img>
                  <h1 class="display-1 font-weight-bold mt-10">Register</h1>
                  <p class="body-1 text--secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                </v-col>
              </v-row>
              <v-btn
                block
                text
                outlined
                x-large
                rounded
                class="mt-4 text--secondary"
                style="text-transform: none; font-weight: 500"
              >
                <v-img
                  src="https://w7.pngwing.com/pngs/543/934/png-transparent-google-app-logo-google-logo-g-suite-google-text-logo-circle.png"
                  contain
                  width="30"
                  height="30"
                ></v-img>
                <span class="font-weight-regular text--secondary"
                  >Sign up with google</span
                >
                <v-spacer></v-spacer>
              </v-btn>

              <p class="my-5 text-center body-2" style="opacity: 0.6">
                or sign up with your email
              </p>

              <h3 class="font-weight-medium text--primary">Name</h3>
              <v-text-field
                class="mt-2"
                outlined
                rounded
                placeholder="Enter your password"
                v-model="name"
              ></v-text-field>

              <h3 class="font-weight-medium text--primary">Email</h3>
              <v-text-field
                type="email"
                class="mt-2"
                outlined
                rounded
                placeholder="Enter your email"
                v-model="email"
              ></v-text-field>

              <h3 class="font-weight-medium text--primary">Password</h3>
              <v-text-field
                type="password"
                class="mt-2"
                outlined
                rounded
                placeholder="Enter your password"
                v-model="password"
              ></v-text-field>

              <h3 class="font-weight-medium text--primary">Confirm Password</h3>
              <v-text-field
                type="password"
                class="mt-2"
                outlined
                rounded
                placeholder="Enter your password"
                v-model="password2"
              ></v-text-field>

              <v-btn
                block
                class="mb-7"
                color="green accent-4"
                dark
                x-large
                rounded
                style="text-transform: none; font-weight: 500"
                @click="login()"
                >Register</v-btn
              >
              <p class="body-1 font-weight-medium text-center error--text">
                {{ auth_error }}
              </p>

              <span class="body-1 font-weight-medium">
                Already a member?
                <a class="green--text" @click="$router.push('/login2')"
                  >Sign in</a
                >
                instead.
              </span>
            </v-col>
          </v-row>
        </v-layout>
      </v-col>
      <v-col style="background: #01dd82" v-if="!$vuetify.breakpoint.mobile">
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  auth: 'guest',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password2: '',
      auth_error: ''
    }
  },
  methods: {
    login() {
      axios
        .post('http://localhost:5000/api/auth/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password2: this.password2
        })
        .then(res => {
          console.log(res)
          this.$router.push('/login2')
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  mounted() {
    //Dito mo lagay
  }
}
</script>
<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: rgba(212, 212, 212, 0.986);
}
</style>