<template>
  <div id="contact-page">
    <header
      class="h-[50vh] bg-cover bg-center text-white flex items-center justify-center"
    ></header>

    <main>
      <div
        class="contact-div flex md:flex-row flex-col gap-14 justify-around md:w-11/12 mx-auto my-12"
      >
        <div class="info flex flex-col gap-10">
          <section class="contact-info flex flex-col gap-2 mx-3 md:mx-0">
            <p class="section-title text-3xl font-semibold mb-3 text-primary">
              Contact Info
            </p>
            <div class="flex gap-1">
              <p class="font-semibold">Head Office Address:</p>
              <div>
                <p>
                  Cianda Hse 10th Flr, Suite 1011 <br />
                  Koinange Str, Opp CJ's Restaurant Nairobi Kenya
                </p>
              </div>
            </div>
            <div class="flex gap-1">
              <p class="font-semibold">Email:</p>
              <div>
                <p>bookings@halisitravels.com</p>
                <p>jobs@halisitravels.com</p>
              </div>
            </div>
            <div class="flex gap-1">
              <p class="font-semibold">Tel:</p>
              <div class="flex gap-1">
                <p>0745313519,</p>
                <p>0747393209,</p>
                <p>0797385816</p>
              </div>
            </div>
          </section>

          <section class="business-hours flex flex-col gap-2 mx-3 md:mx-0">
            <p class="section-title text-3xl font-semibold mb-3 text-primary">
              Business Hours
            </p>
            <p>
              <span class="font-semibold">Monday - Friday: </span>8.00am -
              5.00pm
            </p>
            <p>
              <span class="font-semibold">Saturday & Sunday: </span>11.00am -
              3.00pm
            </p>
          </section>

          <secion class="social-media mx-3 md:mx-0">
            <p class="section-title text-3xl font-semibold mb-3 text-primary">
              Social Media
            </p>

            <ul class="flex gap-6 text-xl">
              <li
                class="rounded-full bg-secondary/20 h-[40px] w-[40px] flex items-center justify-center"
              >
                <a
                  aria-label="whatsapp channel for Halisi"
                  href="https://whatsapp.com/channel/0029VaLOeK4HVvTYWRSC6v28"
                  target="_blank"
                >
                  <i class="bx bxl-whatsapp text-black text-2xl"></i>
                </a>
              </li>

              <li
                class="rounded-full bg-secondary/20 h-[40px] w-[40px] flex items-center justify-center"
              >
                <a
                  aria-label="tiktok channel for Halisi"
                  href="https://www.tiktok.com/@halisi.travel"
                  target="_blank"
                >
                  <i class="bx bxl-tiktok text-black text-2xl"></i>
                </a>
              </li>

              <li
                class="rounded-full bg-secondary/20 h-[40px] w-[40px] flex items-center justify-center"
              >
                <a
                  aria-label="instagram account for Halisi"
                  href="https://www.instagram.com/halisi.travels"
                  target="_blank"
                >
                  <i class="bx bxl-instagram text-black text-2xl"></i>
                </a>
              </li>
            </ul>
          </secion>

          <section class="map h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8175055376323!2d36.81569657421936!3d-1.2833555987044385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3dd7dfc47%3A0xfd9e361041633eb7!2sCianda%20House!5e0!3m2!1sen!2ske!4v1722362238548!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>

        <form
          ref="form"
          class="form w-11/12 mx-auto lg:w-5/12 flex flex-col gap-6"
          @submit.prevent="sendEmail"
        >
          <p class="section-title text-3xl font-semibold text-primary">
            Feedback Form
          </p>

          <div>
            <label for="name">Full Name</label>
            <input v-model="name" type="name" name="name" id="name" required />
          </div>

          <div>
            <label for="phone">Phone Number</label>
            <input
              v-model="phone"
              type="text"
              name="phone"
              id="phone"
              required
            />
          </div>

          <div>
            <label for="email">Email Address</label>
            <input
              v-model="email"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>

          <div>
            <label for="subject">Subject</label>
            <input
              v-model="subject"
              type="text"
              name="subject"
              id="subject"
              required
            />
          </div>

          <div>
            <label for="name">Message</label>

            <textarea
              name="message"
              v-model="message"
              id="message"
              required
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div
            v-if="error"
            class="p-3 bg-red-200 text-red-700 border-r-4 border-red-700 w-full font-bold uppercase text-sm text-right"
          >
            {{ error }}
          </div>

          <div
            v-if="showSuccess"
            class="p-3 bg-green-200 text-green-700 border-r-4 border-green-700 w-full font-bold uppercase text-sm text-right"
          >
            Your has been submitted succesfully
          </div>

          <button
            name="submit feedback"
            type="submit"
            :disabled="loading"
            class="bg-primary rounded flex-initial lg:w-1/2 px-4 py-2 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      showSuccess: false,
    };
  },

  computed: {
    ...mapGetters(["error", "loading"]),
  },

  mounted() {
    useHead({
      title: "Contact Us | Halisi Travels",
      meta: [
        {
          name: "description",
          content:
            "Get in touch with us or give us feedback on your experience with our company",
        },
        {
          property: "og:title",
          content: "Contact Us | Halisi Travels",
        },
      ],
    });
  },

  methods: {
    ...mapActions(["sendFeedback"]),

    async sendEmail() {
      var data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        subject: this.subject,
        message: this.message,
      };

      await this.sendFeedback(data);

      if (!this.error) {
        this.showSuccess = true;

        setTimeout(() => {
          this.showSuccess = false;

          this.email = "";
          this.name = "";
          this.phone = "";
          this.subject = "";
          this.message = "";
        }, 3000);
      }
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background-image: url("@/assets/images/contact_b.webp");
}

label {
  display: block;
}

input,
textarea {
  width: 100%;
  border: 2px solid rgb(192, 192, 192);
  padding: 10px;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
}

textarea {
  resize: none;
}
</style>
