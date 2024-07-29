<template>
  <div id="contact">
    <main>
      <div class="banner h-4 w-full">
        <div class="h-7"></div>

        <app-navbar />

        <div class="w-[20rem] mx-auto mt-28">
          <p class="page-title text-3xl text-white font-bold text-center">
            CONTACT US
          </p>
        </div>
      </div>

      <div class="contact-div flex justify-around w-10/12 mx-auto my-12">
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
              <span class="font-semibold">Head Office Address: </span>11th Flr,
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
        </div>

        <form class="form w-5/12" @submit.prevent="">
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
  background-image: url("../assets/images/map.jpg");
  background-size: cover;
  border-radius: 0 0 25% 25%;
  height: 60vh;
}

.page-title {
  font-family: "Handlee", cursive;
}

label {
  display: block;
}

input,
textarea {
  width: 90%;
  border: 2px solid rgb(199, 197, 197);
  margin-bottom: 16px;
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
