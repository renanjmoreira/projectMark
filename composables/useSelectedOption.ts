import { useState } from "nuxt/app";
import useOptions from "./useOptions";

export default function () {
  const options = useOptions();
  return useState("selectedOption", () => options.value[0]);
}
