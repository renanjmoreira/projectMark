<script setup>
const boards = ref([
  {
    title: "LEAD",
    textColor: "text-[#46426d]",
    bgColor: "bg-[#f7f1ff]",
    borderColor: "border-[#f7f1ff]",
    hasFootRounded: false,
    hiddenIfIncludes: ["Basic"],
  },
  {
    title: "RFP IN PROGRESS",
    textColor: "text-[#704d2c]",
    bgColor: "bg-[#fef6ef]",
    borderColor: "border-[#fef6ef]",
    hasFootRounded: false,
    hiddenIfIncludes: [],
  },
  {
    title: "SUBMITTED",
    textColor: "text-[#003a66]",
    bgColor: "bg-[#e6f4ff]",
    borderColor: "border-[#e6f4ff]",
    hasFootRounded: true,
    hiddenIfIncludes: ["Basic"],
  },
  {
    title: "WON",
    textColor: "text-[#2a5154]",
    bgColor: "bg-[#def5f7]",
    borderColor: "border-[#def5f7]",
    hasFootRounded: true,
    hiddenIfIncludes: ["Basic", "Advanced"],
  },
  {
    title: "LOST",
    textColor: "text-[#773a47]",
    bgColor: "bg-[#fff2f6]",
    borderColor: "border-[#fff2f6]",
    hasFootRounded: false,
    hiddenIfIncludes: ["Basic", "Advanced"],
  },
  {
    title: "CLOSED",
    textColor: "text-[#4a5568]",
    bgColor: "bg-[#f2f7fa]",
    borderColor: "border-[#f2f7fa]",
    hasFootRounded: false,
    hiddenIfIncludes: [],
  },
]);

const selectedOption = useSelectedOption();

function isHidden(board) {
  return board.hiddenIfIncludes.includes(this.selectedOption);
}
</script>

<template>
  <div class="flex justify-center w-full mt-10 h-auto">
    <div class="flex justify-center gap-4 w-[98%] 2xl:w-[80%]">
      <div
        v-for="(board, index) in boards"
        :key="index"
        class="rounded-t-2xl mb-0.5 pt-3 w-1/6"
        :class="board.bgColor"
        v-bind:hidden="isHidden(board)"
      >
        <label class="font-bold p-3.5 text-[14px]" :class="board.textColor">
          {{ board.title }}
        </label>

        <div class="m-3 w-[48%] h-6 rounded-full bg-inherit mix-blend-multiply">
          <div
            class="w-[38%] bg-inherit h-full rounded-full mix-blend-multiply"
          ></div>
        </div>

        <div class="px-1 w-full">
          <div
            class="w-full border border-1 h-40 rounded-xl mix-blend-multiply"
            :class="board.borderColor"
          ></div>
        </div>

        <div
          class="left-0 w-full h-40 2xl:h-96 mt-28 bg-gradient-to-t from-white from-70%"
          :class="{ 'rounded-b-xl': board.hasFootRounded }"
        ></div>
      </div>
    </div>
  </div>
</template>
