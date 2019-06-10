<template>
  <v-container grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex v-for="(member, i) in team" :key="i" xs12 sm6 md4 lg3>
        <!-- <getting-started-member :value="member" /> -->
        <v-card flat class="text-xs-center" ma-3>
          <v-responsive class="pt-4">
            <v-avatar size="100">
              <img :src="member.avatar" />
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{ member.name }}</div>
            <div>{{ member.role }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" flat nuxt to="/contact">CONTACT</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    team: [
      {
        avatar: '~/assets/andre-kradolfer.png',
        name: 'André Kradolfer',
        role: 'Software Engineer'
      },
      {
        avatar: '../assets/dave-welch.png',
        name: 'Dave Welch',
        role: 'Software Engineer'
      },
      {
        avatar: '~/assets/jake-badger.png',
        name: 'Jake Badger',
        role: 'Software Engineer'
      },
      {
        avatar: '~/assets/jon-sheppard.png',
        name: 'Jon Sheppard',
        role: 'Product Manager'
      },
      {
        avatar: '~/assets/josh-young.png',
        name: 'Josh Young',
        role: 'Software Engineer'
      },
      {
        avatar: '~/assets/malia-bradburn.png',
        name: 'Malia Bradburn',
        role: 'Operations Manager'
      },
      {
        avatar: '~/assets/seth-back.png',
        name: 'Seth Back',
        role: 'Software Engineer'
      }
    ]
  })
}
</script>

<style></style>
