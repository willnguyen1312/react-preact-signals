import { signal } from "@preact/signals-react";

const count = signal(0);

setInterval(() => {
  count.value++;
}, 1000);

export default function App() {
  // Whenever the `count` signal is updated, we'll
  // re-render this component automatically for you
  return <p>Value: {count.value}</p>;
}
