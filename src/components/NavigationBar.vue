<script setup lang="ts">
import Logo from './Logo.vue'
import navigation from '@/navigation'
import { ref, onMounted } from 'vue'

const whenScroll = () => {
  const nav = document.getElementById('navigation')
  const sticky = nav?.offsetTop

  if (sticky !== undefined && nav) {
    if (window.scrollY >= sticky) {
      nav.classList.add('sticky')
      nav.classList.remove('hero-gradient')
    } else {
      nav.classList.remove('sticky')
      nav.classList.add('hero-gradient')
    }
  }
}

onMounted(() => {
  window.onscroll = () => whenScroll()
})
</script>

<template>
  <div class="w-full h-5 hero-gradient"></div>
  <nav
    id="navigation"
    class="flex items-center w-full bg-brand-black h-16 transition-all duration-500 ease-in-out z-50 hero-gradient"
  >
    <div class="container pr-8 mx-auto">
      <div class="flex justify-between items-center">
        <router-link :to="{ name: 'home' }">
          <Logo />
        </router-link>
        <div class="flex items-center gap-8">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="{ name: item.route }"
            class="uppercase font-semibold pt-2 text-2xl text-brand-blue hover:text-brand-purple hover:scale-[1.05] transition-all duration-500 ease"
            >{{ item.name }}</router-link
          >
        </div>
        <div>
          <button
            type="button"
            class="h-10 px-6 pt-1 uppercase text-white text-2xl bg-brand-purple hover:saturate-150 hover:scale-x-[1.07] hover:scale-y-[1.05] transition-all duration-500 ease"
          >
            feed your ego
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
