<template>
  <div id="jobs-table">
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200">
        <thead
          class="font-bold bg-gray-100 text-left text-xs text-gray-500 uppercase tracking-widest"
        >
          <tr>
            <th class="px-6 py-3">Job Title</th>
            <th class="px-6 py-3">Country</th>
            <th class="px-6 py-3">Job Type</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr
            v-for="(job, index) in jobs"
            :key="index"
            class="hover:bg-gray-50 hover:border-l-4 border-secondary hover:cursor-pointer"
            @click="$router.push(`/jobs/${job._id}`)"
          >
            <td class="px-6 py-4">
              <div class="text-sm font-bold text-gray-900 uppercase">
                {{ job.title }}
              </div>
            </td>

            <td class="px-6 py-4">
              <div class="text-sm text-gray-500 capitalize">
                <p>{{ job.country }}</p>
              </div>
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
  props: ["jobs"],
};
</script>
