<template>
  <div id="contact">
    <header class="banner h-4 w-full overflow-hidden">
      <div class="bg-black/60 w-full h-full">
        <div class="h-7"></div>

        <app-navbar />

        <div class="w-[20rem] mx-auto mt-28">
          <p class="page-title text-3xl text-white font-bold text-center">
            CONTACT US
          </p>
        </div>
      </div>
    </header>

    <main class="px-4 md:mx-0">
      <div
        class="contact-div flex md:flex-row flex-col gap-14 justify-around md:w-10/12 mx-auto my-12"
      >
        <div class="info flex flex-col gap-10">
          <div class="contact-info flex flex-col gap-2">
            <p class="text-3xl font-semibold mb-3 text-primary">Contact Info</p>
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
            <p class="text-3xl font-semibold mb-3 text-primary">
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
            <p class="text-3xl font-semibold mb-3 text-primary">Social Media</p>
            <ul class="flex gap-4">
              <li>
                <i class="fa fa-facebook text-lg"></i>
              </li>
              <li>
                <i class="fa fa-instagram text-lg"></i>
              </li>
              <li>
                <i class="fa fa-linkedin text-lg"></i>
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
          <p class="text-3xl font-semibold mb-3 text-primary">Feedback Form</p>
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
export default {
  name: "HomePage",
};
</script>

<style scoped lang="scss">
.banner {
  background-image: url("../assets/images/contact.png");
  background-size: cover;
  background-attachment: fixed;
  border-radius: 0 0 25% 25%;
  height: 60vh;
}

@media screen and (min-width: 700px) {
  .banner {
    height: 70vh;
  }
}

.page-title {
  font-family: "Handlee", cursive;
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
