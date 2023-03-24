<script setup lang="ts"></script>

<template>
  <div class="hero h-screen w-full relative">
    <div
      class="logo-shape absolute top-0 left-0 w-full h-full bg-[#004aad99] z-10 flex justify-center items-center"
    >
      <div class="flex flex-col items-start justify-start gap-10 w-2/3">
        <p class="text-6xl text-gray-300">
          Join egoistic strikers,<br />
          and find your <span class="italic">egoism</span>
        </p>
        <button
          type="button"
          class="h-10 px-6 pt-1 uppercase text-white text-2xl bg-brand-purple hover:saturate-150 hover:scale-x-[1.07] hover:scale-y-[1.05] transition-all duration-500 ease"
        >
          find your ego
        </button>
      </div>
    </div>
    <img
      src="/img/blue-lock-hero-crop.jpg"
      class="w-full h-full object-center object-cover"
      alt="hero"
    />
    <div
      class="next absolute bottom-10 left-1/2 w-12 h-28 border-4 border-brand-black rounded-t-full rounded-b-full"
    >
      <img
        src="/img/soccer_ball.webp"
        class="w-full aspect-square animate-spin"
        alt="ball"
      />
    </div>
  </div>
</template>
