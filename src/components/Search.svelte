<script>
	import "../app.css"
	import { createEventDispatcher } from "svelte"

	const dispatch = createEventDispatcher()

	const url = "https://thecocktaildb.com/api/json/v1/1/search.php?s="
	let userInput

	const getRecipe = async () => {
		const response = await fetch(`${url}${userInput}`)

		if (!response.ok) {
			throw new Error(`An error occurred: ${response.status}`)
		}

		return await response.json()
	}

	const constructRecipe = async () => {
		try {
			const data = await getRecipe()
			const cocktail = data.drinks[0]
			const ingredients = []

			// This is the corrible consequence of some really weird design choices in the API
			let count = 1
			for (let i in cocktail) {
				let ingredient = ""
				let measure = ""

				if (i.startsWith("strIngredient") && cocktail[i]) {
					ingredient = cocktail[i]
					if (cocktail[`strMeasure${count}`]) {
						measure = cocktail[`strMeasure${count}`]
					} else {
						measure = ""
					}

					count++
					ingredients.push(`${ingredient}, ${measure}`)
				}
			}

			return {
				name: cocktail.strDrink,
				picture: cocktail.strDrinkThumb,
				ingredients: ingredients,
				instructions: cocktail.strInstructions,
			}
		} catch (error) {
			console.log(error.message)
			return { problem: "Sorry, couldn't find the recipe. Maybe, you misspelled the name of the cocktail?" }
		}
	}

	const passRecipe = async () => {
		const recipe = await constructRecipe()
		dispatch("Recipe", recipe)
	}
</script>

<div class="search">
	<input
		type="text"
		placeholder="Enter a coctail name"
		class="input"
		bind:value={userInput}
		on:keydown={e => {
			if (e.key === "Enter") {
				passRecipe()
			}
		}} />
	<button class="button" on:click={passRecipe}>Search</button>
</div>

<style>
	.search {
		display: grid;
		grid-template-columns: 3fr 1fr;
		gap: 1rem;
	}

	.input {
		width: 100%;
		padding: 0.6rem 0.3rem;
		border: none;
		outline: none;
		color: var(--color-text);
		font-size: var(--font-size-main);
		border-bottom: 1.5px solid var(--color-background-button);
	}

	.input::placeholder {
		color: var(--color-background-button);
	}

	.input:focus,
	.input:hover {
		border-bottom: 2px solid var(--color-accent);
	}

	.button {
		padding-inline: 1.5rem;
		border: none;
		outline: none;
		border-radius: 2rem;
		background-color: var(--color-background-button);
		color: var(--color-button);
	}

	.button:hover {
		background-color: var(--color-accent);
	}
</style>
