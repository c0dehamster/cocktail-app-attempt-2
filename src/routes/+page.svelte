<script>
	import "../app.css"
	import Search from "../components/Search.svelte"
	import Results from "../components/Results.svelte"
	import { loop_guard } from "svelte/internal"

	let recipe
</script>

<main class="card">
	<Search on:Recipe={e => (recipe = e.detail)} />
	{#if recipe}
		<Results {recipe} />
	{/if}
</main>

<style>
	.card {
		max-width: 40rem;
		margin-inline: 1rem;
		margin-block: 1.5rem;
		padding: 1.8rem;

		display: flex;
		flex-direction: column;
		gap: 1.6rem;

		border-radius: 0.6rem;

		background-color: var(--color-background);
	}
</style>
