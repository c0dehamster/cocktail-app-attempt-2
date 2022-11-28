import { c as create_ssr_component, d as createEventDispatcher, f as add_attribute, v as validate_component } from "../../chunks/index.js";
const app = "";
const Search_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".search.svelte-r1cqx{display:grid;grid-template-columns:3fr 1fr;gap:1rem}.input.svelte-r1cqx{width:100%;padding:0.6rem 0.3rem;border:none;outline:none;color:var(--color-text);font-size:var(--font-size-main);border-bottom:1.5px solid var(--color-background-button)}.input.svelte-r1cqx::placeholder{color:var(--color-background-button)}.input.svelte-r1cqx:focus,.input.svelte-r1cqx:hover{border-bottom:2px solid var(--color-accent)}.button.svelte-r1cqx{padding-inline:1.5rem;border:none;outline:none;border-radius:2rem;background-color:var(--color-background-button);color:var(--color-button)}.button.svelte-r1cqx:hover{background-color:var(--color-accent)}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let userInput;
  $$result.css.add(css$1);
  return `<div class="${"search svelte-r1cqx"}"><input type="${"text"}" placeholder="${"Enter a coctail name"}" class="${"input svelte-r1cqx"}"${add_attribute("value", userInput, 0)}>
	<button class="${"button svelte-r1cqx"}">Search</button>
</div>`;
});
const Results_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-1fbrwya{max-width:40rem;margin-inline:1rem;margin-block:1.5rem;padding:1.8rem;display:flex;flex-direction:column;gap:1.6rem;border-radius:0.6rem;background-color:var(--color-background)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"card svelte-1fbrwya"}">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}
	${``}
</main>`;
});
export {
  Page as default
};
