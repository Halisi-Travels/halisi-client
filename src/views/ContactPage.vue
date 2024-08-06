<template>
  <div id="contact">
    <header class="flex flex-col">
      <app-navbar />

      <div
        class="mt-auto bg-black/60 py-10 px-10 text-white backdrop-blur-lg border-y-4 border-secondary"
      >
        <p
          class="page-title text-2xl md:text-4xl font-bold mb-3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          ABOUT US
        </p>
        <p data-aos="fade-up" data-aos-duration="2900">
          Let’s Discuss Your Career Goals
        </p>
      </div>
    </header>

    <main class="px-4 md:mx-0 md:mt-4">
      <div
        class="contact-div flex md:flex-row flex-col gap-14 justify-around md:w-10/12 mx-auto my-12"
      >
        <div class="info flex flex-col gap-10">
          <div class="contact-info flex flex-col gap-2">
            <p class="section-title text-3xl font-semibold mb-3 text-primary">
              Contact Info
            </p>
            <p>
              <span class="font-semibold">Phone number: </span>
              +254745313519/+254747393209
            </p>
            <p>
              <span class="font-semibold">Email: </span
              >customerhappiness@halisitravels.com
            </p>
            <p>
              <span class="font-semibold">Head Office Address: </span>10th Flr,
              Cianda House. <br />
              Koinange Str, Nairobi
            </p>
          </div>

          <div class="business-hours flex flex-col gap-2">
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
          </div>

          <div class="business-hours">
            <p class="section-title text-3xl font-semibold mb-3 text-primary">
              Social Media
            </p>
            <ul class="flex gap-4">
              <li>
                <a
                  href="https://whatsapp.com/channel/0029VaLOeK4HVvTYWRSC6v28"
                  target="_blank"
                >
                  <i class="ri-whatsapp-line text-xl text-black"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/halisi.travels?igsh=MW5pOW9iMDVweHZjcA=="
                  target="_blank"
                >
                  <i class="ri-instagram-line text-xl text-black"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@halisi.travel?_t=8oQ56X8R61d&_r=1"
                  target="_blank"
                >
                  <i class="ri-tiktok-line text-xl text-black"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="map bg-red-400 h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8175055376323!2d36.81569657421936!3d-1.2833555987044385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d3dd7dfc47%3A0xfd9e361041633eb7!2sCianda%20House!5e0!3m2!1sen!2ske!4v1722362238548!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <form class="form md:w-5/12" @submit.prevent="">
          <p class="section-title text-3xl font-semibold mb-3 text-primary">
            Feedback Form
          </p>
          <label for="name">Your name</label>
          <input type="text" name="name" />

          <label for="email">Your email</label>
          <input type="email" name="email" />

          <label for="subject">Subject</label>
          <input type="text" name="subject" />

          <label for="name">Your name</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>

          <button type="submit" class="bg-secondary rounded">SUBMIT</button>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  name: "HomePage",

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
};
</script>

<style scoped lang="scss">
header {
  background-image: url("../assets/images/contact-us.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 60vh;
}

@media screen and (min-width: 700px) {
  header {
    height: 90vh;
  }
}

.page-title,
.section-title {
  font-family: "Kanit", sans-serif;
  letter-spacing: 2px;
}

label {
  display: block;
  margin-bottom: 7px;
}

input,
textarea {
  width: 100%;
  border: 2px solid rgb(199, 197, 197);
  margin-bottom: 16px;
  padding: 16px;
  &:focus {
    outline: none;
    border: 2px solid rgb(199, 197, 197);
  }
}

textarea {
  resize: none;
}

button {
  color: white;
  padding: 10px 15px;
}
</style>
