<template>
  <v-card id="login-form" width="450" class="mx-auto mt-5">
    <v-card-title class="justify-center text-center">
      Admin Panel
    </v-card-title>
    <v-card-actions class="flex-column">
      <nuxt-link to="/" class="mb-3">
        Go homepage
      </nuxt-link>
      <a @click="logout" href="/">
        Log out
      </a>
    </v-card-actions>
  </v-card>
</template>

<script>
import { firebaseAuth } from '@/services/firebase-auth'

export default {
  methods: {
    logout () {
      this.$store.dispatch('user/logout').then(() => {
        firebaseAuth.signOut()
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>
