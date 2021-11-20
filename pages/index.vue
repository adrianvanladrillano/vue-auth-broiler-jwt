<template>
  <div>
    <v-row justify="center" align="center">
      <v-col co ls="12" xl="3" class="mt-10 px-7">
        <v-card-text class="mt-0">
          <h1 class="display-1 text-center font-weight-medium">Sign in</h1>
          <v-btn block class="mt-10" color="primary" style="text-transform: none; font-weight: 400">
            Connect using Facebook
            <v-icon right>mdi-facebook</v-icon>
          </v-btn>

          <p class="mt-10 text-center body-2">or sign in with your email</p>

          <h3 class="mt-7 font-weight-medium text--primary">Email address</h3>
          <v-text-field class="mt-2" outlined dense placeholder="Enter your email"></v-text-field>

          <h3 class="font-weight-medium text--primary">
            Password
            <span
              href
              class="primary--text font-weight-regular float-right"
            >Forgot password?</span>
          </h3>
          <v-text-field
            type="password"
            class="mt-2"
            outlined
            dense
            placeholder="Enter your password"
          ></v-text-field>
          <v-btn
            block
            class="mt-2"
            color="green accent-4 "
            dark
            style="text-transform: none; font-weight: 500"
          >Sign In</v-btn>
        </v-card-text>
      </v-col>
    </v-row>
  </div>
</template>
