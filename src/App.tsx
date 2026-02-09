import { computed, signal, effect } from "@preact/signals-react";

const count = signal(1);
const doubleCount = computed(() => count.value * 2);

effect(() => console.log(`Current count value: ${count.value}`));

setInterval(() => count.value++, 1000);

export default function App() {
  console.log("Call exactly once");

  // Whenever the `count` signal is updated, we'll
  // re-render this component automatically for you
  return <p>Value: {doubleCount}</p>;
}
