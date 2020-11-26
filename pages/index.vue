<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div>
    <Heading />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Contact from '@/components/Contact.vue'
import Footer from '@/components/Footer.vue'
import Heading from '@/components/Heading.vue'
export default {
  components: {
    Contact,
    Footer,
    Heading,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
