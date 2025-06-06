<template>
  <div id="auth-page">
    <header
      class="h-[50vh] bg-gray-600 text-white flex items-center justify-center"
    >
      <p class="page-title font-bold text-4xl">LOGIN</p>
    </header>

    <main class="lg:w-8/12 md:w-10/12 w-11/12 mx-auto my-28">
      <p
        v-if="showSuccessMessage"
        class="p-3 bg-green-200 text-green-700 border-l-4 border-green-700 tracking-wider font-semibold uppercase text-sm mb-8"
      >
        Account Successfully Registered. Use your credentials to
        <span class="text-secondary/60">LOGIN NOW</span>
      </p>

      <p
        v-if="error"
        class="p-3 bg-red-200 text-red-600 border-l-4 border-red-600 tracking-wider font-semibold uppercase text-sm mb-8"
      >
        {{ error }}
      </p>

      <div class="flex gap-20 flex-col lg:flex-row">
        <section class="login flex-1">
          <form
            @submit.prevent="userLogin"
            action="POST"
            class="flex flex-col gap-2"
          >
            <h2 class="text-2xl font-bold">LOGIN</h2>

            <input
              v-model="loginForm.email"
              type="email"
              name="email"
              placeholder="Email"
            />

            <div class="password-input relative">
              <input
                v-model="loginForm.password"
                :type="loginInputType"
                name="password"
                placeholder="Password"
                id="password"
                class="outline-0 w-full p-2 mt-3 mb-4 border border-slate-400 rounded bg-white"
              />

              <span
                @click="toggleInput('login')"
                class="absolute right-3 top-5 text-grey-200 cursor-pointer"
                ><i
                  class="bx text-2xl"
                  :class="[showLoginPassword ? 'bx-hide' : 'bx-show']"
                ></i>
              </span>
            </div>

            <button
              name="login button"
              id="login_btn"
              type="submit"
              :disabled="loading"
              class="relative flex items-center rounded-md px-4 py-2 font-bold bg-secondary text-white w-fit h-fit disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span
                v-if="loading"
                class="absolute left-4 inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"
              ></span>
              <span v-if="!loading">LOGIN</span>
              <span v-else>Logging in...</span>
            </button>
          </form>
        </section>

        <hr class="lg:hidden" />

        <section class="signup flex-1">
          <form
            @submit.prevent="userSignup"
            action="POST"
            class="flex flex-col gap-2"
          >
            <h2 class="text-2xl font-bold">REGISTER</h2>
            <select
              id="userType"
              name="userType"
              class="border rounded px-3 py-2"
              v-model="registerForm.role"
            >
              <option value="candidate">Candidate</option>
              <option value="employer">Employer</option>
            </select>

            <input
              v-model="registerForm.name"
              type="name"
              name="name"
              placeholder="Name"
            />
            <input
              v-model="registerForm.email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              v-model="registerForm.phone"
              type="text"
              name="phone"
              placeholder="Phone"
            />

            <div class="password-input relative">
              <input
                v-model="registerForm.password"
                :type="registerInputType"
                name="password"
                placeholder="Password"
                id="password"
                class="outline-0 w-full p-2 mt-3 mb-4 border border-slate-400 rounded bg-white"
              />

              <span
                @click="toggleInput('register')"
                class="absolute right-3 top-5 text-grey-200 cursor-pointer"
                ><i
                  class="bx text-2xl"
                  :class="[showRegisterPassword ? 'bx-hide' : 'bx-show']"
                ></i>
              </span>
            </div>

            <button
              name="signup"
              id="signup_btn"
              type="submit"
              :disabled="loading"
              class="relative flex items-center rounded-md px-4 py-2 font-bold bg-secondary text-white w-fit h-fit disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span
                v-if="loading"
                class="absolute left-4 inline-block w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"
              ></span>
              <span v-if="!loading">SUBMIT</span>
              <span v-else>registering...</span>
            </button>
          </form>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      rememberMe: false,
      showSuccessMessage: false,
      showLoginPassword: false,
      showRegisterPassword: false,
      loginForm: {
        email: "",
        password: "",
      },
      registerForm: {
        role: "",
        name: "",
        email: "",
        phone: "",
        password: "",
      },
    };
  },

  computed: {
    ...mapGetters(["isAuthenticated", "error", "loading"]),

    loginInputType() {
      return this.showLoginPassword ? "text" : "password";
    },

    registerInputType() {
      return this.showRegisterPassword ? "text" : "password";
    },
  },

  methods: {
    ...mapActions(["login", "signup", "setError"]),

    toggleInput(param) {
      if (param == "login") {
        this.showLoginPassword = !this.showLoginPassword;
      } else if (param == "register") {
        this.showRegisterPassword = !this.showRegisterPassword;
      }
    },

    async userLogin() {
      if (this.loginForm.email != "" && this.loginForm.password != "") {
        let userData = new FormData();

        userData.append("email", this.loginForm.email);
        userData.append("password", this.loginForm.password);

        await this.login(userData);

        if (!this.error) {
          // clear the fields
          this.loginForm.email = "";
          this.loginForm.password = "";
        }
      } else {
        this.setError("Email and Password is required!");
      }
    },

    async userSignup() {
      if (
        this.registerForm.role != "" &&
        this.registerForm.name != "" &&
        this.registerForm.email != "" &&
        this.registerForm.phone != "" &&
        this.registerForm.password != ""
      ) {
        let userData = new FormData();

        userData.append("name", this.registerForm.name);
        userData.append("email", this.registerForm.email);
        userData.append("phone", this.registerForm.phone);
        userData.append("role", this.registerForm.role);
        userData.append("password", this.registerForm.password);

        await this.signup(userData);

        if (!this.error) {
          this.showSuccessMessage = true;

          // clear the fields
          this.registerForm.name = "";
          this.registerForm.email = "";
          this.registerForm.phone = "";
          this.registerForm.password = "";

          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);
        }
      } else {
        this.setError("All fields are required!");
      }
    },
  },
};
</script>

<style scoped lang="scss">
input,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
}

form input:not(:last-child),
select {
  margin-bottom: 10px;
}
</style>
