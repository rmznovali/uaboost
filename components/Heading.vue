<template>
  <div>
    <div class="relative bg-black overflow-hidden md:h-screen">
      <div class="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div class="relative max-w-screen-xl mx-auto">
          <svg
            class="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-700"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-700"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>
      <Logo />

      <div class="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <main
          class="mt-10 mx-auto h-full max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28"
        >
          <div class="text-center">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-100 sm:text-5xl sm:leading-none md:text-6xl"
            >
              Innovation Based
              <br class="xl:hidden" />
              <span
                class="bg-gradient-to-r from-yellow-400 via-yellow-600 to-red-700 bg-clip-text text-transparent"
                >High Growth</span
              >
            </h2>
            <p
              class="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            >
              UABoost is a self-service platform for Mobile Gaming UA Ad
              Creatives. We predict & optimize Ad Creative performance on Mobile
              Gaming UA to minimize UA costs & maximize UA ROI
            </p>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo,
  },
}
</script>

<style lang="scss" scoped></style>
