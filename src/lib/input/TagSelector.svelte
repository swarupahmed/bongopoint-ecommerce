<script>
	import { onMount } from 'svelte';
	import Select from 'svelte-select';

	let tags;
	export let preSelected;
	export let selected;
	let items;
	let values;

	onMount(async () => {
		let res = await fetch('/api/tag');
		tags = await res.json();
		console.log(tags);
		if (preSelected.length) {
			values = preSelected.map((el) => {
				return { value: el };
			});
			console.log(values);
		}
		items = tags.map((el) => {
			return {
				value: el._id,
				label: el.title
			};
		});
	});

	function handleSelect(event) {
		if (event.detail) {
			selected = event.detail.map((e) => e.value);
		} else {
			selected = [];
		}
		console.log(event.detail);
		console.log(selected);
	}
</script>

{#if items}
	<div>
		<label for="tag">tag</label>
		<Select {items} on:select={handleSelect} isMulti={true} value={values ?? null} />
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
