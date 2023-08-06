<script setup lang="ts">
let features = [
  {
    id: 1,
    title: 'Access your files, anywhere',
    content:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
    icon: 'icon-access-anywhere.svg',
  },
  {
    id: 2,
    title: 'Security you can trust',
    content:
      '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
    icon: 'icon-security.svg',
  },
  {
    id: 3,
    title: 'Real-time collaboration',
    content:
      'Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.',
    icon: 'icon-collaboration.svg',
  },
  {
    id: 4,
    title: 'Store any type of file',
    content:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to securely stored and shared.",
    icon: 'icon-any-file.svg',
  },
]
</script>

<template>
  <section class="px-6 md:px-24 lg:px-32 pb-32 md:mt-16">
    <div class="flex justify-center items-center w-full">
      <div class="flex flex-col md:flex-row md:flex-wrap w-full lg:w-2/3">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="flex justify-center items-center w-full md:w-1/2 p-12 md:p-8 lg:p-12"
        >
          <div class="flex flex-col items-center">
            <img :src="`/images/${feature.icon}`" class="w-auto mb-5" alt="" />
            <h2 class="text-center text-brand-white font-bold mb-1">
              {{ feature.title }}
            </h2>
            <p class="text-center text-brand-white text-xs font-light w-full">
              {{ feature.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row lg:items-center gap-16 w-full mt-10">
      <div class="flex justify-end flex-[0.5]">
        <img
          src="/images/illustration-stay-productive.png"
          class="w-full"
          alt=""
        />
      </div>
      <div class="flex-[0.5] w-full">
        <h2 class="text-xl lg:text-5xl text-brand-white font-medium mb-5">
          Stay productive,<br class="hidden lg:block" />
          wherever you are
        </h2>
        <p class="text-sm text-brand-white font-light mb-4">
          Never let location be an issue when accessing your files, Fylo has you
          covered for all of your file storage needs.
        </p>
        <p class="text-sm text-brand-white font-light mb-5">
          Securely share files and folders with friends, family, and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div
          class="text-sm text-[#55bcb8] cursor-pointer hover:text-brand-white group w-fit"
        >
          <div
            class="flex gap-2 border-b border-b-[#55bcb8] group-hover:border-b-gray-300 pb-1"
          >
            <p>See how Fylo works</p>
            <img
              src="/images/icon-arrow.svg"
              class="w-auto group-hover:grayscale"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
