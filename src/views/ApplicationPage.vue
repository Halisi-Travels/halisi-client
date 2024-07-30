<template>
  <div id="application-page">
    <header class="banner">
      <div class="h-7" />

      <app-navbar />

      <div class="w-[20rem] mx-auto mt-28">
        <p class="page-title text-4xl text-secondary font-bold text-center">
          APPLY NOW
        </p>
      </div>
    </header>

    <main class="my-12 md:my-28">
      <seection class="details">
        <h1 class="font-bold text-3xl">Application Details</h1>
        <expansion-panel
          v-for="(item, index) in 4"
          :key="index"
          title="Europe"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magnam rem accusantium quibusdam deleniti ut nulla ea vitae debitis laborum quis ex repellendus quod deserunt omnis, saepe quos provident doloribus."
          :isActive="activePanelIndex === index"
          :panelIndex="index"
          @toggle-panel="handleTogglePanel"
        />
      </seection>

      <section class="w-11/12 md:w-1/2 mx-auto">
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
import ExpansionPanel from "@/components/accordion.vue";

export default {
  components: {
    "expansion-panel": ExpansionPanel,
  },

  data() {
    return {
      fileName: "",
      activePanelIndex: null,
    };
  },

  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
      }
    },

    handleTogglePanel(index) {
      this.activePanelIndex = this.activePanelIndex == index ? null : index;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  background-image: url("../assets/images/apply.png");
  background-size: cover;
  background-attachment: fixed;
  border-radius: 0 0 25% 25%;
  height: 50vh;
}

@media screen and (min-width: 700px) {
  header {
    height: 70vh;
  }
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
