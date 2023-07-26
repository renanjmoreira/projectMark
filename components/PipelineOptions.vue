<script setup>
const options = useOptions();
const selectedOption = useSelectedOption();

function changeSelectedOption(e, option) {
  if (this.selectedOption == option) {
    e.preventDefault();
  } else {
    this.selectedOption = option;
  }
}
</script>

<template>
  <div class="flex justify-center w-full">
    <h5 class="mt-10 mb-10 font-bold select-none text-[#2d3748] text-3xl">
      Please select the type of sales pipeline that best fits to you company
    </h5>
  </div>

  <div class="flex justify-center w-full">
    <div class="grid gap-3 grid-cols-4 w-[50%] mb-5 text-[14px]">
      <div class="relative w-full" v-for="option in options" :key="option">
        <input
          :id="option"
          type="checkbox"
          v-bind:onClick="(e) => changeSelectedOption(e, option)"
          v-model="selectedOption"
          :true-value="option"
          class="checked:before:absolute checked:before:-top-[30%] checked:before:-left-[20%] checked:before:scale-75 checked:before:content-[url('/assets/icons/checkmark.svg')] checked:bg-[#2462d1] checked:hover:bg-[#2462d1] checked:border-[#2462d1] peer absolute top-[30%] left-4 cursor-pointer w-[18px] h-[17px] border-[#cbd5e0] border-[2px] border-gray-200 rounded hover:bg-[#edf2f7] appearance-none"
        />
        <label
          :for="option"
          class="inline-block w-full cursor-pointer select-none py-3 px-12 border-[1px] border-gray-200 rounded-xl border-[#e2e8f0] hover:bg-[#edf2f7] peer-checked:cursor-default peer-checked:hover:bg-white peer-checked:border-[#2462d1] peer-checked:border-[2px]"
        >
          {{ option }}
        </label>
        <span
          class="hidden after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-[#e2e8f0] peer-checked:after:border-t-[#2462d1] peer-checked:block"
        ></span>
        <span
          class="hidden after:content-[''] after:absolute after:left-1/2 after:top-[93%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white peer-checked:block"
        ></span>
      </div>
    </div>
  </div>
</template>
