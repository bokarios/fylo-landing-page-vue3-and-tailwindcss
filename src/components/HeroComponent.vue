<script setup lang="ts"></script>

<template>
  <div
    class="relative w-full h-auto lg:h-[65vh] xl:h-[80vh] bg-brand-intro overflow-hidden"
  >
    <img
      src="/images/bg-curvy-desktop.svg"
      class="absolute bottom-0 xl:scale-[200%]"
      alt=""
    />
    <div
      class="flex flex-col items-center w-full relative px-6 md:px-20 lg:px-0"
    >
      <img
        src="/images/illustration-intro.png"
        class="w-full lg:w-1/3"
        alt=""
      />
      <h2 class="text-center text-3xl text-brand-white font-medium mt-4">
        All your files in one secure location, <br class="hidden md:block" />
        accessible anywhere.
      </h2>
      <p class="text-center text-sm text-gray-300 mt-5 w-full lg:w-1/3">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button
        class="text-sm text-brand-white font-medium py-4 px-24 rounded-full cta-gradient mt-8"
      >
        Get Started
      </button>
    </div>
  </div>
</template>
