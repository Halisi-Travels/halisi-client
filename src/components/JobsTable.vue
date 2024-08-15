<template>
  <div id="jobs-table">
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200">
        <thead
          class="font-bold bg-gray-100 text-left text-xs text-gray-500 uppercase tracking-widest"
        >
          <tr>
            <th class="px-6 py-3">Job Title</th>
            <th class="px-6 py-3">Location</th>
            <th class="px-6 py-3">Job Type</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr
            v-for="(job, index) in jobs"
            :key="index"
            class="hover:bg-gray-50 hover:border-l-2 border-secondary cursor-pointer"
            @click="$router.push(`/job/${job.id}`)"
          >
            <td class="px-6 py-4">
              <div class="text-sm font-medium text-gray-900 uppercase">
                {{ job.title }}
              </div>
              <div class="text-sm text-gray-500">
                <span class="font-semibold">Our Client:</span>
                {{ job.client }}
              </div>
            </td>

            <td class="px-6 py-4">
              <div class="text-sm text-gray-500">{{ job.location }}</div>
            </td>

            <td class="px-6 py-4">
              <span
                class="px-2 inline-flex text-xs leading-5 font-semibold uppercase rounded-full bg-green-100 text-green-800"
              >
                {{ job.type }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          id: 1,
          title: "Software Engineer",
          client: "Company YUIJ",
          location: "New York, NY",
          type: "Full-Time",
        },
        {
          id: 2,
          title: "Data Analyst",
          client: "Company SWER",
          location: "San Francisco, CA",
          type: "Part-Time",
        },
        {
          id: 3,
          title: "Project Manager",
          client: "Company XYZ",
          location: "Remote",
          type: "Contract",
        },
      ],
    };
  },
};
</script>
