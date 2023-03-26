<script setup lang="ts">
import { ref } from 'vue'

const classes = ref([
  {
    id: 1,
    name: 'egoistic dribbling',
    desc: 'Enjoy dribbling with the ball, and pass opponent with amazing skills. This class is for you, join Bachira Miguru and Neymar Jr., and be the most talented dribbler in the world.',
    tags: ['One on One', 'Elastico', 'La Croqueta', 'Assertive Run'],
    instructorsPhrase: 'with the most egoistic dribblers',
    instructors: [
      {
        id: 1,
        name: 'Neymar Jr.',
        image: '/img/neymar.png',
      },
      {
        id: 2,
        name: 'Bachira Miguru',
        image: '/img/bachira.jpg',
      },
    ],
    cover: '/img/neymar-cover.png',
    active: true,
  },
  {
    id: 2,
    name: 'spatial awareness',
    desc: 'In this class you learn, how to use your spatial awareness, and find your goal equation, by position yourself in the right place to score the goal.',
    tags: ['Positioning', 'Run with the ball', 'Run off the ball', 'Deception'],
    instructorsPhrase: 'with the most high awareness strikers',
    instructors: [
      {
        id: 1,
        name: 'Thomas Muller',
        image: '/img/muller.jpg',
      },
      {
        id: 2,
        name: 'Issagi Yoichi',
        image: '/img/isagi.jpg',
      },
    ],
    cover: '/img/muller-cover.png',
    active: false,
  },
])

const activeClass = ref(classes.value[0])

const switchActive = (idx: number) => {
  console.log('index: ', idx)
  classes.value.map((item, index) => {
    if (index === idx) {
      item.active = true
    } else {
      item.active = false
    }
  })
  activeClass.value = classes.value[idx]
}
</script>

<template>
  <div
    id="top-classes"
    class="top-classes w-full bg-brand-purple overflow-hidden"
  >
    <div class="container px-8 mx-auto h-full">
      <div class="flex flex-col h-full">
        <div class="flex w-full h-2/3 flex-[0.5]">
          <div class="flex-[0.7] h-full flex flex-col justify-center gap-5">
            <h2 class="capitalize text-5xl text-gray-100 font-medium">
              {{ activeClass.name }}
            </h2>
            <p class="text-xl text-gray-200">
              {{
                activeClass.desc.length > 80
                  ? activeClass.desc.slice(0, 80) + '...'
                  : activeClass.desc
              }}
            </p>
            <div class="flex items-center flex-wrap gap-3">
              <div
                v-for="(tag, idx) in activeClass.tags"
                :key="idx + '-tag'"
                class="flex justify-center items-center h-9 text-lg text-gray-200 px-5 pt-1 border border-white rounded-full"
              >
                {{ tag }}
              </div>
            </div>
            <div class="w-full mt-4">
              <h4 class="text-2xl font-medium text-white mb-2">
                {{ activeClass.instructorsPhrase }}
              </h4>
              <div class="flex items-center">
                <div
                  v-for="instructor in activeClass.instructors"
                  :key="instructor.id + '-instructor'"
                  class="w-24 aspect-square rounded-full p-1 bg-white overflow-hidden -ml-9 first:ml-0"
                >
                  <div
                    class="w-full aspect-square hero-gradient rounded-full overflow-hidden"
                    :title="instructor.name"
                  >
                    <img
                      :src="instructor.image"
                      class="w-full aspect-square object-center object-cover rounded-full"
                      :alt="instructor.name"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex w-full gap-3 mt-5">
              <button
                class="h-10 px-6 pt-1 uppercase text-brand-purple text-2xl bg-white hover:saturate-150 hover:scale-x-[1.07] hover:scale-y-[1.05] transition-all duration-500 ease"
              >
                join the class
              </button>
              <button
                class="h-10 px-6 pt-1 uppercase text-white text-2xl border border-white hover:saturate-150 hover:scale-x-[1.07] hover:scale-y-[1.05] transition-all duration-500 ease"
              >
                learn more
              </button>
            </div>
          </div>
          <div class="flex-[0.3]">
            <img
              :src="activeClass.cover"
              class="h-full object-contain object-right"
              alt=""
            />
          </div>
        </div>
        <div class="flex-[0.5] h-1/3">
          <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5">
            <div
              v-for="(item, idx) in classes"
              :key="item.id + '-class'"
              class="flex flex-col gap-3 p-4 cursor-pointer"
              @click="switchActive(idx)"
            >
              <h2 class="text-2xl font-medium text-white capitalize">
                {{ item.name }}
              </h2>
              <p class="text-gray-200">
                {{
                  item.desc.length > 60
                    ? item.desc.slice(0, 60) + '...'
                    : item.desc
                }}
              </p>
              <div class="w-full mt-1">
                <h4 class="text-lg font-medium text-white mb-2">
                  {{ item.instructorsPhrase }}
                </h4>
                <div class="flex items-center">
                  <div
                    v-for="instructor in item.instructors"
                    :key="instructor.id + '-class-instructor'"
                    class="w-12 aspect-square rounded-full p-1 bg-white overflow-hidden -ml-4 first:ml-0"
                  >
                    <div
                      class="w-full aspect-square hero-gradient rounded-full overflow-hidden"
                      :title="instructor.name"
                    >
                      <img
                        :src="instructor.image"
                        class="w-full aspect-square object-center object-cover rounded-full"
                        :alt="instructor.name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center">
                <button
                  class="h-10 px-6 pt-1 uppercase text-white text-2xl border border-white hover:saturate-150 hover:scale-x-[1.07] hover:scale-y-[1.05] transition-all duration-500 ease"
                >
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
