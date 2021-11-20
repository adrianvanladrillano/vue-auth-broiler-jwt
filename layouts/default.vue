<template>
  <v-app dark>
    <div v-if="nav1 == true">
      <v-app-bar
        v-if="$route.name != 'login2' && $route.name != 'register'"
        app
        color="white"
        elevate-on-scroll
        :class="$vuetify.breakpoint.mobile ? '' : 'px-15'"
      >
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mobile"></v-app-bar-nav-icon>
        <img src="/logo.png" class="py-1" height="50" width="50" @click.stop="drawer = !drawer" />
        <v-spacer></v-spacer>

        <div v-if="!$vuetify.breakpoint.mobile">
          <a
            text
            style="text-transform: none; opacity: 0.6; font-weight: 500"
            class="px-5 text-decoration-none text--secondary"
            href="https://www.notion.so/Broilerplate-VueJS-Auth-f3ce542f8d214a339b8f8d9adde43b2a"
          >New to Avpl Auth?</a>
          <v-btn
            text
            style="border: 1px solid #e1e1e1; text-transform: none"
            v-if="$auth.loggedIn == false"
          >Create an account</v-btn>

          <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x v-else>
            <template v-slot:activator="{ on, attrs }">
              <v-avatar color="green" v-bind="attrs" v-on="on">
                <h3
                  class="white--text"
                  v-if="$auth.user.name != null"
                >{{ $auth.user.name.charAt(0) }}</h3>
              </v-avatar>
            </template>

            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Account Settings</v-list-item-title>
                    <v-list-item-subtitle>Manage account here.</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn :class="fav ? 'red--text' : ''" icon @click="fav = !fav">
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list>
                <v-list-item two-line link @click="$router.push('/settings')">
                  <v-list-item-avatar>
                    <v-icon>mdi-tune</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Settings & Privacy</v-list-item-title>
                    <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-list-item-action>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item two-line link>
                  <v-list-item-avatar>
                    <v-icon>mdi-help-circle-outline</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Help & Support</v-list-item-title>
                    <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-list-item-action>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item two-line link @click="logout()">
                  <v-list-item-avatar>
                    <v-icon>mdi-logout</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>Sign out</v-list-item-title>
                    <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed app>
        <div class="px-10 py-10">
          <v-img src="/logo.png" contain></v-img>
        </div>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <Nuxt />
      </v-main>

      <v-footer
        color="white"
        v-if="$route.name != 'login2' && $route.name != 'register'"
        app
        padless
      >
        <v-row
          :class="
            $vuetify.breakpoint.mobile ? 'text-center my-5 mx-7' : ' my-5 mx-7'
          "
        >
          <v-col cols="12" xl="6">
            <span>&copy; {{ new Date().getFullYear() }} Avpl Auth.</span>
          </v-col>
          <v-col cols="12" xl="6">
            <span class="primary--text font-weight-regular float-right">Terms</span>

            <span class="primary--text font-weight-regular float-right mx-10">Privacy</span>

            <span class="primary--text font-weight-regular float-right">Security</span>
          </v-col>
        </v-row>
      </v-footer>
    </div>
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  auth: true,
  data() {
    return {
      nav1: true,
      drawer: false,
      menu: false,
      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Login',
          to: '/login2',
          guarded: false
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Guarded',
          to: '/guarded',
          guarded: true
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Register',
          to: '/register',
          guarded: true
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Settings',
          to: '/settings',
          guarded: true
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false
    }
  },
  methods: {
    logout() {
      this.$auth.setUser('')
      this.$auth.$storage.removeUniversal('user')
      this.$auth.logout()
      this.$router.push('/')
    }
  }
}
</script>
