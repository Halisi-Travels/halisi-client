<template>
  <div id="application-page">
    <header
      class="relative h-[50vh] bg-gray-600 text-white flex items-center justify-center"
    >
      <p class="page-title font-bold md:text-4xl text-3xl">Applicant Details</p>
    </header>

    <main class="mt-10 mb-20">
      <form @submit.prevent="apply">
        <section class="w-11/12 lg:w-8/12 mx-auto">
          <div class="flex justify-between py-5 text-gray-400">
            <h4 class="text-xl font-semibold">Your Name</h4>
            <div class="w-3/4">
              <input v-model="name" type="text" name="name" id="name" />
            </div>
          </div>

          <hr />

          <div class="flex justify-between py-5 text-gray-400">
            <h4 class="text-xl font-semibold">Your Email</h4>
            <div class="w-3/4">
              <input v-model="email" type="email" name="email" id="email" />
            </div>
          </div>

          <hr />

          <div class="flex justify-between py-5 text-gray-400">
            <h4 class="text-xl font-semibold">Your Phone</h4>
            <div class="w-3/4">
              <input v-model="phone" type="phone" name="phone" id="phone" />
            </div>
          </div>

          <hr />

          <div class="flex justify-between py-5 text-gray-400">
            <h4 class="text-xl font-semibold">Country</h4>
            <div class="w-3/4">
              <input
                v-model="country"
                type="text"
                name="country"
                id="country"
              />
            </div>
          </div>

          <hr />

          <div class="flex justify-between py-5 text-gray-400">
            <h4 class="text-xl font-semibold">Message</h4>
            <div class="w-3/4">
              <textarea
                v-model="message"
                type="text"
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Describe the services you want and we'll be happy to assist"
              ></textarea>
            </div>
          </div>
        </section>

        <section
          class="submit-btn w-11/12 lg:w-8/12 mx-auto flex flex-col md:flex-row gap-4 justify-between mt-10"
        >
          <button
            name="submit"
            type="submit"
            :disabled="loading"
            class="bg-primary rounded flex-initial lg:w-[180px] px-4 py-2 text-white font-semibold uppercase hover:bg-secondary transition-all duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            SEND
          </button>

          <div
            v-if="showSuccessMessage"
            class="p-3 bg-green-200 text-green-700 border-r-4 border-green-700 md:w-10/12 lg:w-1/2 font-bold uppercase text-sm text-right"
          >
            Your details have been submitted succesfully
          </div>
        </section>
      </form>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ServicesApplyPage",

  data() {
    return {
      showSuccessMessage: false,

      name: "",
      email: "",
      phone: "",
      message: "",
      country: "",
    };
  },

  computed: {
    ...mapGetters(["error", "loading"]),
  },

  methods: {
    ...mapActions(["sendApplication"]),

    async apply() {
      const emailData = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
        country: this.country,
      };

      await this.sendApplication(emailData);

      if (!this.error) {
        this.showSuccessMessage = true;

        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 2000);
      }
    },
  },
};
</script>

<style scoped lang="scss">
input,
textarea {
  border: 2px solid rgb(205, 205, 205);
  padding: 10px 10px;
  border-radius: 5px;
  color: black;
  width: 100%;
  &:focus {
    outline: none;
  }
}

textarea {
  resize: none;
}
</style>
