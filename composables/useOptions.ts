import { useState } from "nuxt/app";

export default function () {
  return useState("options", () => ["Basic", "Advanced", "Expert", "Custom"]);
}
