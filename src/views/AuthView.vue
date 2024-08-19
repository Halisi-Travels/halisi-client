<template>
  <div id="auth-page">
    <header
      class="h-[50vh] bg-gray-600 text-white flex items-center justify-center"
    >
      <p class="font-bold text-4xl">LOGIN</p>
    </header>

    <main class="lg:w-8/12 md:w-10/12 w-11/12 mx-auto my-28">
      <!-- <p
        class="p-3 bg-green-200 tracking-wider font-semibold uppercase text-sm"
      >
        A mail has been sent to your Sign Up email address. Please follow the
        link to activate your account If you don't get an email, please check
        your spam folder
      </p>

      <p
        class="p-3 bg-green-200 tracking-wider font-semibold uppercase text-sm"
      >
        Your account has been activated, you can
        <span class="text-secondary/70">LOG IN Now</span>
      </p> -->

      <div class="flex gap-20 flex-col lg:flex-row">
        <section class="login flex-1">
          <form action="POST" class="flex flex-col gap-2">
            <h2 class="text-2xl font-bold">LOGIN</h2>

            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />

            <button
              type="submit"
              class="rounded-md px-4 py-2 font-bold bg-secondary text-white w-fit h-fit"
            >
              LOGIN
            </button>

            <div class="remember flex justify-between mt-4">
              <div class="flex gap-2 text-sm">
                <input type="checkbox" name="remember" id="remember" />
                <p>Remember me</p>
              </div>

              <p class="text-secondary/70">forgot password?</p>
            </div>
          </form>
        </section>
        <hr class="lg:hidden" />
        <section class="signup flex-1">
          <form action="POST" class="flex flex-col gap-2">
            <h2 class="text-2xl font-bold">REGISTER</h2>

            <input type="name" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />

            <button
              type="submit"
              class="rounded-md px-4 py-2 font-bold bg-secondary text-white w-fit"
            >
              SUBMIT
            </button>
          </form>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
input {
  width: 100%;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
}

form input:not(:last-child) {
  margin-bottom: 10px;
}
</style>
