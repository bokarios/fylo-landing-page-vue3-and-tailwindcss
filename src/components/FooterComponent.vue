<script setup lang="ts">
import FacebookIcon from './icons/FacebookIcon.vue'
import TwitterIcon from './icons/TwitterIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'
</script>

<template>
  <div class="w-full bg-footer relative">
    <div class="flex justify-center w-full absolute -top-36">
      <div
        class="flex flex-col items-center bg-intro px-8 lg:px-20 py-10 lg:py-14 rounded-lg shadow-sign-up w-5/6 lg:w-4/6 xl:w-3/6"
      >
        <h2 class="text-lg lg:text-4xl text-brand-white font-bold mb-6">
          Get early access today
        </h2>
        <p
          class="text-gray-300 text-sm lg:text-[16px] font-light text-center px-0 lg:px-6 mb-8"
        >
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div class="flex flex-col lg:flex-row lg:items-center w-full gap-8">
          <input
            type="text"
            class="flex-1 h-[52px] rounded-full px-10 text-xs lg:text-sm py-4 lg:py-0"
            placeholder="email@example.com"
          />
          <button
            class="text-sm text-brand-white font-medium py-4 px-12 rounded-full cta-gradient"
          >
            Get Started For Free
          </button>
        </div>
      </div>
    </div>
    <div class="w-full px-6 md:px-24 lg:px-32 pt-80 lg:pt-64 pb-16">
      <div class="w-full mb-10">
        <img src="/images/logo.svg" class="w-auto" alt="logo" />
      </div>
      <div class="flex flex-col lg:flex-row lg:justify-between w-full">
        <div class="flex gap-6 w-full lg:w-4/12 mb-4 lg:mb-0">
          <img
            src="/images/icon-location.svg"
            class="h-5 mt-3"
            alt="location icon"
          />
          <p class="text-gray-300 font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, eum
            ab! Perferendis distinctio praesentium voluptas
          </p>
        </div>
        <div class="flex flex-col gap-3 mb-20 lg:mb-0">
          <div class="flex items-center gap-6">
            <img src="/images/icon-phone.svg" class="w-auto" alt="phone icon" />
            <h4 class="text-gray-300 font-light">+1-543-123-4567</h4>
          </div>
          <div class="flex items-center gap-6">
            <img src="/images/icon-email.svg" class="w-auto" alt="phone icon" />
            <h4 class="text-gray-300 font-light">example@fylo.com</h4>
          </div>
        </div>
        <div class="flex flex-col gap-3 mb-20 lg:mb-0">
          <a href="#" class="text-gray-300 font-light hover:text-brand-white"
            >About Us</a
          >
          <a href="#" class="text-gray-300 font-light hover:text-brand-white"
            >Jobs</a
          >
          <a href="#" class="text-gray-300 font-light hover:text-brand-white"
            >Press</a
          >
          <a href="#" class="text-gray-300 font-light hover:text-brand-white"
            >Blog</a
          >
        </div>
        <div class="flex flex-col gap-3 mb-20 lg:mb-0">
          <a href="#" class="text-gray-300 font-light hover:text-brand-white"
            >Contact Us</a
          >
          <a href="#" class="text-gray-300 font-light hover:text-brand-white"
            >Terms</a
          >
          <a href="#" class="text-gray-300 font-light hover:text-brand-white"
            >Privacy</a
          >
        </div>
        <div class="flex justify-center lg:justify-start gap-4">
          <a
            href="#Facebook"
            class="flex justify-center items-center w-9 h-9 aspect-square rounded-full border border-gray-300 text-brand-white font-bold hover:text-teal-300 hover:border-teal-300"
          >
            <FacebookIcon class="w-4" />
          </a>
          <a
            href="#Twitter"
            class="flex justify-center items-center w-9 h-9 aspect-square rounded-full border border-gray-300 text-brand-white font-bold hover:text-teal-300 hover:border-teal-300"
          >
            <TwitterIcon class="w-4" />
          </a>
          <a
            href="#Instagram"
            class="flex justify-center items-center w-9 h-9 aspect-square rounded-full border border-gray-300 text-brand-white font-bold hover:text-teal-300 hover:border-teal-300"
          >
            <InstagramIcon class="w-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
