<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar id="d1">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          
        />

        
        <div class="q-px-lg q-pt-md q-mb-md">
          <div class="text-h4 ">welcome to anime</div>
          <div class="text-subtitle1">{{todaysDate}}</div>
        </div>
      </q-toolbar>
        <q-img 
          src="https://c4.wallpaperflare.com/wallpaper/158/122/422/anime-anime-boys-jujutsu-kaisen-yuji-itadori-sakuna-hd-wallpaper-preview.jpg"
          class="header-image absolute-center"
          >
          
        </q-img>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item 
              to="/Index"
              exact
              clickable 
              v-ripple>
              <q-item-section avatar>
                <q-icon name="live_tv" />
              </q-item-section>

              <q-item-section>
                to watch list
              </q-item-section>
            </q-item>

            <q-item to="/Star" exact active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                top 5 anime
              </q-item-section>
            </q-item>

            <q-item to="/send" exact clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="accessibility_new" />
              </q-item-section>

              <q-item-section>
                character
              </q-item-section>
            </q-item>

            
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://image.freepik.com/free-vector/white-abstract-background_23-2148810113.jpg" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="70px" class="q-m-sm ">
              <img src="https://wallpaperaccess.com/full/5252295.jpg">
            </q-avatar>
            <div class="text-weight-bold" style="color:black">NAYU COE</div>
            <div style="color:black" >@Nayu_Coe</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <keep-alive>
      <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'
import { date } from 'quasar'

export default defineComponent({
  name: 'MainLayout',
  data(){
    return {
      leftDrawerOpen: false
    }
  },
  computed:{
    todaysDate() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM')
    }
  },

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="scss">
 .header-image{
   height: 100%;
   z-index: -1;
   opacity: 100;
   filter: grayscale(100%);
 }

</style>

