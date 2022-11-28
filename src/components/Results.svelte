<script>
	import "../app.css"

	export let recipe
</script>

<div class="results">
	{#if recipe.problem}
		<p class="error">
			{recipe.problem}
		</p>
	{:else}
		<div class="hero">
			<img src={recipe.picture} alt="" class="picture" />
			<h1 class="title">{recipe.name}</h1>
		</div>

		<div class="ingredients">
			<h2 class="subtitle">Ingredients</h2>

			<ul class="ingredients__list">
				{#each recipe.ingredients as ingredient}
					<li class="ingredients__list-item">{ingredient}</li>
				{/each}
			</ul>
		</div>

		<div class="instructions">
			<h2 class="subtitle">Instructions</h2>
			<p class="instructions__text">{recipe.instructions}</p>
		</div>
	{/if}
</div>

<style>
	.results {
		display: flex;
		flex-direction: column;
		gap: 1rem;

		line-height: 2;
		font-size: var(--font-size-main);
		color: var(--color-text);
	}

	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.picture {
		max-width: 12.5rem;
	}

	.title {
		position: relative;
		font-size: var(--font-size-heading);
		text-transform: uppercase;
	}

	.title::before {
		content: "";
		position: absolute;
		width: 50%;
		border-bottom: 2px solid var(--color-background-button);
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}

	.subtitle {
		font-size: var(--font-size-2d-heading);
		margin-block-end: 0.5rem;
	}

	.ingredients__list {
		display: grid;
		list-style-position: inside;
		gap: 0.4rem;
	}

	@media (min-width: 25rem) {
		.ingredients__list {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
