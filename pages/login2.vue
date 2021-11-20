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
                  <h1 class="display-1 font-weight-bold mt-10">Login</h1>
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
                  >Sign in with google</span
                >
                <v-spacer></v-spacer>
              </v-btn>

              <p class="my-5 text-center body-2" style="opacity: 0.6">
                or sign in with your email
              </p>

              <h3 class="font-weight-medium text--primary">Email</h3>
              <v-text-field
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

              <span href="" class="green--text font-weight-medium float-right"
                >Forgot password?</span
              >

              <v-checkbox
                label="Remember me?"
                color="green"
                class="px-0 py-0 mx-0 my-0"
              ></v-checkbox>

              <v-btn
                block
                class="mb-7"
                color="green accent-4"
                dark
                x-large
                rounded
                style="text-transform: none; font-weight: 500"
                @click="login()"
                >Sign In</v-btn
              >
              <p class="body-1 font-weight-medium text-center error--text">
                {{ auth_error }}
              </p>

              <span class="body-1 font-weight-medium">
                Not registered yet?
                <a class="green--text" @click="$router.push('/register')"
                  >Click here.</a
                >
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
export default {
  auth: 'guest',
  data() {
    return {
      email: '',
      password: '',
      remember: '',
      auth_error: ''
    }
  },
  methods: {
    login() {
      let authLogin = {
        email: this.email,
        password: this.password
      }
      this.$auth
        .loginWith('local', { data: authLogin })
        .then(res => {
          this.auth_error = ''
          console.log(res.data.data)
          this.$auth.setUser(res.data.data)
          // this.$auth.user = res.data.data[0]
          // this.$auth.setRefreshToken('local', res.data.token.refresh_token)
          // this.$auth.$storage.setUniversal('user', res.data, true)
        })
        .catch(err => {
          console.error(err.response)
          this.auth_error = err.response.data.auth
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