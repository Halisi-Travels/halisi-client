<template>
  <div id="service-info">
    <div class="banner">
      <div class="h-7" />
      <app-navbar class="mb-4" />

      <div class="h-full flex flex-col justify-center">
        <p class="text-5xl font-bold text-center">Flight Booking</p>
        <p
          class="slogan text-2xl font-semibold text-center w-7/12 mx-auto mt-2 tracking-wider"
        >
          Book. Fly. Enjoy. Repeat
        </p>
      </div>
    </div>

    <main class="my-36 px-28">
      <section class="flex justify-center gap-20">
        <div class="rounded-3xl overflow-hidden">
          <img
            width="600px"
            :src="require('@/assets/images/passport.jpg')"
            alt="service image"
          />
        </div>
        <div class="w-1/2">
          <p class="text-xl mt-12 tracking-wider text-center">
            We craft seamless flight bookings tailored to your needs. With
            extensive network of airline partnersand advanced technology, we
            personalize travel itineraries to fit your preferences. Whether you
            prefer direct flights, multi-city journeys, or budget-friendly
            options, our dedicated team ensures the best routes and fares. Trust
            Halisi Travels for precision-managed journeys, letting you your next
            adventure with confidence
          </p>
        </div>
      </section>

      <section class="flex justify-center gap-20 mt-36">
        <div class="w-1/2">
          <p class="service-title font-bold text-3xl text-secondary underline">
            Requirements
          </p>
          <ol class="mt-10 flex flex-col gap-4">
            <li>
              <span class="text-md font-semibold">Personal Information: </span>
              Have a valid email address and phone number for communication
              regarding your booking.
            </li>
            <li>
              <span class="text-md font-semibold">Travel Documents: </span>
              For international flights, a valid passport is required. Obtain
              necessary visa before booking your flight. For domestic flights, a
              government-issued photo ID is required.
            </li>
            <li>
              <span class="text-md font-semibold">Payment Information: </span>
              A valid credit or debit card is needed to complete the booking.
              Ensure your card has sufficient funds for the transaction.
            </li>
            <li>
              <span class="text-md font-semibold">Travel Preferences: </span>
              Specify your preferred travel class (economy, business, or first
              class). Indicate any special requests such as meal preferences
              (vegetarian, vegan, kosher, etc.), seating preferences, or
              assistance needs (wheelchair, etc.).
            </li>
          </ol>
        </div>

        <div class="rounded-3xl overflow-hidden">
          <img
            width="600px"
            :src="require('@/assets/images/schedule.jpg')"
            alt="service image"
          />
        </div>
      </section>

      <section class="tips mt-36 w-8/12 mx-auto">
        <p class="text-4xl font-bold text-primary">
          Tips for a Smooth Flight Experience
        </p>

        <ul class="mt-6 flex flex-col gap-3 text-lg">
          <li>
            <span class="font-bold">Check-in Online: </span>Save time by
            checking in online and selecting your seat before arriving at the
            airport.
          </li>
          <li>
            <span class="font-bold">Arrive Early: </span>Ensure you arrive at
            the airport at least 2 hours before a domestic flight and 3 hours
            before an international flight.
          </li>
          <li>
            <span class="font-bold">Pack Smart: </span>Review airline baggage
            policies and pack accordingly to avoid extra fees and delays at
            security checkpoints
          </li>
          <li>
            <span class="font-bold">Stay Updated: </span>Keep an eye on flight
            status updates and any travel advisories that may affect your
            journey.
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service: "",
    };
  },
};
</script>

<style scoped lang="scss">
.banner {
  background-image: url("../assets/images/booking.jpg");
  background-attachment: fixed;
  background-size: cover;
  height: 80vh;
  color: black;
  border-radius: 0 0 20% 20%;
}

.slogan,
.service-title,
.tips p:first-child {
  font-family: "Handlee", cursive;
}
</style>
