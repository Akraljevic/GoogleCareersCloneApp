<template>
  <accordion header="Financial wellbeing" class="border-b pb-6">
    <div class="flex items-start">
      <!-- Icon and Introductory Text -->
      <div class="flex items-start space-x-4 w-1/3">
        <div class="bg-blue-100 p-4 rounded-full">
          <font-awesome-icon
            :icon="['fas', 'money-bill-wave']"
            class="text-blue-600 text-2xl"
          />
        </div>
        <p class="text-lg text-gray-700 font-medium">
          Providing compensation and programs that give our employees financial
          peace of mind.
        </p>
      </div>

      <!-- List Items Positioned to the Right -->
      <div class="w-2/3">
        <ul class="grid grid-cols-2 gap-y-3 pl-10">
          <li
            v-for="item in financialItems"
            :key="item"
            class="flex items-start space-x-2"
          >
            <font-awesome-icon
              :icon="['fas', 'check']"
              class="text-blue-500 text-lg mt-1"
            />
            <span class="text-gray-800 text-base">{{ item.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </accordion>
</template>

<script>
export default {
  data() {
    return {
      financialItems: [
        { text: "Competitive compensation" },
        { text: "Regular bonus and equity refresh opportunities" },
        { text: "Generous 401(k) and regional retirement plans" },
        { text: "Annual cross-company pay equity analysis and adjustments" },
        { text: "Student loan reimbursement" },
        { text: "1-on-1 financial coaching" },
      ],
    };
  },
};
</script>
