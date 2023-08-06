<script setup lang="ts">
let list = [
  {
    id: 1,
    name: 'Satish Patel',
    avatar: 'profile-1.jpg',
    job: 'Founder & CEO',
    company: 'Huddle',
    content:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
  {
    id: 2,
    name: 'Bruce Mckenzie',
    avatar: 'profile-2.jpg',
    job: 'Founder & CEO',
    company: 'Huddle',
    content:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
  {
    id: 3,
    name: 'Eva Boyd',
    avatar: 'profile-3.jpg',
    job: 'Founder & CEO',
    company: 'Huddle',
    content:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  },
]
</script>

<template>
  <div class="w-full px-10 md:px-24 lg:px-32 mb-96 relative">
    <img
      src="/images/bg-quotes.png"
      class="w-6 lg:w-auto absolute -top-4 lg:-top-8 lg:left-28 z-[-1]"
      alt="quotes"
    />
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
      <div v-for="item in list" :key="item.id">
        <div
          class="w-full bg-testimonials shadow-testimonials rounded-sm p-8 pt-10"
        >
          <p class="text-gray-200 text-sm lg:text-[16px] font-light mb-6">
            {{ item.content }}
          </p>
          <div class="flex items-center gap-2">
            <img
              :src="`/images/${item.avatar}`"
              class="w-7 aspect-square rounded-full"
              alt="avatar"
            />
            <div class="flex flex-col">
              <h3 class="text-xs text-brand-white font-medium">
                {{ item.name }}
              </h3>
              <h4 class="text-[10px] text-gray-300 font-light">
                {{ item.job }}, {{ item.company }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
