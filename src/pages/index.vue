<template>
  <v-card id="login-form" width="450" class="mx-auto my-5">
    <v-card-title class="justify-center text-center">
      Nuxt2 - SSR
      <br>
      Deployed on Firebase
    </v-card-title>
    <v-img
      class="mx-auto"
      height="100"
      width="100"
      src="./v.png"
    />
    <v-card-text>
      <p>Features included:</p>
      <ul>
        <li>Server-side rendering with Firebase Functions</li>
        <li>Vuetify component framework</li>
        <li>Progressive Web Application (as Nuxt plugin)</li>
        <li>Google Auth - as Firebase function</li>
        <li>Cookies (user not logged out on refresh due to SSR mode)</li>
        <li>Axios - for async requests</li>
        <li>ESLint - JS linter (only in dev)</li>
        <li>Jest - testing framework</li>
        <li>Routing - access <nuxt-link exact to="/admin">admin page</nuxt-link> when logged in</li>
      </ul>
    </v-card-text>
    <v-card-actions v-if="!user" class="flex-column">
      <p class="text-center">
        Log in with Google
      </p>
      <v-icon @click="login" class="ma-1" large color="orange darken-2">
        mdi-google
      </v-icon>
    </v-card-actions>
    <v-card-actions v-else class="flex-column">
      <p class="text-center">
        You are logged in!
      </p>
      <v-hover :value="true">
        <nuxt-link exact to="/admin">
          Admin page
        </nuxt-link>
      </v-hover>
    </v-card-actions>
    <v-card-text class="red darken-2 text-center" v-if="authError">
      {{authError}}
    </v-card-text>
  </v-card>
</template>

<script>
import { firebaseAuth, googleAuthProvider } from '@/services/firebase-auth'

export default {
  data () {
    return {
      authError: null
    }
  },
  computed: {
    user () {
      return this.$store.state.user.userInfo
    }
  },
  methods: {
    login () {
      firebaseAuth.signInWithPopup(googleAuthProvider).then((result) => {
        const userInfo = {
          uid: result.user.uid,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          email: result.user.email
        }
        this.$store.dispatch('user/login', userInfo)
      }).catch((error) => {
        this.authError = error
      })
    }
  }
}
</script>

<style scoped>
.v-card__title {
  word-break: initial;
}
</style>>
