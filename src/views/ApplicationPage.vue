<template>
  <div id="application-page">
    <header class="banner">
      <div class="h-7" />

      <app-navbar />

      <div class="w-[20rem] mx-auto mt-28">
        <p class="page-title text-4xl text-white font-bold text-center">
          APPLY NOW
        </p>
      </div>
    </header>

    <main class="my-28">
      <section class="w-1/2 mx-auto">
        <p class="section-title text-3xl text-secondary mb-6">
          Application Form
        </p>

        <form @submit.prevent="" class="flex flex-col gap-3">
          <div class="input-div">
            <label for="name">Full Name</label>
            <input type="text" name="name" />
          </div>

          <div class="input-div">
            <label for="email">Email Address</label>
            <input type="email" name="email" />
          </div>

          <div class="input-div">
            <label for="phone">Phone Number</label>
            <input type="phone" name="phone" />
          </div>

          <div class="flex gap-11 mb-10">
            <label
              for="file-upload"
              class="custom-file-upload btn border border-primary p-3 rounded-md m-0 block text-center"
            >
              <i class="fa fa-upload"></i>
              Upload your CV
            </label>

            <input
              type="file"
              id="file-upload"
              accept="application/pdf"
              @change="handleFileUpload"
            />

            <p class="my-6 text-lg font-semibold">
              selected file:
              <span class="text-secondary text-sm">{{ fileName }}</span>
            </p>
          </div>

          <p class="text-xs text-red-500 font-bold">
            Only pdf files are allowed for upload*
          </p>

          <button
            type="submit"
            class="bg-primary w-6/12 mx-auto py-3 mt-7 rounded-lg font-semibold hover:bg-secondary text-white"
          >
            Send Application
          </button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileName: "",
    };
  },

  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
      }
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background-image: url("../assets/images/birds.jpg");
  background-size: cover;
  background-attachment: fixed;
  border-radius: 0 0 25% 25%;
  height: 70vh;
}

.page-title,
.section-title {
  font-family: "Handlee", cursive;
}

label {
  font-size: 18px;
  display: block;
}

input {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
}

input[type="file"] {
  display: none;
}

.custom-file-upload {
  display: inline-block;
  margin-top: 1rem;
  font-size: 20px;
  width: 232px;
  height: auto;
  cursor: pointer;
}
</style>
