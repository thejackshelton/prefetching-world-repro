import { component$, $ } from "@builder.io/qwik";

export default component$(() => {
  const test = $(() => {
    console.log("hi");
  });

  return <button onClick$={test}>Click me</button>;
});
