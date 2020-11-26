<template>
  <div>
    <div class="relative bg-black">
      <div class="absolute inset-0">
        <div class="absolute inset-y-0 left-0 w-1/2 bg-black"></div>
      </div>
      <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
        <div
          class="px-4 py-16 bg-black sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
        >
          <div class="max-w-lg mx-auto">
            <h2
              class="text-2xl font-extrabold leading-8 tracking-tight text-gray-100 sm:text-3xl sm:leading-9"
            >
              Get in touch
            </h2>
            <p class="mt-3 text-lg leading-6 text-gray-300">
              Our customer support team is ready to assist you.
            </p>
            <dl class="mt-8 text-base leading-6 text-gray-500">
              <div>
                <dt class="sr-only">Postal address</dt>
                <dd>
                  <p>Zuhtupasa Mah. Sefikbey Sk. No:3</p>
                  <p>Kadikoy, Istanbul</p>
                </dd>
              </div>
              <div class="mt-6">
                <dt class="sr-only">Phone number</dt>
                <dd class="flex">
                  <!-- Heroicon name: phone -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span class="ml-3"> +90 216 912 00 96 </span>
                </dd>
              </div>
              <div class="mt-3">
                <dt class="sr-only">Email</dt>
                <dd class="flex">
                  <!-- Heroicon name: mail -->
                  <svg
                    class="flex-shrink-0 w-6 h-6 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="ml-3"> info@uaboost.com </span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div
          class="px-4 py-16 bg-gray-100 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"
        >
          <div class="max-w-lg mx-auto lg:max-w-none">
            <form
              id="uaboost-contact"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              enctype="application/x-www-form-urlencoded"
              class="grid grid-cols-1 gap-y-6"
              @submit.prevent="handleFormSubmit"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div>
                <label for="full_name" class="sr-only">Full name</label>
                <div class="relative rounded-md shadow-sm">
                  <input
                    id="full_name"
                    v-model="formData.userFullname"
                    name="userFullname"
                    class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                    placeholder="Full name"
                  />
                </div>
              </div>
              <div>
                <label for="email" class="sr-only">Email</label>
                <div class="relative rounded-md shadow-sm">
                  <input
                    id="email"
                    v-model="formData.userEmail"
                    name="userEmail"
                    type="email"
                    class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <label for="phone" class="sr-only">Phone</label>
                <div class="relative rounded-md shadow-sm">
                  <input
                    id="phone"
                    v-model="formData.userPhone"
                    name="userPhone"
                    class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div>
                <label for="message" class="sr-only">Message</label>
                <div class="relative rounded-md shadow-sm">
                  <textarea
                    id="message"
                    v-model="formData.userMessage"
                    name="userMessage"
                    rows="4"
                    class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div class="">
                <span class="inline-flex rounded-md shadow-sm">
                  <button
                    type="submit"
                    class="inline-flex justify-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md hover:bg-gray-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                  >
                    Submit
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      formData: {
        userEmail: null,
        userFullname: null,
        userPhone: null,
        userMessage: null
      }
    }
  },

  methods: {
    encode(data) {
      const formData = new FormData()

      for (const key of Object.keys(data)) {
        formData.append(key, data[key])
      }

      return formData
    },

    handleFormSubmit(e) {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }

      axios
        .post(
          location.href,
          this.encode({
            'form-name': e.target.getAttribute('name'),
            ...this.formData
          }),
          axiosConfig
        )
        .then((data) => console.log(data))
        .catch((error) => console.log(error))
        .then(
          (document.getElementById('uaboost-contact').innerHTML = `
            <div>
                Thank you! We received your request.
            </div>
            `)
        )
    }
  }
}
</script>
