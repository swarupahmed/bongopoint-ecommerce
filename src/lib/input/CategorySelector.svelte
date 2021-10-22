<script>
	import { onMount } from 'svelte';

	import Select from 'svelte-select';

	let categories;
	export let preSelected;
	export let selected;
	let items;

	onMount(async () => {
		let res = await fetch('/api/category');
		categories = await res.json();
		console.log(categories);
		items = categories.map((el) => {
			return {
				value: el._id,
				label: el.title
			};
		});
	});

	function handleSelect(event) {
		if (event.detail) {
			selected = event.detail;
		} else {
			selected = undefined;
		}
		console.log(event.detail);
		console.log(selected);
	}
</script>

{#if items}
	<div>
		<label for="cat">category</label>
		<Select {items} on:select={handleSelect} value={preSelected ? { value: preSelected } : null} />
	</div>
{/if}

<style>
	div {
		display: flex;
		flex-direction: column;
	}
	label {
		padding: 6px 0;
	}
</style>
