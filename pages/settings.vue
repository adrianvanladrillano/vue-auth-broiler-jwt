<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" xl="4">
        <v-row class="mt-5">
          <v-col>
            <v-card class="px-2">
              <v-card-title> Account {{ loadUser }} </v-card-title>
              <v-divider></v-divider>

              <v-card-text>
                <v-row align="center">
                  <v-col>
                    <v-list-item two-line class="px-0">
                      <v-list-item-content>
                        <v-list-item-title>Photo</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary text</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>

                  <v-col cols="2">
                    <v-avatar>
                      <v-img
                        src="https://www.w3schools.com/w3images/avatar2.png"
                        alt=""
                        contain
                      />
                    </v-avatar>
                  </v-col>
                </v-row>

                <v-divider></v-divider>

                <v-row align="center">
                  <v-col>
                    <v-list-item two-line class="px-0">
                      <v-list-item-content>
                        <v-list-item-title>Name</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary text</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>

                  <v-col cols="4" class="text-right">
                    <a
                      class="font-weight-medium green--text"
                      @click="edit_mode('name')"
                    >
                      Adrian Van Ladrillano
                    </a>
                  </v-col>
                </v-row>
                <v-spacer></v-spacer>
                <v-row no-gutters align="center" v-if="edit_item == 'name'">
                  <v-col>
                    <v-subheader class="px-0">Change name</v-subheader>
                    <v-text-field v-model="name" outlined dense></v-text-field>
                    <div class="float-right mb-5">
                      <v-btn color="green" text @click="edit_item = ''"
                        >Cancel</v-btn
                      >
                      <v-btn color="green" dark>
                        Save Changes
                        <v-icon right>mdi-check</v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>

                <v-divider></v-divider>

                <v-row align="center">
                  <v-col>
                    <v-list-item two-line class="px-0">
                      <v-list-item-content>
                        <v-list-item-title>Email</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary text</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>

                  <v-col cols="" class="text-right">
                    <a
                      class="font-weight-medium green--text"
                      @click="edit_mode('email')"
                    >
                      adrianvanladrillano.dev@gmail.com
                    </a>
                  </v-col>
                </v-row>

                <v-row no-gutters align="center" v-if="edit_item == 'email'">
                  <v-col>
                    <v-subheader class="px-0">Change email</v-subheader>
                    <v-text-field v-model="email" outlined dense></v-text-field>
                    <div class="float-right mb-5">
                      <v-btn color="green" text @click="edit_item = ''"
                        >Cancel</v-btn
                      >
                      <v-btn color="green" dark>
                        Save Changes
                        <v-icon right>mdi-check</v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>

                <v-divider></v-divider>

                <v-row align="center">
                  <v-col>
                    <v-list-item two-line class="px-0">
                      <v-list-item-content>
                        <v-list-item-title>Password</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary text</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>

                  <v-col cols="" class="text-right">
                    <a
                      class="font-weight-medium green--text"
                      @click="edit_mode('password')"
                    >
                      Change Password
                    </a>
                  </v-col>
                </v-row>
                <v-row no-gutters align="center" v-if="edit_item == 'password'">
                  <v-col>
                    <v-subheader class="px-0">Change Password</v-subheader>
                    <v-text-field
                      v-model="old_password"
                      outlined
                      dense
                      label="Enter current password"
                    ></v-text-field>
                    <v-text-field
                      v-model="new_password"
                      outlined
                      dense
                      label="Enter new password"
                    ></v-text-field>
                    <v-text-field
                      v-model="new_password2"
                      outlined
                      dense
                      label="Confirm new password"
                    ></v-text-field>
                    <div class="float-right mb-5">
                      <v-btn color="green" text @click="edit_item = ''"
                        >Cancel</v-btn
                      >
                      <v-btn color="green" dark>
                        Save Changes
                        <v-icon right>mdi-check</v-icon>
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>

                <v-divider></v-divider>

                <v-row align="center">
                  <v-col>
                    <v-list-item two-line class="px-0">
                      <v-list-item-content>
                        <v-list-item-title>Delete Account</v-list-item-title>
                        <v-list-item-subtitle
                          >Secondary text</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </v-col>

                  <v-col cols="" class="text-right">
                    <v-btn class="font-weight-medium" depressed color="error">
                      Delete Account
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      edit_item: ''
    }
  },
  computed: {
    loadUser() {
      this.name = this.$auth.user.name
      this.email = this.$auth.user.email
    }
  },
  methods: {
    edit_mode(item) {
      this.edit_item = item
    }
  }
}
</script>