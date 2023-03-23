<script setup lang="ts">
import Logo from './Logo.vue'
import navigation from '@/navigation'
import { ref, onMounted } from 'vue'

const whenScroll = () => {
  const nav = document.getElementById('navigation')
  const sticky = nav?.offsetTop
  console.log(sticky)
  console.log('scrollY: ', window.scrollY)
  if (sticky !== undefined && nav) {
    if (window.scrollY >= sticky) {
      nav.classList.add('sticky')
    } else {
      nav.classList.remove('sticky')
    }
  }
}

onMounted(() => {
  window.onscroll = () => whenScroll()
})
</script>

<template>
  <div class="w-full h-3 bg-brand-black"></div>
  <nav
    id="navigation"
    class="w-full bg-brand-black h-16 transition-all duration-500 ease z-50"
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
            class="uppercase font-semibold pt-3 text-2xl text-brand-blue hover:text-brand-purple hover:scale-[1.05] transition-all duration-500 ease"
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

<style>
.sticky {
  position: fixed;
  top: 0 !important;
  background-color: #f4f4f5 !important;
}

.sticky + .content {
  padding-top: 32px;
}
</style>
